import { Dependencies } from '../../container';
import { ListPayload } from '../../usecases/list.usecases';
import { UserPayload } from '../../usecases/user.usecases';
import APIResponse from '../adapters/server/response.model';
import { requestHandler } from '../adapters/server/server.adapter';
import { ListCreatedOk, ListRetrievedOk, ListUpdatedOk, UserLoginOk } from './apiResponses';

export default ({ listUsecases, authUsecases }: Dependencies) => {
  return {
    createNewList: requestHandler(async req => {
      const listPayload = req.body as ListPayload;
      const list = await listUsecases.create(req.session.id, listPayload);
      return new APIResponse(ListCreatedOk, req, { data: { list } });
    }),

    updateList: requestHandler(async req => {
      const listPayload = req.body as ListPayload;
      const { sharedKey } = req.params as { sharedKey: string; };
      const list = await listUsecases.update(req.session.id, sharedKey, listPayload);
      return new APIResponse(ListUpdatedOk, req, { data: { list } });
    }),

    getList: requestHandler(async req => {
      const { sharedKey } = req.params as { sharedKey: string; };
      const list = await listUsecases.getBySharedKey(sharedKey);
      return new APIResponse(ListRetrievedOk, req, { data: { list } });
    }),
  };
};
