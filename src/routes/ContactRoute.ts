import express from 'express';
import {ContactController} from '../controllers/ContactController';

const router = express.Router();

const controller = new ContactController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

export default router;
