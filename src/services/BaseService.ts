import IBaseService from '../interfaces/IBaseService';
import {Document, FilterQuery, PaginateModel, PaginateOptions} from 'mongoose';

export class BaseService<T, D = Document> implements IBaseService<T, D> {
  protected document: PaginateModel<Document<T>>;

  create: (data: T) => Promise<Document<T>> = data => {
    return this.document.create(data);
  };

  delete = async id => {
    return this.document.findByIdAndDelete({
      _id: id
    })
  };

  getAll: (query?: FilterQuery<D> | any, options?: PaginateOptions) => any = async (query = {}, options = {}) => {
    if(this.document.paginate) {
      return await this.document.paginate(query, options);
    }
    return this.document.find(query).populate('fuels');
  };

  getOne = id => {
    return this.document.findById(id) as any;
  };

  update = (data, id) => {
    return this.document.findByIdAndUpdate({
      _id: id
    }, data, {
      new: true
    });
  };

  getDocument = () => {
    return this.document;
  }
}
