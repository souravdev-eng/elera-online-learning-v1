import { Router } from 'express';
import { userSignUpValidation } from './../validation/userValidationSchema';
import { requestValidation } from './../middleware/requestValidation';
import { creatorLogin } from './../controllers/creator/creatorLogin';
import { newCreator } from '../controllers/creator/newCreator';

const router = Router();

router.post('/signup', userSignUpValidation, requestValidation, newCreator);
router.post('/login', userSignUpValidation, requestValidation, creatorLogin);

export { router as creatorRouter };
