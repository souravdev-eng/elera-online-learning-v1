import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../errors';
import { Order } from '../../models';
import { OrderStatus } from '../../utils';

export const orderComplete = async (req: Request, res: Response, next: NextFunction) => {
  const orderId = req.params.orderId;
  const order = await Order.findById(orderId);

  if (!order) {
    return next(new BadRequestError('order not found'));
  }

  if (order.status === OrderStatus.CANCELLED) {
    return next(new BadRequestError('Opps! Sorry order is canceled'));
  }
  if (order.status === OrderStatus.COMPLETED) {
    return next(new BadRequestError('Order already completed'));
  }
  order.status = OrderStatus.COMPLETED;

  await order.save();

  res.status(200).json({ order });
};
