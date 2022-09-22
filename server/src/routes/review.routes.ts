import { Router } from 'express';
import { deleteReview } from '../controllers/review/deleteReview';
import { getAllReviews } from '../controllers/review/getAllReview';
import { updateReview } from '../controllers/review/updateReview';
import { newReview } from '../controllers/review/newReview';
import { protect } from '../middleware/protect';

const router = Router({ mergeParams: true });

router.use(protect);

router.route('/').get(getAllReviews).post(newReview);
router.route('/:id').patch(updateReview).delete(deleteReview);

export { router as reviewRoute };
