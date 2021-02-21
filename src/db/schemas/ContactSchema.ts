import mongoose from 'mongoose';

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

export default ContactSchema;
