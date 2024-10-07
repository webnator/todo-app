/* eslint-disable no-process-env */
import { config } from 'dotenv';
config();

type Config = {
  HOST: string;
  PORT: number;
  USERNAME: string;
  PASSWORD: string;
  DATABASE: string;
  TABLES: Record<string, string>;
}

const dbConfig: Config = {
  HOST: process.env.DB_HOST,
  PORT: parseInt(process.env.DB_PORT ?? '5432'),
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_DATABASE,
  TABLES: {
    USER: 'user',
    TASK: 'task',
    TASK_STATUS_HISTORY: 'task_status_history',
    LIST: 'list',
  },
};

export default dbConfig;
