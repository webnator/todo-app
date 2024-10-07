import { Dependencies } from '../container';
import { InvalidCredentials } from '../domain/primitives/exceptions';
import User, { TokenUser } from '../domain/User/User';

export enum LoginStrategies {
  BearerAuth = 'BearerAuth',
}

export default ({
  logger,
  cryptoAdapter,
  userService
}: Dependencies) => {
  return {
    async getUserToken(user: TokenUser): Promise<string> {
      logger.debug({ id: user.id }, 'Getting token for user');
      const token = cryptoAdapter.jwtSignObject<TokenUser>({ loginCode: user.loginCode, id: user.id });
      return token;
    },

    async bearerAuth(encryptedToken: string): Promise<User> {
      logger.debug('Authenticating');
      try {
        const token = cryptoAdapter.jwtVerifyObject<TokenUser>(encryptedToken);

        const user = await userService.getByLoginCode(token.loginCode);
        return user;
      } catch (error) {
        logger.debug({ error, encryptedToken }, 'Invalid credentials for user');
        throw InvalidCredentials;
      }
    },
  };
};
