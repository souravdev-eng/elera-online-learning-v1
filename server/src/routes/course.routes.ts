import { Router } from 'express';
import { requestValidation } from '../middleware/requestValidation';
import { courseCreateValidation } from '../validation/courseValidationSchema';

import { newCourse } from './../controllers/course/newCourse';
import { showAllCourse } from '../controllers/course/showAllCourse';
import { courseDetailsById } from '../controllers/course/courseDetailsById';
import { protect } from '../middleware/protect';

const router = Router();

router.route('/').post(courseCreateValidation, requestValidation, newCourse).get(showAllCourse);

router.route('/:id').get(protect, courseDetailsById);

export { router as courseRouter };
