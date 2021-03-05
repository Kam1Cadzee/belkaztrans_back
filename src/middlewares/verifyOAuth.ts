import {Request, Response} from 'express';
import {OAuth2Client} from 'google-auth-library';
import {HTTP401Error} from '../utils/httpErrors';
const config =  require('../config');

const verifyOAuth = async (req: Request, res: Response, next: any) => {
  const token = req.headers.authorization;

  if(!token) {
    next();
    return;
  }
  const client = new OAuth2Client({
    clientId: config.clientId,
    clientSecret: config.secret,
  });

 try {
   await client.getTokenInfo(token);
   next();
 }
 catch (e) {
   throw new HTTP401Error();
 }
};

export default verifyOAuth;
