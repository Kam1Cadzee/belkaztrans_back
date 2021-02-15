import IBaseService from '../interfaces/IBaseService';
import {Document, FilterQuery, PaginateModel, PaginateOptions, Query} from 'mongoose';
import {query} from 'express';

class BaseService<T, D = Document> implements IBaseService<T, D> {
  protected document: PaginateModel<Document<T>>;

  create: (data: T) => Promise<Document<T>> = data => {
    return this.document.create(data);
  };

  delete = id => {
    return this.document.deleteOne({
      _id: id
    })
  };

  getAll: (query?: FilterQuery<D>, options?: PaginateOptions) => Query<Array<Document<T>>, Document<T>> = (query = {}, options = {}) => {
    if(this.document.paginate) {
      return this.document.paginate(query, options) as any;
    }
    return this.document.find(query);
  };

  getOne: (id) => Query<Document<T> | null, Document<T>> = id => {
    return this.document.findById(id);
  };

  update: (data, id) => Query<Document<T> | null, Document<T>> = (data, id) => {
    return this.document.findByIdAndUpdate({
      _id: id
    }, data);
  };
}

export default BaseService;
