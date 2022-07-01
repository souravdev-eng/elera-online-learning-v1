import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../errors/badRequestError';
import { Order } from '../../models/orderModel';
import { Payment } from '../../models/payment';
import { OrderStatus } from '../../utils/OrderType';
import { stripe } from '../../utils/stripe';

export const newPayment = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;
  const orderId = req.params.orderId;

  const order = await Order.findById(orderId);

  // if (order?.user !== req.user?.id) {
  //   return next(new BadRequestError('You cannot pay for this order'));
  // }

  if (!order) {
    return next(new BadRequestError('Order not found'));
  }

  if (order.status === OrderStatus.CANCELLED) {
    return next(new BadRequestError('This order has been cancelled'));
  }

  if (order.status === OrderStatus.COMPLETED) {
    return next(new BadRequestError('This order already has been completed'));
  }

  const charge = await stripe.charges.create({
    amount: order.price * 100,
    currency: 'inr',
    source: token,
  });

  const payment = Payment.build({
    order: order.id,
    stripeId: charge.id,
  });

  await payment.save();
  order.status = OrderStatus.COMPLETED;
  await order.save();

  res.status(200).json({ payment });
};
