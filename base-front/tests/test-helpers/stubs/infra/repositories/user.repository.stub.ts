import UserRepositoryInterface from '@sandbox/services/abstractions/user.repository.interface';

const userRepositoryStub: jest.Mocked<UserRepositoryInterface> = {
  getLoggedUser: jest.fn(),
  createUser: jest.fn(),
  getCachedUserToken: jest.fn(),
};

export default userRepositoryStub;
