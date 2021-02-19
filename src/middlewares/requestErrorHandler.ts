
import { Request, Response, NextFunction, Router } from 'express';
import * as RequestError from '../utils/errorHandler';
import { HTTP403Error, HTTP422Error } from '../utils/httpErrors';

type ErrorWithCode = Error & { code?: string };

enum ErrorCode {
  'LIMIT_PART_COUNT',
  'LIMIT_FILE_SIZE',
  'LIMIT_FILE_COUNT',
  'LIMIT_FIELD_KEY',
  'LIMIT_FIELD_VALUE',
  'LIMIT_FIELD_COUNT',
  'LIMIT_UNEXPECTED_FILE',
}

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    RequestError.notFoundError();
  });
};

const handleClientError = (router: Router) => {
  router.use(
    (err: ErrorWithCode, req: Request, res: Response, next: NextFunction) => {
      if (err.code === 'EBADCSRFTOKEN') {
        err = new HTTP403Error();
      }
      if (err.name == 'MulterError' || (<any>Object).values(ErrorCode).includes(err.code)) {
        err = new HTTP422Error(err);
      }
      console.log(err)
      RequestError.clientError(err, res, next);
    }
  );
};

const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    RequestError.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
