import util from 'util'
import multer from 'multer';
import {Request} from 'express';
import {HTTP422Error} from '../utils/httpErrors';
const config = require('../config');

const GridFsStorage = require('multer-gridfs-storage');

const dbURI = config.dbURI;

const imageStorage = new GridFsStorage({
  url: dbURI,
  options: {useNewUrlParser: true, useUnifiedTopology: true},
  file: (req: any, file: any) => {
    return {
      bucketName: 'pdfs',
      filename: file.originalname
    };
  }
});

const fileFilter = (req: Request, file: any, cb: any) => {
  const validMIMEType = ['application/pdf'];

  if (validMIMEType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new HTTP422Error({
      error: 'Invalid file format',
      message: 'Image uploaded is not of type pdf',
    }), false);
  }
};

const uploadFile = multer({
  storage: imageStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 40 * 1024 * 1024, // 40mb
  },
}).single('file');

const imageUploader = util.promisify(uploadFile);
export {imageUploader};
