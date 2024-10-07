import List from '@sandbox/domain/List/List';
import Task from '@sandbox/domain/Task/Task';

export enum EntityAction {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export type WsMessage = {
  action: EntityAction;
  entityType: 'TASK' | 'LIST';
  id: string | number;
  entity: Task | List;
}