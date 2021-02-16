import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import {createConnection} from './db/createConnection';
import ProductRoute from './routes/ProductRoute';
import ContactRoute from './routes/ContactRoute';
import config from './config';
import {NewsService} from './services/NewsService';
import NewsRoute from './routes/NewsRoute';
import {Document, PaginateResult} from "mongoose";
import CategoryRoute from './routes/CategoryRoute';

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

createConnection()
  .then(async () => {

    app.listen(config.port, () => {
      console.log('Server ' + config.port)
    });
  })
  .catch(e => {
    console.error(e);
  });


