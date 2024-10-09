import { Knex } from "knex";
import dbConfig from "../../../../config/db.config";
import TaskStatus from "../../../../domain/Task/TaskStatus.enum";

export async function up(knex) {
  await knex.schema.createTable(dbConfig.TABLES.USER, (table) => {
    table.increments('id');
    table.string('full_name').notNullable();
    table.string('login_code').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(dbConfig.TABLES.LIST, (table) => {
    table.increments('id');
    table.integer('user_id').unsigned().references('id').inTable(dbConfig.TABLES.USER).onDelete('CASCADE');
    table.string('name');
    table.string('shared_key').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(dbConfig.TABLES.TASK, (table) => {
    table.increments('id');
    table.integer('list_id').unsigned().references('id').inTable(dbConfig.TABLES.LIST).onDelete('CASCADE');
    table.integer('user_id').unsigned().references('id').inTable(dbConfig.TABLES.USER).onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('description');
    table.enum('status', Object.values(TaskStatus)).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(dbConfig.TABLES.TASK_STATUS_HISTORY, (table) => {
    table.increments('id');
    table.integer('task_id').unsigned().references('id').inTable(dbConfig.TABLES.TASK).onDelete('CASCADE');
    table.integer('user_id').unsigned().references('id').inTable(dbConfig.TABLES.USER).onDelete('CASCADE');
    table.enum('from_status', Object.values(TaskStatus)).notNullable();
    table.enum('to_status', Object.values(TaskStatus)).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  await knex.schema.dropTable(dbConfig.TABLES.TASK_STATUS_HISTORY);
  await knex.schema.dropTable(dbConfig.TABLES.TASK);
  await knex.schema.dropTable(dbConfig.TABLES.LIST);
  await knex.schema.dropTable(dbConfig.TABLES.USER);
}