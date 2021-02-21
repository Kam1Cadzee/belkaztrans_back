import {Schema, Types} from 'mongoose';
import BaseSchema from './BaseSchema';

const definition = {
  fuels: [
    {
      type: Types.ObjectId,
      ref: 'Fuel',
    }
  ],
  code: {
    type: String,
    required: true
  },
};

const ProductSchema = new Schema({
  ...BaseSchema.obj,
  ...definition,
}).pre('findOne', function (next: any) {
  this.populate(['fuels']);
  next();
})
  .pre('find', function (next: any) {
    this.populate(['fuels']);
    next();
  });

export default ProductSchema;
