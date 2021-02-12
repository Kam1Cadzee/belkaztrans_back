import mongoose from 'mongoose';
import {IProduct} from './ProductModel';

const Schema = mongoose.Schema;

const definition = {
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  comment: String,
  typeProduct: { type: Schema.Types.ObjectId, ref: 'Service' },
};

const ContactSchema = new Schema(definition);

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
