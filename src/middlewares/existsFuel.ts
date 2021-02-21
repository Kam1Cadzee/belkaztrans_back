import { Request, Response } from 'express';
import {Types} from 'mongoose';
import {HTTP400Error} from '../utils/httpErrors';
import FuelModel from '../db/models/FuelModel';

const existFuel = async (req: Request, res: Response, next: any) => {
  try {
    const {id} = req.params;
    const result = await FuelModel.exists({
      _id: Types.ObjectId(id)
    })
    if(result) {
      next();
    }
  }
  catch (e) {
    throw new HTTP400Error("Such id of product doesn't exist");
  }
};


export default existFuel;
