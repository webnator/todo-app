/* eslint-disable no-magic-numbers */
/* eslint-disable no-process-env */
import { config } from 'dotenv';
config();

type Config = {
  ENV: string;
  SERVER: {
    PORT: number;
    SSLPORT: number;
    HOST: string;
    CORS_WHITELIST: string[];
  };
  PUBLIC_URL: string;
  LOG_LEVEL: string;
  DEPLOYMENT_INFO: string;
  CRYPTO_HASHING_ROUNDS: number;
  ENCRYPTION_ALGORITHM: string;
  ENCRYPTION_KEY: string;
  ENCRYPTION_IV: string;
  ENCRYPTION_SIZE: number;
  ADMIN_TOKEN: string;
  THROTTLE: {
    TIME_LIMIT: number;
    MAX_REQUESTS: number;
  };
  SORT_DEFAULTS: {
    ORDER: string;
  };
}

const baseConfig: Config = {
  ENV: process.env.ENV || 'dev',
  SERVER: {
    PORT: Number(process.env.SERVER_PORT) || 8080,
    SSLPORT: Number(process.env.SERVER_SSLPORT) || 8083,
    HOST: process.env.SERVER_HOST || '0.0.0.0',
    CORS_WHITELIST: [ 'http://localhost:3000' ],
  },
  PUBLIC_URL: process.env.PUBLIC_URL,
  LOG_LEVEL: 'trace',
  DEPLOYMENT_INFO: process.env.DEPLOYMENT_INFO ?? 'DEV',
  CRYPTO_HASHING_ROUNDS: 3,
  ENCRYPTION_ALGORITHM: 'aes-256-cbc',
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
  ENCRYPTION_IV: process.env.ENCRYPTION_IV,
  ENCRYPTION_SIZE: 32,
  ADMIN_TOKEN: process.env.ADMIN_TOKEN,
  THROTTLE: {
    TIME_LIMIT: 60_000,
    MAX_REQUESTS: 1,
  },
  SORT_DEFAULTS: {
    ORDER: 'DESC',
  },
};

export default baseConfig;
