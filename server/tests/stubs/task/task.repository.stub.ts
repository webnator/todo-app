import TaskRepositoryInterface from '../../../src/services/abstractions/task/taskRepository.interface';
import Mocked = jest.Mocked;

const taskRepositoryStub: Mocked<TaskRepositoryInterface> = {
  getById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  getForList: jest.fn(),
  getHistory: jest.fn(),
};

export default taskRepositoryStub;
