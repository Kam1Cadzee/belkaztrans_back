import {Schema} from 'mongoose';

const EmailSchema = new Schema({
  to: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  template: {
    type: String,
  },
  enabled: {
    type: Boolean,
  },
}, {});

export default EmailSchema;
