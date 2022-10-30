import { Router } from 'express';
import {
  creatorLogin,
  showAllCreators,
  updateProfile,
  newCreator,
  showCreatorById,
} from './../controllers/creator';
import { userLoginUpValidation, userSignUpValidation } from './../validation/userValidationSchema';
import { requestValidation } from './../middleware/requestValidation';
import { protect } from '../middleware/protect';

const router = Router();

router.post('/signup', userSignUpValidation, requestValidation, newCreator);
router.post('/login', userLoginUpValidation, requestValidation, creatorLogin);
router.route('/update-profile').put(protect, updateProfile);

router.route('/').get(protect, showAllCreators);
router.route('/:id').get(protect, showCreatorById);

export { router as creatorRouter };
