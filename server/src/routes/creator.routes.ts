import { Router } from 'express';
import { userLoginUpValidation, userSignUpValidation } from './../validation/userValidationSchema';
import { requestValidation } from './../middleware/requestValidation';
import { protect } from '../middleware/protect';

import { creatorLogin } from './../controllers/creator/creatorLogin';
import { showAllCreators } from '../controllers/creator/showAllCreators';
import { updateProfile } from '../controllers/creator/updateProfile';
import { newCreator } from '../controllers/creator/newCreator';

const router = Router();

router.post('/signup', userSignUpValidation, requestValidation, newCreator);
router.post('/login', userLoginUpValidation, requestValidation, creatorLogin);
router.route('/update-profile').put(protect, updateProfile);

router.route('/').get(protect, showAllCreators);

export { router as creatorRouter };
