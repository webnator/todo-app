import Task from '../../domain/Task/Task';
import TaskHistoryEntry from '../../domain/Task/TaskHistoryEntry';
import TaskStatus from '../../domain/Task/TaskStatus.enum';
import { publicUserModel, PublicUserOutput } from './user.model';

export type TaskHistoryOutput = {
  id: number;
  user: PublicUserOutput;
  from: TaskStatus;
  to: TaskStatus;
  createdAt: string;
}

export default function taskHistoryModel(taskHistory: TaskHistoryEntry): TaskHistoryOutput {
  return {
    id: taskHistory.id,
    user: publicUserModel(taskHistory.user),
    from: taskHistory.from,
    to: taskHistory.to,
    createdAt: taskHistory.createdAt.format(),
  };
}
