import { Router } from 'express';

import { newOrder } from '../controllers/order/newOrder';
import { protect } from '../middleware/protect';
import { newPayment } from '../controllers/payment/newPayment';
import { showOrder } from '../controllers/order/showOrder';

const router = Router();

router.use(protect);

router.route('/').get(showOrder);
router.route('/:courseId').post(newOrder);
router.post('/payment/:orderId', newPayment);

export { router as orderRouter };
