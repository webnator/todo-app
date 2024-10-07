/* eslint-disable no-process-env */
import { config } from 'dotenv';
config();

type Config = {
  PHONE_VALIDATION: boolean;
  CLOSED_BETA: boolean;
}

const ffConfig: Config = {
  PHONE_VALIDATION: true,
  CLOSED_BETA: false,
};

export default ffConfig;
