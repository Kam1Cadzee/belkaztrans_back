import multer from 'multer';
import path from 'path';
import { Request } from 'express';

const dest = path.resolve(__dirname, '../..', 'uploads');

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname.replace(/\s/g, ''))
  },
  destination: dest
});

/**
 * Upload file format validation
 * @param req Request
 * @param file
 * @param cb
 */
const fileFilter = (req: Request, file: any, cb: any) => {
  const validMIMEType = ['application/pdf'];

  if (validMIMEType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type pdf"), false);
  }
};

export const uploader = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20mb
  },
  dest: dest
});
