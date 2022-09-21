import { Router } from 'express';
import { getAllReviews } from '../controllers/review/getAllReview';
import { newReview } from '../controllers/review/newReview';
import { protect } from '../middleware/protect';

const router = Router({ mergeParams: true });

router.use(protect);
router.route('/').get(getAllReviews).post(newReview);

export { router as reviewRoute };
