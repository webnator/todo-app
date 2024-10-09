import type { Knex } from "knex";
import dbConfig from "./db.config";

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USERNAME,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'system_db_migrations',
    extension: 'ts',
    directory: __dirname + '/../infra/adapters/db/migrations',
    loadExtensions: ['.ts', '.js'],
  }
};

export default knexConfig;
