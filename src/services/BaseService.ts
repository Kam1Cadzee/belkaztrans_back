import IBaseService, {IDQ, IGet, IPR} from '../interfaces/IBaseService';
import {Document, DocumentQuery, FilterQuery, PaginateModel, PaginateOptions, PaginateResult, Query} from 'mongoose';
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

  // @ts-ignore
  getAll: (query?: FilterQuery<D>, options?: PaginateOptions) => any = async (query = {}, options = {}) => {
    if(this.document.paginate) {
      return await this.document.paginate(query, options);
    }
    return this.document.find(query);
  };

  getOne = id => {
    return this.document.findById(id) as any;
  };

  update: (data, id) => Query<Document<T> | null, Document<T>> = (data, id) => {
    return this.document.findByIdAndUpdate({
      _id: id
    }, data);
  };

  getDocument = () => {
    return this.document;
  }
}

export default BaseService;
