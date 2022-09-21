import { Router } from 'express';

import { courseDetailsById } from '../controllers/course/courseDetailsById';
import { showAllCourse } from '../controllers/course/showAllCourse';
import { newCourse } from './../controllers/course/newCourse';

import { isCreator } from '../middleware/isCreator';
import { protect } from '../middleware/protect';
import { addToBookMarks } from '../controllers/course/addToBookMarks';
import { showAllBookMarks } from '../controllers/course/showBookMarks';
import { courseCreateValidation } from '../validation/courseValidationSchema';
import { requestValidation } from '../middleware/requestValidation';
import { reviewRoute } from './review.routes';
import { updateCourse } from '../controllers/course/updateCourse';

const router = Router();

router.use('/:courseId/reviews', reviewRoute);

router.post('/bookmarks/:id', protect, addToBookMarks);
router.get('/bookmarks', protect, showAllBookMarks);

router
  .route('/')
  .post(protect, isCreator, courseCreateValidation, requestValidation, newCourse)
  .get(showAllCourse);

//! Need to creator when course is updating
router.route('/:id').get(protect, courseDetailsById).patch(protect, updateCourse);

export { router as courseRouter };
