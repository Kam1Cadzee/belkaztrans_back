import {Schema} from 'mongoose';

const fileSchema = new Schema({
  uploadDate: {
    type: Date
  },
  length: {
    type: Number
  },
  chunkSize: {
    type: Number
  },
  md5: {
    type: String
  },
  filename: {
    type: String
  },
  contentType: {
    type: String
  }
}, {});

export default fileSchema;
