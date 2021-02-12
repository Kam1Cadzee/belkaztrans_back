import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import {createConnection} from './db/createConnection';
import ProductRoute from './db/routes/ProductRoute';
import ContactRoute from './db/routes/ContactRoute';

const prefix = '/api/v1';

const app = express();

app
  .use(cors())
  .use(bodyParser.json());

app.get(prefix + '/', (req, res) => {
   res.send({
    message: 'ok'
  })
});

app.use(prefix + '/products', ProductRoute);
app.use(prefix + '/contact', ContactRoute);

createConnection()
  .then(async () => {
    app.listen(3000, () => {
      console.log('Server ' + 3000)
    });
  })
  .catch(e => {
    console.error(e);
  });


