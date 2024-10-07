import { asFunction, AwilixContainer, createContainer } from 'awilix';

import dbAdapter from './db.adapter';

const container: AwilixContainer = createContainer();

container.register({
  dbAdapter: asFunction(dbAdapter).singleton(),
});

export default container;

export type Dependencies = {
  // adapter
  dbAdapter: ReturnType<typeof dbAdapter>;
};
