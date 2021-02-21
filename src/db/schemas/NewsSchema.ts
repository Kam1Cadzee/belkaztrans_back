import {Schema} from 'mongoose';
import BaseSchema from './BaseSchema';
import mongoosePagination from 'mongoose-paginate-v2';

const definition = {
  date: {
    type: Date,
    required: true
  },

  textEN: {
    type: String,
    required: true
  },
  textRU: {
    type: String,
    required: true
  },
  textUA: {
    type: String,
    required: true
  },
};

const NewsSchema = new Schema({
  ...BaseSchema.obj,
  ...definition,
});
NewsSchema.plugin(mongoosePagination);

export default NewsSchema;
