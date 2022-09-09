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

const router = Router();

router.post('/bookmarks/:id', protect, addToBookMarks);
router.get('/bookmarks', protect, showAllBookMarks);

router
  .route('/')
  .post(protect, isCreator, courseCreateValidation, requestValidation, newCourse)
  .get(showAllCourse);
router.route('/:id').get(protect, courseDetailsById);

export { router as courseRouter };
