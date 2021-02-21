import mongoose from 'mongoose';
import {IProduct} from './ProductModel';
import ContactSchema from '../schemas/ContactSchema';

const ContactModel = mongoose.model('Contact', ContactSchema);

interface IContact{
  _id: string,
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  comment: string,
  typeProduct: IProduct
}

export {IContact}
export default ContactModel;
