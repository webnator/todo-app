import Task from '../../../domain/Task/Task';
import TaskHistoryEntry from '../../../domain/Task/TaskHistoryEntry';

interface TaskRepositoryInterface {
  getById(id: number): Promise<Task>;
  getForList(listId: number): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  update(task: Task, historyEntry?: TaskHistoryEntry): Promise<void>;
  getHistory(taskId: number): Promise<TaskHistoryEntry[]>;
}

export default TaskRepositoryInterface;
