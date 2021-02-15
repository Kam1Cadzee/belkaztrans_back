import ProductModel, {IProduct} from '../db/models/ProductModel';
import BaseService from './BaseService';

export class ProductService extends BaseService<IProduct, typeof ProductModel> {
  constructor() {
    super();
    this.document = ProductModel;
  }
}
