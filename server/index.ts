import path from 'path';
import config from './src/config/base.config';
import container, { Dependencies } from './src/container';
import { LoginStrategies } from './src/usecases/auth.usecases';

const serverAdapter = container.resolve('serverAdapter') as Dependencies['serverAdapter'];
const dbAdapter = container.resolve('dbAdapter') as Dependencies['dbAdapter'];
const authController = container.resolve('authController') as Dependencies['authController'];

async function start() {
  // await dbAdapter.migrate.rollback();
  await dbAdapter.migrate.latest();

  serverAdapter<LoginStrategies>({
    port: config.SERVER.PORT,
    sslPort: config.SERVER.SSLPORT,
    host: config.SERVER.HOST,
    apiDefinition: path.join(__dirname, './src/infra/api/definition/index.yaml'),
    controllersPath: path.join(__dirname, './src/infra/api/entrypoints'),
    authHandlers: authController,
  });
}

start();
