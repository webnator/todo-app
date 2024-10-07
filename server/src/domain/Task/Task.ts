import Time from '../primitives/Time';
import User from '../User/User';
import List from '../List/List';
import TaskStatus, { initialStatus, TaskStatusStateMachine } from './TaskStatus.enum';
import { InvalidTaskStatusTransition } from '../primitives/exceptions';

type TaskParams = {
  id?: number;
  user: User;
  list: List;
  title: string;
  description?: string;
  status?: TaskStatus;
  createdAt?: Time;
  updatedAt?: Time;
}

export default class Task {
  public id?: number;
  public user: User;
  public list: List;
  public title: string;
  public description?: string;
  private _status: TaskStatus;
  public createdAt: Time;
  public updatedAt: Time;

  constructor(task: TaskParams) {
    this.id = task.id;
    this.user = task.user;
    this.list = task.list;
    this.title = task.title;
    this.status = task.status;
    this.description = task.description;
    this.createdAt = task.createdAt ?? Time.now();
    this.updatedAt = task.updatedAt ?? Time.now();
  }

  public update(updateObject: Partial<Pick<TaskParams, 'title' | 'description' | 'status'>>): void {
    Object.entries(updateObject).forEach(([ key, value ]) => {
      this[key] = value;
    })
    this.updatedAt = Time.now();
  }

  public get status(): TaskStatus {
    return this._status ?? initialStatus;
  }

  public set status(status: TaskStatus) {
    if (!this._status && !status) {
      this._status = initialStatus;
      return;
    }
    if (!this._status) {
      this._status = status;
      return;
    }
    if (TaskStatusStateMachine[this._status].includes(status)) {
      this._status = status;
      return;
    }
    throw InvalidTaskStatusTransition;
  }

  public get allowedTransitions(): TaskStatus[] {
    return TaskStatusStateMachine[this.status];
  }
}
