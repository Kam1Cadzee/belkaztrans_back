import express from 'express';
import {UserController} from '../controllers/UserController';

const router = express.Router();

const controller = new UserController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/', controller.getAll);
router.get('/:id', controller.getOne);

export default router;
