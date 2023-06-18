import { Router } from 'express';

import {
  newCourse,
  showAllCourse,
  addToBookMarks,
  showAllBookMarks,
  courseDetailsById,
  showMyCourse,
} from '../controllers/course';

import { isCreator, protect } from '../middleware';

import { courseCreateValidation } from '../validation/courseValidationSchema';
import { requestValidation } from '../middleware/requestValidation';
import { reviewRoute } from './review.routes';
import { updateCoursePrice } from '../controllers/course/priceUpdate';

const router = Router();

router.use('/:courseId/reviews', reviewRoute);

router.post('/bookmarks/:id', protect, addToBookMarks);
router.get('/bookmarks', protect, showAllBookMarks);
router.get('/mycourse', protect, showMyCourse);

router
  .route('/')
  .post(protect, isCreator, courseCreateValidation, requestValidation, newCourse)
  .get(protect, showAllCourse);

router.patch('/price-update', protect, updateCoursePrice);

router.route('/:id').get(protect, courseDetailsById);

export { router as courseRouter };
