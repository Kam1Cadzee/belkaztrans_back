import mongoose from 'mongoose';
import BaseSchema, {BaseType} from '../schemas/BaseSchema';
import FuelSchema, {IFuel} from '../schemas/FuelSchema';

const Schema = mongoose.Schema;

const definition = {
  fuels: [
    {
      ...FuelSchema.obj
    }
  ],
  code: {
    type: String,
    required: true
  },
  file: String,
};

const ProductSchema = new Schema({
  ...BaseSchema.obj,
  ...definition,
});

const ProductModel = mongoose.model('Product', ProductSchema);

interface IProduct extends BaseType {
  code: string,
  file: string,
  fuels: IFuel[],
}

export {IProduct}
export default ProductModel;
