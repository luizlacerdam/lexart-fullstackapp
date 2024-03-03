const pg = require('pg');

require('dotenv').config();

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: false,
    timezone: '-03:00',
  };
  
  module.exports = {
    development: config,
    test: config,
    production: config,
  };
