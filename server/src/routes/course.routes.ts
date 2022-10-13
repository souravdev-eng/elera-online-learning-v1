import { Router } from 'express';

import {
  newCourse,
  showAllCourse,
  addToBookMarks,
  showAllBookMarks,
  courseDetailsById,
} from '../controllers/course';

import { isCreator, protect } from '../middleware';

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

<<<<<<< HEAD
router.route('/:id').get(protect, courseDetailsById);
=======
//! Need to creator when course is updating
router.route('/:id').get(protect, courseDetailsById).patch(protect, updateCourse);
>>>>>>> 06d83f2c9c9ff505864859bc3d59f91f5ec2aaca

export { router as courseRouter };
