import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import {createConnection} from './db/createConnection';
import ProductRoute from './routes/ProductRoute';
import ContactRoute from './routes/ContactRoute';
import NewsRoute from './routes/NewsRoute';
import CategoryRoute from './routes/CategoryRoute';
import requestErrorHandler from './middlewares/requestErrorHandler';
import {applyMiddleware} from './utils/applyMiddleware';
const config = require('./config');

const prefix = '/api/v1';

const app = express();

app
  .use(cors({
      origin: '*'
  }))
  .use(bodyParser.json());

app.get(prefix + '/', (req, res) => {
   res.send({
    message: 'ok'
  })
});

app.use(prefix + '/products', ProductRoute);
app.use(prefix + '/contact', ContactRoute);
app.use(prefix + '/news', NewsRoute);
app.use(prefix + '/categories', CategoryRoute);

applyMiddleware(requestErrorHandler, app);

createConnection()
  .then(async () => {

    app.listen(config.port, () => {
      console.log('Start server: ' + config.port)
    });
  })
  .catch(e => {
    console.error(e);
  });


