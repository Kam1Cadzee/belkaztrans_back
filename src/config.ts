require('dotenv').config();

const config = {
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATA_BASE,
  portDB: process.env.PORT_DB,
};

export default config;
