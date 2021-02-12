import IBaseService from '../interfaces/IBaseService';

class BaseController<T> {
  private service: IBaseService<T>;

  constructor() {

  }
}
