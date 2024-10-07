/* eslint-disable no-process-env */
import { config } from 'dotenv';
config();

type Config = {
  TABLES: Record<string, { TTL: number; LUT_NAME: string; }>;
};

const lutConfig: Config = {
  TABLES: { },
};

export default lutConfig;
