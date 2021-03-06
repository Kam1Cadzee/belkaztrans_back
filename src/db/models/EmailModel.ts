import mongoose from 'mongoose';
import EmailSchema from '../schemas/EmailSchema';

const EmailModel = mongoose.model('email', EmailSchema);

export default EmailModel;
