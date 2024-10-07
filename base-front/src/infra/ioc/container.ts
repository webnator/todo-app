import { asFunction, createContainer } from 'awilix';

// repositories
import UserRepositoryInterface from '@sandbox/services/abstractions/user.repository.interface';
import userRepository from '../repositories/user.repository';
import CookieAdapterInterface from '@sandbox/services/abstractions/cookie.adapter.interface';
import cookieAdapter from '../adapters/cookie.adapter';
import listRepository from '../repositories/list.repository';
import ListRepositoryInterface from '@sandbox/services/abstractions/list.repository.interface';
import taskRepository from '../repositories/task.repository';
import TaskRepositoryInterface from '@sandbox/services/abstractions/task.repository.interface';

export interface Dependencies {
  cookieAdapter: CookieAdapterInterface;

  // repositories
  userRepository: UserRepositoryInterface;
  listRepository: ListRepositoryInterface;
  taskRepository: TaskRepositoryInterface;
}

const container = createContainer<Dependencies>();
container.register({
  cookieAdapter: asFunction(cookieAdapter),
  
  // repositories
  userRepository: asFunction(userRepository),
  listRepository: asFunction(listRepository),
  taskRepository: asFunction(taskRepository),
});

export default container;
