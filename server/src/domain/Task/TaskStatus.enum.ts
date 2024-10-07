enum TaskStatus {
  PENDING = 'PENDING',
  ONGOING = 'ONGOING',
  DONE = 'DONE',
}

export const initialStatus = TaskStatus.PENDING;

export const TaskStatusStateMachine: Record<TaskStatus, TaskStatus[]> = {
  [ TaskStatus.PENDING ]: [ TaskStatus.ONGOING ],
  [ TaskStatus.ONGOING ]: [ TaskStatus.PENDING, TaskStatus.DONE ],
  [ TaskStatus.DONE ]: [ TaskStatus.ONGOING ],
}

export default TaskStatus;