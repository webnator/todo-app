import { Dependencies } from '../../container';
import Response from '../../domain/primitives/Response';

export default ({ authUsecases }: Dependencies) => {
  function extractToken(bearerToken: string): string {
    return bearerToken?.replace('Bearer ', '').replace('Basic ', '') ?? '';
  }

  return {
    async BearerAuth(req): Promise<boolean> {
      req.session = await authUsecases.bearerAuth(extractToken(req.headers?.['authorization']));
      return true;
    },
  };
};
