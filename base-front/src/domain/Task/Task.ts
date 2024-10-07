import { PublicUser } from '../User/User';
import TaskStatus from './TaskStatus.enum';

type Task = {
  id: number;
  listKey: string;
  user: PublicUser;
  title: string;
  description?: string;
  status: TaskStatus;
  allowedTransitions: TaskStatus[];
  createdAt: string;
  updatedAt: string;
}

export default Task;
