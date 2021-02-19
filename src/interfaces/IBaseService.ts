import {Document, FilterQuery, PaginateModel, PaginateOptions, PaginateResult, Query} from 'mongoose';

type IPR<T = any> = PaginateResult<T>;
type IDQ<T = any> = Query<Document<T>[], Document<T>>;

type IGet<T = any> = IPR<T> | IDQ<T>;

interface IBaseService<T, D> {
  create: (data: T) => Promise<Document<T>>;
  getAll: (query?: FilterQuery<D>, o?: PaginateOptions) => Promise<IGet<T>>;
  getOne: (id: string) => T;
  update: (data: T, id: string) => Query<Document<T> | null, Document<T>>;
  delete: (id: string) => Query<any, Document<T>>;
  getDocument: () => PaginateModel<Document<T>>;
}

export {IGet, IPR, IDQ};
export default IBaseService;
