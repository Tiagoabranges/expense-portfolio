import { Router } from 'express';
import TotalController from '../controllers/total.controller';

const router = Router();

const totalController = new TotalController();

router.get('/', totalController.getAll);




export default router;