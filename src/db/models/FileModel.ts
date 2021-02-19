import mongoose from 'mongoose';
import fileSchema from '../schemas/FileSchema';

const FileModel = mongoose.model('File', fileSchema, 'pdfs.files', true);

export default FileModel;
