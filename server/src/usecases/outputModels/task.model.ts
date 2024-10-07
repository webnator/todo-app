import Task from '../../domain/Task/Task';
import TaskStatus from '../../domain/Task/TaskStatus.enum';
import { publicUserModel, PublicUserOutput } from './user.model';

export type TaskOutput = {
  id: number;
  listKey: string;
  user: PublicUserOutput;
  title: string;
  description: string;
  status: TaskStatus;
  allowedTransitions: TaskStatus[];
  createdAt: string;
  updatedAt: string;
}

export default function taskModel(task: Task): TaskOutput {
  return {
    id: task.id,
    listKey: task.list.sharedKey,
    user: publicUserModel(task.user),
    title: task.title,
    description: task.description,
    status: task.status,
    allowedTransitions: task.allowedTransitions,
    createdAt: task.createdAt.format(),
    updatedAt: task.updatedAt.format(),
  };
}
