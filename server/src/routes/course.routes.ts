import { Router } from 'express';

import { courseCreateValidation } from '../validation/courseValidationSchema';

import { requestValidation } from '../middleware/requestValidation';

import { courseDetailsById } from '../controllers/course/courseDetailsById';
import { showAllCourse } from '../controllers/course/showAllCourse';
import { creatorProtect } from '../middleware/creatorProtect';
import { newCourse } from './../controllers/course/newCourse';
import { protect } from '../middleware/protect';

const router = Router();

router.route('/').post(creatorProtect, courseCreateValidation, requestValidation, newCourse).get(showAllCourse);
router.route('/:id').get(protect, courseDetailsById);

export { router as courseRouter };
