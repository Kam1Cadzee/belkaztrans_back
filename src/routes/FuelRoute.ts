import express from 'express';
import {fileUploader} from '../middlewares/fileUploader';
import {FuelController} from '../controllers/FuelController';
import existFuel from '../middlewares/existsFuel';

const router = express.Router();

const controller = new FuelController();

router.post('/images/:id',
  existFuel,
  fileUploader,
  controller.uploadImage);
router.get('/images/:id', controller.getImage);
router.delete('/images/:id', controller.removeImage);

export default router;
