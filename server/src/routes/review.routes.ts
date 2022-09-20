import { Router } from 'express';
import { getAllReviews } from '../controllers/review/getAllReview';
import { newReview } from '../controllers/review/newReview';
import { protect } from '../middleware/protect';

const router = Router();

router.route('/').get(getAllReviews).post(protect, newReview);

export { router as reviewRoute };
