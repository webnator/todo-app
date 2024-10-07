import Time from '../primitives/Time';
import User from '../User/User';
import TaskStatus from './TaskStatus.enum';

type TaskHistoryEntryParams = {
  id?: number;
  user: User;
  from: TaskStatus;
  to: TaskStatus;
  createdAt?: Time;
}

export default class TaskHistoryEntry {
  public id?: number;
  public user: User;
  public from: TaskStatus;
  public to: TaskStatus;
  public createdAt: Time;

  constructor(task: TaskHistoryEntryParams) {
    this.id = task.id;
    this.user = task.user;
    this.from = task.from;
    this.to = task.to;
    this.createdAt = task.createdAt ?? Time.now();
  }
}
