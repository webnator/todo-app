import { Dependencies } from '../../container';
import { TaskPayload, TaskUpdatePayload } from '../../usecases/task.usecases';
import { UserPayload } from '../../usecases/user.usecases';
import APIResponse from '../adapters/server/response.model';
import { requestHandler } from '../adapters/server/server.adapter';
import { TaskCreatedOk, TasksRetrievedOk, TaskUpdatedOk, UserLoginOk } from './apiResponses';

export default ({ taskUsecases }: Dependencies) => {
  return {
    getListTasks: requestHandler(async req => {
      const { sharedKey } = req.params as { sharedKey: string; };
      const tasks = await taskUsecases.getTasksForList(sharedKey);
      return new APIResponse(TasksRetrievedOk, req, { data: { tasks } });
    }),

    createNewTask: requestHandler(async req => {
      const taskPayload = req.body as TaskPayload;
      const { sharedKey } = req.params as { sharedKey: string; };
      const task = await taskUsecases.create(req.session.id, {
        ...taskPayload,
        listSharedKey: sharedKey, 
      });
      return new APIResponse(TaskCreatedOk, req, { data: { task } });
    }),

    updateTask: requestHandler(async req => {
      const taskPayload = req.body as TaskUpdatePayload;
      const { taskId } = req.params as { taskId: number; };
      const task = await taskUsecases.update(req.session.id, taskId, taskPayload);
      return new APIResponse(TaskUpdatedOk, req, { data: { task } });
    }),

    getTaskHistory: requestHandler(async req => {
      const { taskId } = req.params as { taskId: number; };
      const taskHistoryEntries = await taskUsecases.getStatusHistory(taskId);
      return new APIResponse(TaskUpdatedOk, req, { data: { taskHistoryEntries } });
    }),

  };
};
