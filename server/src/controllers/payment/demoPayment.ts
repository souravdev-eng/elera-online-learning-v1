import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../errors';
import { Payment, Order } from '../../models';
import { OrderStatus, stripe } from '../../utils';

export const demoPayment = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  // const orderId = req.params.orderId;
  // const order = await Order.findById(orderId);

  // if (!order) {
  //   return next(new BadRequestError('Order not found'));
  // }

  // if (order.status === OrderStatus.CANCELLED) {
  //   return next(new BadRequestError('This order has been cancelled'));
  // }

  // if (order.status === OrderStatus.COMPLETED) {
  //   return next(new BadRequestError('This order already has been completed'));
  // }

  // const { course, id, user, price, status } = order;
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' }
  );

  const amount = 260;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'inr',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: { name },
  });

  console.log(paymentIntent);

  res.json({
    message: 'Payment initiated',
    clientSecret: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
};
