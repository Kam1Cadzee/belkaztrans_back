require('dotenv').config();

const config = {
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATA_BASE,
  portDB: process.env.PORT_DB,
  isDev: process.env.NODE_ENV,
  port: process.env.PORT,
};

let dbURI = '';

if(config.isDev) {
  dbURI = 'mongodb://localhost:27017/test'
}
else {
  dbURI = config.username && config.password ? `${config.username}:${config.password}@` : '';
}

export {dbURI};
export default config;
