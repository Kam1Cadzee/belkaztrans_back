import { Request, Response } from 'express';
import ProductModel from '../db/models/ProductModel';
import {Types} from 'mongoose';
import {HTTP400Error} from '../utils/httpErrors';

const existProduct = async (req: Request, res: Response, next: any) => {
  try {
    const {id} = req.params;
    const result = await ProductModel.exists({
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


export default existProduct;
