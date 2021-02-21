import {Schema} from 'mongoose';

const definition = {
  title: {
    type: String,
    required: true
  },
};

const CategorySchema = new Schema({
  ...definition,
});

export default CategorySchema;
