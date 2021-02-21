import express from 'express';
import {imageUploader} from '../middlewares/imageUploader';
import {FuelController} from '../controllers/FuelController';
import existFuel from '../middlewares/existsFuel';

const router = express.Router();

const controller = new FuelController();

router.post('/images/:id',
  existFuel,
  imageUploader,
  controller.uploadImage);
router.get('/images/:id', controller.getImage);

export default router;
