import Task from "@sandbox/domain/Task/Task";
import TaskHistoryEntry from '@sandbox/domain/Task/TaskHistoryEntry';

export type TaskToUpdate = {
  id: Task['id'];
} & Partial<Task>;

interface TaskRepositoryInterface {
  createTask(listKey: string, title: string): Promise<Task>;
  updateTask(listKey: string, task: TaskToUpdate): Promise<Task>;
  getTaskHistory(listKey: string, taskId: number): Promise<TaskHistoryEntry[]>;
}

export default TaskRepositoryInterface;
