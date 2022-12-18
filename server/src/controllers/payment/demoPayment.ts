import { Request, Response, NextFunction } from 'express';
import { stripe } from '../../utils';

export const demoPayment = async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' }
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 260 * 100,
    currency: 'inr',
  });

  res.json({
    message: 'Payment initiated',
    clientSecret: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    stripeId: paymentIntent.id,
  });
};
