import { writable, derived } from 'svelte/store';
import type { Task } from '../types/Task/Task';
import type TaskStatus from '../types/Task/TaskStatus.enum';

function createTasksStore() {
  const { subscribe, set, update } = writable<Task[]>([]);

  return {
    subscribe,
    set,
    add: (task: Task) => update(tasks => [...tasks, task]),
    updateStatus: (taskId: number, newStatus: TaskStatus) => update(tasks =>
      tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task)
    ),
    filterList: (status: TaskStatus | null) => 
      derived({ subscribe }, $tasks => 
        status === null ? $tasks : $tasks.filter(task => task.status === status)
      )
  };
}

export const tasks = createTasksStore();
