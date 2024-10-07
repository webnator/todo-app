import knexLib from 'knex';
import knexConfig from '../../../config/knex.config';

type AllowedTypes = string | number | boolean | Date;
export type SQLQuery = {
  sql: string;
  params?: (AllowedTypes | (AllowedTypes)[])[];
};

export enum DBErrors {
  CONSTRAINT_VIOLATION = '23000',
}

export default () => (): ReturnType<typeof knexLib> => {
  const db = knexLib(knexConfig);

  return db;
};
