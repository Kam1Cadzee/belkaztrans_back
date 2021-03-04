import mongoose from 'mongoose';
import fileSchema from '../schemas/FileSchema';

const FileModel = mongoose.model('file', fileSchema, 'pdfs.files', true);

export default FileModel;
