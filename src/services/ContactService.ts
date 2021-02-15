import ContactModel, {IContact} from '../db/models/ContactModel';
import BaseService from './BaseService';

export class ContactService extends BaseService<IContact> {
  constructor() {
    super();
    this.document = ContactModel;
  }
}
