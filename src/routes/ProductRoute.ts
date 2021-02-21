import express from 'express';
import {ProductController} from '../controllers/ProductController';

const router = express.Router();

const controller = new ProductController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

export default router;
