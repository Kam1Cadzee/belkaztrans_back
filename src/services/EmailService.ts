import {BaseService} from './BaseService';
import IEmail from '../interfaces/IEmail';
import EmailModel from '../db/models/EmailModel';

export class EmailService extends BaseService<IEmail> {
  constructor() {
    super();
    this.document = EmailModel;
  }
}
