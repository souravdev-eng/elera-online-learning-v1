import { NextFunction, Request, Response } from 'express';
import { Order } from '../../models';
import { OrderStatus } from '../../utils';

export const showMyCourse = async (req: Request, res: Response, next: NextFunction) => {
  const course = await Order.find({
    user: req.user.id,
    status: OrderStatus.COMPLETED,
  }).populate({
    path: 'course',
    select: 'title category creatorId durationHours lessons image',
  });

  res.status(200).send(course);
};
