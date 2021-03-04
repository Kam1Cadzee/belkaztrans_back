import mongoose from 'mongoose';
const {dbURI} = require('../config');
const { config, up } = require('migrate-mongo');

const myConfig = {
  mongodb: {
    url: dbURI,
    options: { useNewUrlParser: true, useUnifiedTopology: true, }
  },
  migrationsDir: "./src/db/migrations/mongo/migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js"
};

config.set(myConfig);

async function createConnection() {
  await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
  const connection = mongoose.connection;
  await up(connection);

  connection.on('error', function (err) {
    console.error('MongoDB connection error: ', err);
  });

  connection.once('open', function () {
    console.log('MongoDB database connection established successfully');
  });
}

async function getConnection(){
  await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
  return mongoose.connection;
}

export {createConnection, getConnection, mongoose}
