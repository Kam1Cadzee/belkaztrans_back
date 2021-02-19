import express from 'express';
import {ProductController} from '../controllers/ProductController';
import existProduct from '../middlewares/existsProduct';
import {imageUploader} from '../middlewares/imageUploader';

const router = express.Router();

const controller = new ProductController();

router.post('/images/:id',
  existProduct,
  imageUploader,
  controller.uploadImage);
router.get('/images/:id', controller.getImage);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

export default router;
