import {BaseService} from './BaseService';
import UserModel from '../db/models/UserModel';
import IUser from '../interfaces/IUser';

export class UserService extends BaseService<IUser> {
  constructor() {
    super();
    this.document = UserModel;
  }

  create = data => {
    data.email = data.email.toLowerCase();
    return this.document.create(data);
  };
}
