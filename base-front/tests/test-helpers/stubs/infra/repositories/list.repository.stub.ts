import ListRepositoryInterface from '@sandbox/services/abstractions/list.repository.interface';

const listRepositoryStub: jest.Mocked<ListRepositoryInterface> = {
  createList: jest.fn(),
  updateList: jest.fn(),
  getListByKey: jest.fn(),
  getTasksForList: jest.fn(),
};

export default listRepositoryStub;
