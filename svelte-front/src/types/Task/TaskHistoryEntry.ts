import type { PublicUser } from '../User/User';
import TaskStatus from './TaskStatus.enum';

type TaskHistoryEntry = {
  id: number;
  user: PublicUser;
  from: TaskStatus;
  to: TaskStatus;
  createdAt: string;
}

export type { TaskHistoryEntry };
