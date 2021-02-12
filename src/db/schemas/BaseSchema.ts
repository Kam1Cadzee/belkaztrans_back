import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const definition = {
  titleEN: {
    type: String,
    required: true
  },
  titleUA: {
    type: String,
    required: true
  },
  titleRU: {
    type: String,
    required: true
  },
};

const BaseSchema = new Schema(definition);

interface BaseType {
  _id?: string,
  titleEN: string,
  titleUA: string,
  titleRU: string,
}

export {BaseType}
export default BaseSchema;
