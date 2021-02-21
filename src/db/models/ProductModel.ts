import mongoose from 'mongoose';
import {BaseType} from '../schemas/BaseSchema';
import ProductSchema from '../schemas/ProductSchema';
import {IFuel} from '../schemas/FuelSchema';

const ProductModel = mongoose.model('Product', ProductSchema);

interface IProduct extends BaseType {
  code: string,
  fuels: IFuel[],
}

export {IProduct}
export default ProductModel;
