import {Request, Response} from 'express';
import {OAuth2Client} from 'google-auth-library';
import UserModel from '../db/models/UserModel';
const config =  require('../config');

const verifyEmail = async (req: Request, res: Response) => {
  const client = new OAuth2Client({
    clientId: config.clientId,
    clientSecret: config.secret,
  });

  try {
    const result = await client.getTokenInfo(req.body.token);
    const isExits = await UserModel.exists({
      email: result.email.toLowerCase()
    });

    return res.status(200).send({
      success: isExits
    })
  }
  catch (e) {
    return res.status(200).send({
      success: false
    })
  }
};

export default verifyEmail;
