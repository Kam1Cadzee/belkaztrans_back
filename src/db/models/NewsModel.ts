import mongoose from 'mongoose';
import {BaseType} from '../schemas/BaseSchema';
import NewsSchema from '../schemas/NewsSchema';

const NewsModel = mongoose.model('News', NewsSchema);

interface INews extends BaseType {
  date: Date,

  textEN: string,
  textRU: string,
  textUA: string,
}

export {INews}
export default NewsModel;
