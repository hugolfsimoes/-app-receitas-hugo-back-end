const Client = require('pg').Client;
require('dotenv/config');

const client = new Client({
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

client.connect();

module.exports = client;