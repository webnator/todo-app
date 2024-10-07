import dbConfig from '../../../config/db.config';
import { Dependencies } from '../../../container';
import Time from '../../../domain/primitives/Time';
import Task from '../../../domain/Task/Task';
import TaskStatus from '../../../domain/Task/TaskStatus.enum';
import TaskRepositoryInterface from '../../../services/abstractions/task/taskRepository.interface';
import { DbUser, restore as restoreUser } from '../user/user.repository';
import { DbList, restore as restoreList } from '../list/list.repository';
import TaskHistoryEntry from '../../../domain/Task/TaskHistoryEntry';

type DbTask = {
  id?: number;
  list_id: number;
  user_id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  created_at: string;
  updated_at: string;
}

type DbTaskHistoryEntry = {
  id?: number;
  task_id: number;
  user_id: number;
  from_status: TaskStatus;
  to_status: TaskStatus;
  created_at: string;
}

export type DbTaskResult = { task: DbTask; user: DbUser; list: DbList; };
export type DbTaskHistoryEntryResult = { task_status_history: DbTaskHistoryEntry; user: DbUser; };

export default ({ dbAdapter }: Dependencies): TaskRepositoryInterface => {
  function baseQuery() {
    const query = dbAdapter(`${dbConfig.TABLES.TASK} as task`)
      .leftJoin<DbTaskResult>(`${dbConfig.TABLES.USER} as user`, { 'task.user_id': 'user.id' })
      .leftJoin<DbTaskResult>(`${dbConfig.TABLES.LIST} as list`, { 'task.list_id': 'list.id' })
      .select<DbTaskResult[]>(dbAdapter.raw('row_to_json("user".*) AS "user", row_to_json("task".*) AS "task", row_to_json("list".*) AS "list"'))
      .options({ nestTables: true });

    return query;
  }

  function baseQueryHistory() {
    const query = dbAdapter(`${dbConfig.TABLES.TASK_STATUS_HISTORY} as task_status_history`)
      .leftJoin<DbTaskHistoryEntryResult>(`${dbConfig.TABLES.USER} as user`, { 'task_status_history.user_id': 'user.id' })
      .select<DbTaskHistoryEntryResult[]>(dbAdapter.raw('row_to_json("user".*) AS "user", row_to_json("task_status_history".*) AS "task_status_history"'))
      .options({ nestTables: true });

    return query;
  }

  return {
    async getById(id) {
      const [task] = await baseQuery().where('task.id', id);
      return task ? restore(task) : null;
    },

    async getForList(listId) {
      const tasks = await baseQuery().where('list.id', listId);
      return tasks.map(restore);
    },

    async create(task) {
      const [dbTask] = await dbAdapter<DbTask>(dbConfig.TABLES.TASK).insert(adapt(task)).returning('id');
      task.id = dbTask.id;
      return task;
    },

    async update(task, historyEntry) {
      await dbAdapter.transaction(async trx => {
        await trx<DbTask>(dbConfig.TABLES.TASK).update(adapt(task)).where('id', task.id);
        if (historyEntry) {
          await trx<DbTask>(dbConfig.TABLES.TASK_STATUS_HISTORY).insert(adaptHistory(task.id, historyEntry));
        }
      });
    },

    async getHistory(taskId) {
      const historyEntries = await baseQueryHistory().where('task_status_history.task_id', taskId).orderBy('task_status_history.created_at', 'asc');
      return historyEntries.map(restoreHistory);
    },
  };
};

function restore(dbTask: DbTaskResult): Task {
  return new Task({
    id: dbTask.task.id,
    user: restoreUser(dbTask.user),
    list: restoreList({ list: dbTask.list, user: dbTask.user }),
    title: dbTask.task.title,
    description: dbTask.task.description,
    status: dbTask.task.status,
    createdAt: Time.fromString(dbTask.task.created_at),
    updatedAt: Time.fromString(dbTask.task.updated_at),
  });
}

function adapt(task: Task): DbTask {
  return {
    id: task.id,
    user_id: task.user.id,
    list_id: task.list.id,
    title: task.title,
    description: task.description,
    status: task.status,
    created_at: task.createdAt.format(),
    updated_at: task.updatedAt.format(),
  };
}

function restoreHistory(dbTask: DbTaskHistoryEntryResult): TaskHistoryEntry {
  return new TaskHistoryEntry({
    id: dbTask.task_status_history.id,
    user: restoreUser(dbTask.user),
    from: dbTask.task_status_history.from_status,
    to: dbTask.task_status_history.to_status,
    createdAt: Time.fromString(dbTask.task_status_history.created_at),
  });
}

function adaptHistory(taskId: number, historyEntry: TaskHistoryEntry): DbTaskHistoryEntry {
  return {
    id: historyEntry.id,
    task_id: taskId,
    user_id: historyEntry.user.id,
    from_status: historyEntry.from,
    to_status: historyEntry.to,
    created_at: historyEntry.createdAt.format(),
  };
}
