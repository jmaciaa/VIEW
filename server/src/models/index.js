import * as sequelize from 'sequelize';

import { config } from 'dotenv';
config();

const dbName = process.env.DB_NAME || '';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';

export const dbConfig = new sequelize.Sequelize(dbName, dbUser, dbPassword, {
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000000,
    idle: 10000000,
  },
  logging: false,
});
