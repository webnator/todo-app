import { describe, it, expect } from 'vitest';
import { tasks } from './tasks';
import { get } from 'svelte/store';
import TaskStatus from '../types/Task/TaskStatus.enum';
import type { Task } from '../types/Task/Task';

describe('tasks store', () => {
  const mockTask: Task = {
    id: 1,
    listKey: 'abc123',
    user: { id: 1, fullName: 'John Doe' },
    title: 'Test Task',
    status: TaskStatus.PENDING,
    allowedTransitions: [TaskStatus.ONGOING, TaskStatus.DONE],
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  };

  it('adds a task correctly', () => {
    tasks.set([]);
    tasks.add(mockTask);
    expect(get(tasks)).toEqual([mockTask]);
  });

  it('updates task status correctly', () => {
    tasks.set([mockTask]);
    tasks.updateStatus(1, TaskStatus.ONGOING);
    const updatedTasks = get(tasks);
    expect(updatedTasks[0].status).toBe(TaskStatus.ONGOING);
  });

  it('filters tasks correctly', () => {
    const pendingTask = { ...mockTask, status: TaskStatus.PENDING };
    const ongoingTask = { ...mockTask, id: 2, status: TaskStatus.ONGOING };
    tasks.set([pendingTask, ongoingTask]);

    const filteredStore = tasks.filterList(TaskStatus.PENDING);
    const filteredTasks = get(filteredStore);

    expect(filteredTasks).toHaveLength(1);
    expect(filteredTasks[0].status).toBe(TaskStatus.PENDING);
  });
});
