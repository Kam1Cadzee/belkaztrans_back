import mongoose = require('mongoose');
import {dbURI} from '../config';



async function createConnection() {
  await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

  const connection = mongoose.connection;

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
