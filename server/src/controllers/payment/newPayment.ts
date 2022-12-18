import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../errors';
import { Payment, Order } from '../../models';
import { OrderStatus, stripe } from '../../utils';

export const newPayment = async (req: Request, res: Response, next: NextFunction) => {
  const orderId = req.params.orderId;
  const order = await Order.findById(orderId);

  if (!order) {
    return next(new BadRequestError('Order not found'));
  }

  if (order.status === OrderStatus.CANCELLED) {
    return next(new BadRequestError('This order has been cancelled'));
  }

  if (order.status === OrderStatus.COMPLETED) {
    return next(new BadRequestError('This order already has been completed'));
  }

  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' }
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: order.price * 100,
    currency: 'inr',
  });

  const payment = Payment.build({
    order: order.id,
    stripeId: paymentIntent.id,
  });

  await payment.save();
  order.status = OrderStatus.PENDING;
  await order.save();

  res.status(200).json({
    payment,
    clientSecret: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
};
