import TaskRepositoryInterface from '@sandbox/services/abstractions/task.repository.interface';

const taskRepositoryStub: jest.Mocked<TaskRepositoryInterface> = {
  createTask: jest.fn(),
  updateTask: jest.fn(),
  getTaskHistory: jest.fn(),
};

export default taskRepositoryStub;
