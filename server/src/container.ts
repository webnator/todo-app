import { asValue, createContainer, Lifetime } from 'awilix';
import axios from 'axios';
import bcrypt from 'bcrypt';
import compression from 'compression';
import cors from 'cors';
import crypto from 'crypto';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import joi from 'joi';
import jwt from 'jsonwebtoken';
import knex from 'knex';
import { pino } from 'pino';
import LoggerInterface from './domain/primitives/logger.interface';
import dbAdapter from './infra/adapters/db/index';
import lutAdapter from './infra/adapters/lut/lut.adapter';
import serverAdapter from './infra/adapters/server/server.adapter';
import authController from './infra/controllers/auth.controller';
import healthController from './infra/controllers/health.controller';
import listController from './infra/controllers/list.controller';
import taskController from './infra/controllers/task.controller';
import userController from './infra/controllers/user.controller';
import ListRepositoryInterface from './services/abstractions/list/listRepository.interface';
import TaskRepositoryInterface from './services/abstractions/task/taskRepository.interface';
import UserRepositoryInterface from './services/abstractions/user/userRepository.interface';
import listService from './services/list.service';
import taskService from './services/task.service';
import userService from './services/user.service';
import CryptoAdapterInterface from './usecases/abstractions/cryptoAdapter.interface';
import authUsecases from './usecases/auth.usecases';
import listUsecases from './usecases/list.usecases';
import taskUsecases from './usecases/task.usecases';
import userUsecases from './usecases/user.usecases';
import wsAdapter from './infra/adapters/ws.adapter';

const container = createContainer();

container.loadModules(
  [
    `${__dirname}/**/*.usecases.{ts,js}`,
    `${__dirname}/**/*.adapter.{ts,js}`,
    `${__dirname}/**/*.facade.{ts,js}`,
    `${__dirname}/**/logger.{ts,js}`,
    `${__dirname}/**/*.controller.{ts,js}`,
    `${__dirname}/**/*.middleware.{ts,js}`,
    `${__dirname}/**/*.routes.{ts,js}`,
    `${__dirname}/**/*.repository.{ts,js}`,
    `${__dirname}/**/*.service.{ts,js}`,
    `${__dirname}/**/*.handler.{ts,js}`,
    `${__dirname}/**/*.proxy.{ts,js}`,
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  }
);

container.register({
  express: asValue(express),
  pino: asValue(pino),
  helmet: asValue(helmet),
  compression: asValue(compression),
  axios: asValue(axios),
  cors: asValue(cors),
  joi: asValue(joi),
  http: asValue(http),
  bcrypt: asValue(bcrypt),
  crypto: asValue(crypto),
  jwt: asValue(jwt),

  dbAdapter: asValue(dbAdapter()),
});

export default container;

export type Dependencies = {
  // Libraries
  express: typeof express;
  pino: typeof pino;
  helmet: typeof helmet;
  compression: typeof compression;
  axios: typeof axios;
  cors: typeof cors;
  joi: typeof joi;
  http: typeof http;
  bcrypt: typeof bcrypt;
  crypto: typeof crypto;
  jwt: typeof jwt;

  // Definitions
  logger: LoggerInterface;

  // Adapters
  dbAdapter: ReturnType<typeof knex>;
  cryptoAdapter: CryptoAdapterInterface;
  serverAdapter: ReturnType<typeof serverAdapter>;
  lutAdapter: ReturnType<typeof lutAdapter>;
  wsAdapter: ReturnType<typeof wsAdapter>;

  // Controllers
  healthController: ReturnType<typeof healthController>;
  userController: ReturnType<typeof userController>;
  listController: ReturnType<typeof listController>;
  taskController: ReturnType<typeof taskController>;
  authController: ReturnType<typeof authController>;

  
  // Repositories
  userRepository: UserRepositoryInterface;
  listRepository: ListRepositoryInterface;
  taskRepository: TaskRepositoryInterface;
  
  // Services
  userService: ReturnType<typeof userService>;
  listService: ReturnType<typeof listService>;
  taskService: ReturnType<typeof taskService>;
  
  // Usecases
  authUsecases: ReturnType<typeof authUsecases>;
  userUsecases: ReturnType<typeof userUsecases>;
  listUsecases: ReturnType<typeof listUsecases>;
  taskUsecases: ReturnType<typeof taskUsecases>;
}
