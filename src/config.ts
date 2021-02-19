require('dotenv').config();

const config = {
  username: process.env.BE_USER_NAME,
  password: process.env.BE_PASSWORD,
  host: process.env.BE_HOST,
  database: process.env.BE_DATA_BASE,
  portDB: process.env.BE_PORT_DB,
  isDev: process.env.BE_NODE_ENV,
  port: process.env.BE_PORT,
  dbURI: ''
};

let dbURI = '';

if(config.isDev) {
  dbURI = 'mongodb://localhost:27017/test'
}
else {
  dbURI = config.username && config.password ? `${config.username}:${config.password}@` : '';
}

config.dbURI = dbURI;

module.exports = config;
