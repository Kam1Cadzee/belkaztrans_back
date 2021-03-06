import express from 'express';
import {NewsController} from '../controllers/NewsController';
import {CategoryController} from '../controllers/CategoryController';

const router = express.Router();

const controller = new CategoryController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

export default router;
