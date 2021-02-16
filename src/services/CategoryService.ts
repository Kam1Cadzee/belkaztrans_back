import BaseService from './BaseService';
import CategoryModel, {ICategory} from '../db/models/CategoryModel';

export class CategoryService extends BaseService<ICategory> {
  constructor() {
    super();
    this.document = CategoryModel;
  }
}
