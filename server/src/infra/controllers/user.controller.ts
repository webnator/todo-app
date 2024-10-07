import { Dependencies } from '../../container';
import { UserPayload } from '../../usecases/user.usecases';
import APIResponse from '../adapters/server/response.model';
import { requestHandler } from '../adapters/server/server.adapter';
import { UserLoginOk } from './apiResponses';

export default ({ userUsecases, authUsecases }: Dependencies) => {
  return {
    createUser: requestHandler(async req => {
      const userPayload = req.body as UserPayload;
      const user = await userUsecases.create(userPayload);
      const token = await authUsecases.getUserToken(user);
      return new APIResponse(UserLoginOk, req, { data: { token, user } });
    }),

    userCodeLogin: requestHandler(async req => {
      const { code: loginCode } = req.body as { code: string; };
      const user = await userUsecases.getUserByLoginCode(loginCode);
      const token = await authUsecases.getUserToken(user);
      return new APIResponse(UserLoginOk, req, { data: { token, user } });
    }),
  };
};
