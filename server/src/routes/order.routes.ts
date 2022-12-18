import { Router } from 'express';

import { protect } from '../middleware/protect';
import { newOrder } from '../controllers/order/newOrder';
import { showOrder } from '../controllers/order/showOrder';
import { orderComplete } from '../controllers/order/orderUpdate';
import { newPayment } from '../controllers/payment/newPayment';

const router = Router();

router.route('/').get(protect, showOrder);
router.route('/:courseId').post(protect, newOrder);
router.route('/payment/:orderId').post(protect, newPayment).put(protect, orderComplete);

export { router as orderRouter };
