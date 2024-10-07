import { Dependencies } from "../container";
import { UserNotFound } from "../domain/primitives/exceptions";
import User from "../domain/User/User";

export default ({
  logger,
  userRepository,
}: Dependencies) => {
  return {
    async getByLoginCode(loginCode: string): Promise<User> {
      const user = await userRepository.getByLoginCode(loginCode);
      if (!user) {
        logger.warn({ loginCode }, 'There\'s no user associated to that code');
        throw UserNotFound;
      }
      return user;
    },

    async getById(id: number): Promise<User> {
      const user = await userRepository.getById(id);
      if (!user) {
        logger.warn({ id }, 'There\'s no user associated to that id');
        throw UserNotFound;
      }
      return user;
    }
  }
}