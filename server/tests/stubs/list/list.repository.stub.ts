import ListRepositoryInterface from '../../../src/services/abstractions/list/listRepository.interface';
import Mocked = jest.Mocked;

const listRepositoryStub: Mocked<ListRepositoryInterface> = {
  getBySharedKey: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
};

export default listRepositoryStub;
