import { Dependencies } from '../container';
import Task from '../domain/Task/Task';
import TaskHistoryEntry from '../domain/Task/TaskHistoryEntry';
import TaskStatus from '../domain/Task/TaskStatus.enum';
import { EntityAction } from '../infra/adapters/ws.adapter';
import taskModel, { TaskOutput } from './outputModels/task.model';
import taskHistoryModel, { TaskHistoryOutput } from './outputModels/taskHistory.model';

export type TaskPayload = {
  listSharedKey: string;
  title: string;
  description: string;
}

export type TaskUpdatePayload = Partial<{
  title: string;
  description: string;
  status: TaskStatus;
}>;

export default ({
  logger,
  userService,
  listService,
  taskRepository,
  taskService,
  wsAdapter,
}: Dependencies) => {
  return {
    async getTasksForList(listKey: string): Promise<TaskOutput[]> {
      logger.debug({ listKey }, 'Retrieving tasks for list');
      const list = await listService.getBySharedKey(listKey);

      const tasks = await taskRepository.getForList(list.id);
      return tasks.map(taskModel);
    },

    async create(userId: number, taskPayload: TaskPayload): Promise<TaskOutput> {
      logger.debug({ userId, listKey: taskPayload.listSharedKey, titel: taskPayload.title }, 'Creating task in list for user');
      const [ user, list ] = await Promise.all([
        userService.getById(userId),
        listService.getBySharedKey(taskPayload.listSharedKey),
      ]);

      const newTask = new Task({
        ...taskPayload,
        user,
        list,
      });

      const task = await taskRepository.create(newTask);
      wsAdapter.broadcastTask(task, EntityAction.CREATE);
      return taskModel(task);
    },

    async update(userId: number, taskId: number, taskPayload: TaskUpdatePayload): Promise<TaskOutput> {
      logger.debug({ userId, taskId }, 'Updating task from user');
      const [ user, task ] = await Promise.all([
        userService.getById(userId),
        taskService.getById(taskId),
      ]);

      let taskHistoryEntry: TaskHistoryEntry;
      if (taskPayload.status && taskPayload.status !== task.status) {
        taskHistoryEntry = new TaskHistoryEntry({ user, from: task.status, to: taskPayload.status });
      }

      task.update(taskPayload);
      
      await taskRepository.update(task, taskHistoryEntry);
      wsAdapter.broadcastTask(task, EntityAction.UPDATE);
      return taskModel(task);
    },

    async getStatusHistory(taskId: number): Promise<TaskHistoryOutput[]> {
      const historyEntries = await taskRepository.getHistory(taskId);
      return historyEntries.map(taskHistoryModel);
    },
  };
};
