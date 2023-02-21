import { Router } from 'express';
import SpentController from '../controllers/spent.controller';

const router = Router();

const spentController = new SpentController();

router.get('/', spentController.getAll);
router.get('/:id', spentController.getById);
router.post('/', spentController.create);
router.delete('/:id', spentController.remove);


export default router;