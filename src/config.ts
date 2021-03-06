require('dotenv').config();

const config = {
  username: process.env.BE_USER_NAME,
  password: process.env.BE_PASSWORD,
  host: process.env.BE_HOST,
  database: process.env.BE_DATA_BASE,
  portDB: process.env.BE_PORT_DB,
  isDev: process.env.NODE_ENV,
  port: process.env.PORT,
  dbURI: '',
  secret: 'SBMFJ3KqptjBOLOnVWHkWvRE',
  clientId: '908922527612-sq6814oj5h1m5eq9j0levtqod3tnij2a.apps.googleusercontent.com',
  emailUser: 'belkaztransuser@gmail.com',
  emailPassword: 'belkaztrans'
};

const dbURI = `mongodb://${config.host}:${config.portDB}/${config.database}`;

config.dbURI = dbURI;

module.exports = config;
