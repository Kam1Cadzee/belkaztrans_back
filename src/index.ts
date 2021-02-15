import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import {createConnection} from './db/createConnection';
import ProductRoute from './routes/ProductRoute';
import ContactRoute from './routes/ContactRoute';
import config from './config';
import {NewsService} from './services/NewsService';
import NewsRoute from './routes/NewsRoute';

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

createConnection()
  .then(async () => {

    new NewsService().getAll({}, {
      select: {
        date: 1
      }
    }).then(async res => {
      console.log(res)
    })
    app.listen(config.port, () => {
      console.log('Server ' + config.port)
    });
  })
  .catch(e => {
    console.error(e);
  });


