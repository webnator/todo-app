import { Dependencies } from '../container';
import User from '../domain/User/User';
import userModel, { UserOutput } from './outputModels/user.model';

export type UserPayload = {
  fullName: string;
}

export default ({
  logger,
  userRepository,
  userService,
}: Dependencies) => { 
  return {
    async create(userPayload: UserPayload): Promise<UserOutput> {
      logger.debug({ fullName: userPayload.fullName }, 'Creating user');
      const newUser = new User(userPayload);

      let userWithCode: User;
      do {
        userWithCode = await userRepository.getByLoginCode(newUser.loginCode);
        if (userWithCode) {
          newUser.resetLoginCode();
        }
      } while (userWithCode);
      
      const user = await userRepository.create(newUser);
      return userModel(user);
    },

    async getUserByLoginCode(loginCode: string): Promise<UserOutput> {
      logger.debug({ loginCode }, 'Trying to get user from code');
      const user = await userService.getByLoginCode(loginCode);
      return userModel(user);
    },
  };
};
