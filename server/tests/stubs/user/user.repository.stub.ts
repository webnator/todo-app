import UserRepositoryInterface from '../../../src/services/abstractions/user/userRepository.interface';
import Mocked = jest.Mocked;

const userRepositoryStub: Mocked<UserRepositoryInterface> = {
  getByLoginCode: jest.fn(),
  getById: jest.fn(),
  create: jest.fn(),
};

export default userRepositoryStub;
