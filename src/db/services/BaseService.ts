import IBaseService from '../interfaces/IBaseService';
import {Document, Model, Query} from 'mongoose';

class BaseService<T> implements IBaseService<T> {
  protected document: Model<Document<T>>;

  create: (data: T) => Promise<Document<T>> = data => {
    return this.document.create(data);
  };

  delete = id => {
    return this.document.deleteOne({
      _id: id
    })
  };

  getAll: () => Query<Array<Document<T>>, Document<T>> = () => {
    return this.document.find();
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
