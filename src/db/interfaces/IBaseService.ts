import {Document, Query} from 'mongoose';

interface IBaseService<T> {
  create: (data: T) => Promise<Document<T>>;
  getAll: () => Query<Array<Document<T>>, Document<T>>;
  getOne: (id: string) => Query<Document<T> | null, Document<T>>;
  update: (data: T, id: string) => Query<Document<T> | null, Document<T>>;
  delete: (id: string) => Query<any, Document<T>>
}

export default IBaseService;
