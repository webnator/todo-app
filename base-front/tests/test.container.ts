import baseContainer, { Dependencies } from '@sandbox/infra/ioc/container';
import { asValue, createContainer } from 'awilix';
import cookieAdapterStub from './test-helpers/stubs/infra/repositories/cookie.adapter.stub';
import listRepositoryStub from './test-helpers/stubs/infra/repositories/list.repository.stub';
import taskRepositoryStub from './test-helpers/stubs/infra/repositories/task.repository.stub';
import userRepositoryStub from './test-helpers/stubs/infra/repositories/user.repository.stub';

const testContainer = createContainer<Dependencies>();

testContainer.register(baseContainer.registrations);
testContainer.register({
  cookieAdapter: asValue(cookieAdapterStub),
  listRepository: asValue(listRepositoryStub),
  taskRepository: asValue(taskRepositoryStub),
  userRepository: asValue(userRepositoryStub),
});

export default testContainer;
