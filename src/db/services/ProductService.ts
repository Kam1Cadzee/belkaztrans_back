import ProductModel, {IProduct} from '../models/ProductModel';
import BaseService from './BaseService';

export class ProductService extends BaseService<IProduct> {
  constructor() {
    super();
    this.document = ProductModel;
  }
}
