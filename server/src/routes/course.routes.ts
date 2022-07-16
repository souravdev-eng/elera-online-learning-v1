import { Router } from 'express';

import { courseDetailsById } from '../controllers/course/courseDetailsById';
import { showAllCourse } from '../controllers/course/showAllCourse';
import { newCourse } from './../controllers/course/newCourse';

import { isCreator } from '../middleware/isCreator';
import { protect } from '../middleware/protect';

const router = Router();

router.route('/').post(protect, isCreator, newCourse).get(showAllCourse);
router.route('/:id').get(protect, courseDetailsById);

export { router as courseRouter };
