import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import TaskList from './TaskList.svelte';
import { tasks } from '../stores/tasks';
import type { Task } from '../types/Task/Task';
import TaskStatus from '../types/Task/TaskStatus.enum';

// Mock $app/stores
vi.mock('$app/stores', () => ({
  page: {
    subscribe: vi.fn((callback) => {
      callback({ params: { sharedKey: 'mock-shared-key' } });
      return { unsubscribe: vi.fn() };
    })
  }
}));

// Mock api
vi.mock('../services/api', () => ({
  api: {
    addTask: vi.fn()
  }
}));

describe('TaskList', () => {
  const mockTasks: Task[] = [
    {
      id: 1,
      listKey: 'abc123',
      user: { id: 1, fullName: 'John Doe' },
      title: 'Test Task',
      status: TaskStatus.PENDING,
      allowedTransitions: [TaskStatus.ONGOING, TaskStatus.DONE],
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z'
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders tasks correctly', () => {
    const { getByText } = render(TaskList, { props: { tasks: mockTasks } });
    expect(getByText('Test Task')).toBeTruthy();
  });

  it('dispatches openTaskDetails event when task is clicked', async () => {
    const { component, getByText } = render(TaskList, { props: { tasks: mockTasks } });
    const mockDispatch = vi.fn();
    component.$on('openTaskDetails', mockDispatch);

    await fireEvent.click(getByText('Test Task'));
    expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({
      detail: mockTasks[0]
    }));
  });
});
