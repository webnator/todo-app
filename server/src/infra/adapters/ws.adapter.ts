import WebSocket from 'ws';
import { Dependencies } from '../../container';
import taskModel, { TaskOutput } from '../../usecases/outputModels/task.model';
import listModel, { ListOutput } from '../../usecases/outputModels/list.model';
import List from '../../domain/List/List';
import Task from '../../domain/Task/Task';

export enum EntityAction {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

type WsMessage = {
  action: EntityAction;
  entityType: 'TASK' | 'LIST';
  id: string | number;
  entity: TaskOutput | ListOutput;
}

export default function wsAdapter({ logger }: Dependencies) {
  let wss: WebSocket.Server;

  function broadcastMessage(message: WsMessage): void {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }

  return {
    registerServer(server: WebSocket.ServerOptions['server']): void {
      wss = new WebSocket.Server({ server });
      wss.on('connection', () => {
        logger.debug('Client connected');
      });
    },

    broadcastList(list: List, action: EntityAction) {
      broadcastMessage({
        action,
        entityType: 'LIST',
        entity: listModel(list),
        id: list.sharedKey,
      });
    },

    broadcastTask(task: Task, action: EntityAction) {
      broadcastMessage({
        action,
        entityType: 'TASK',
        entity: taskModel(task),
        id: task.id,
      });
    },
  };
}
