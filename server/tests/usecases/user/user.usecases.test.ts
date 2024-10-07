import { Dependencies } from '../../../src/container';
import { UserNotFound } from '../../../src/domain/primitives/exceptions';
import { UserBuilder } from '../../entity-builders/user/user.builder';
import userRepositoryStub from '../../stubs/user/user.repository.stub';
import container from '../../test.container';

const {
  create,
  getUserByLoginCode,
} = container.resolve('userUsecases') as Dependencies['userUsecases'];

describe('User usecases',  () => {
  const userId = 23124;
  describe('create', () => {
    const userPayload = { fullName: 'Yoyo Mama' };
    beforeEach(() => {
      userRepositoryStub.create.mockReset().mockImplementation(async (user) => {
        user.id = userId;
        return user
      });
      userRepositoryStub.getByLoginCode.mockReset();
    });

    it('should store the user correctly in the database', async () => {
      await create(userPayload);
      expect(userRepositoryStub.create).toHaveBeenCalledTimes(1);
      expect(userRepositoryStub.create).toHaveBeenCalledWith(expect.objectContaining({
        fullName: userPayload.fullName,
      }));
    });

    it('should generate a new code if the user login code is taken and store the user', async () => {
      userRepositoryStub.getByLoginCode
        .mockResolvedValueOnce(new UserBuilder().build())
        .mockResolvedValueOnce(new UserBuilder().build())
        .mockResolvedValueOnce(null);
      await create(userPayload);
      expect(userRepositoryStub.getByLoginCode).toHaveBeenCalledTimes(3);
      expect(userRepositoryStub.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('login by token', () => {
    const token = 'ABCDEF758913';
    beforeEach(() => {
      userRepositoryStub.getByLoginCode.mockReset().mockResolvedValueOnce(new UserBuilder().build());
    });

    it('should check the token in the database', async () => {
      await getUserByLoginCode(token);
      expect(userRepositoryStub.getByLoginCode).toHaveBeenCalledTimes(1);
    });

    it('should throw if the code is invalid', async () => {
      userRepositoryStub.getByLoginCode.mockReset().mockResolvedValueOnce(null);
      try {
        await getUserByLoginCode(token);
      } catch (error) {
        expect(error).toBe(UserNotFound);
      }
      expect.assertions(1);
    });
  });
});
