import mongoose from 'mongoose';
import BaseSchema, {BaseType} from './BaseSchema';

const Schema = mongoose.Schema;

const definition = {
  price: {
    type: Number,
    required: true
  },
  shortTitleEN: {
    type: String,
    required: true
  },
  shortTitleUA: {
    type: String,
    required: true
  },
  shortTitleRU: {
    type: String,
    required: true
  },

  descriptionEN: {
    type: String,
    required: true
  },
  descriptionUA: {
    type: String,
    required: true
  },
  descriptionRU: {
    type: String,
    required: true
  },
} as const;

const FuelSchema = new Schema({
  ...BaseSchema.obj,
  ...definition,
});

interface IFuel extends BaseType {
  price: number,
  shortTitleEN: string,
  shortTitleUA: string,
  shortTitleRU: string,

  descriptionEN: string,
  descriptionUA: string,
  descriptionRU: string,
}

export {IFuel}
export default FuelSchema;
