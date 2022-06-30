import { Router } from 'express';
import { newCreator } from '../controllers/creator/newCreator';

const router = Router();

router.post('/new-creator', newCreator);

export { router as creatorRouter };
