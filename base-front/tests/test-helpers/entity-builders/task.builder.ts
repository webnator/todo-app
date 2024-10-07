import Time from '@sandbox/domain/primitives/Time';
import Task from '@sandbox/domain/Task/Task';
import TaskStatus from '@sandbox/domain/Task/TaskStatus.enum';

export class TaskBuilder {
  private data: Task = {
    id: 1,
    listKey: 'mr-red-cobra',
    user: {
      id: 34324,
      fullName: 'Yo Yo Ma',
    },
    title: 'Do this!',
    description: 'My amazing task!',
    status: TaskStatus.ONGOING,
    allowedTransitions: [ TaskStatus.DONE, TaskStatus.PENDING ],
    createdAt: '2023-10-27',
    updatedAt: '2023-10-27',
  };

  public with<K extends keyof Task>(key: K, value: Task[K]) {
    this.data[key] = value;
    return this;
  }

  public build(): Task {
    return {
      ...this.data,
    };
  }
}
