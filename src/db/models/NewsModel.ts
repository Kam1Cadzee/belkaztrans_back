import mongoose from 'mongoose';
import BaseSchema, {BaseType} from '../schemas/BaseSchema';
import mongoosePagination from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

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

const NewsModel = mongoose.model('News', NewsSchema);

interface INews extends BaseType {
  date: Date,

  textEN: string,
  textRU: string,
  textUA: string,
}

export {INews}
export default NewsModel;
