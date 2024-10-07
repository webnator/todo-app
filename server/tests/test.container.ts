import { asValue, AwilixContainer, createContainer } from 'awilix';

import baseContainer from './../src/container';
import userRepositoryStub from './stubs/user/user.repository.stub';
import listRepositoryStub from './stubs/list/list.repository.stub';
import taskRepositoryStub from './stubs/task/task.repository.stub';

const container: AwilixContainer = createContainer();

container.register(baseContainer.registrations);
container.register({
  userRepository: asValue(userRepositoryStub),
  listRepository: asValue(listRepositoryStub),
  taskRepository: asValue(taskRepositoryStub),
});

export default container;
