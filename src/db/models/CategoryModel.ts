import mongoose from 'mongoose';
import BaseSchema, {BaseType} from '../schemas/BaseSchema';
import mongoosePagination from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const definition = {
  title: {
    type: String,
    required: true
  },
};

const CategorySchema = new Schema({
  ...definition,
});

const CategoryModel = mongoose.model('Category', CategorySchema);

interface ICategory extends BaseType {
  title: string,
}

export {ICategory}
export default CategoryModel;
