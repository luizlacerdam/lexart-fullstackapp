const pg = require('pg');

require('dotenv').config();

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
    logging: false,
    timezone: '-03:00',
  };
  
  module.exports = {
    development: config,
    test: config,
    production: config,
  };
