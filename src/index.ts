import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import {createConnection} from './db/createConnection';
import ProductRoute from './routes/ProductRoute';
import ContactRoute from './routes/ContactRoute';
import NewsRoute from './routes/NewsRoute';
import CategoryRoute from './routes/CategoryRoute';
import FuelRoute from './routes/FuelRoute';
import requestErrorHandler from './middlewares/requestErrorHandler';
import {applyMiddleware} from './utils/applyMiddleware';
import verifyOAuth from './middlewares/verifyOAuth';
import verifyEmail from './middlewares/verifyEmail';
import UserRoute from './routes/UserRoute';
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

app.use(verifyOAuth);
app.use(prefix + '/products', ProductRoute);
app.use(prefix + '/contacts', ContactRoute);
app.use(prefix + '/news', NewsRoute);
app.use(prefix + '/categories', CategoryRoute);
app.use(prefix + '/fuels', FuelRoute);
app.use(prefix + '/users', UserRoute);
app.post(prefix + '/verify', verifyEmail);

//ya29.a0AfH6SMAQHIk7VZP2BtbIdpyYfcu3vTeWYL-y1-uP4TqWYD_rBeydB92cGHwln0bH9_6hKc7HWnWOEsQghRZZ6Ac7yzvaSXTfem5vXDHu7R0V1R3yOw9ik7Q92U_5T5U_g2JMGp6rDYCCYI9DhqEX8xxsi5po
applyMiddleware(requestErrorHandler, app);

createConnection()
  .then(async () => {

    app.listen(config.port || 3001, () => {
      console.log('Start server: ' + config.port)
    });
  })
  .catch(e => {
    console.error(e);
  });


