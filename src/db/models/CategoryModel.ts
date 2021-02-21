import mongoose from 'mongoose';
import {BaseType} from '../schemas/BaseSchema';
import CategorySchema from '../schemas/CategorySchema';

const CategoryModel = mongoose.model('Category', CategorySchema);

interface ICategory extends BaseType {
  title: string,
}

export {ICategory}
export default CategoryModel;
