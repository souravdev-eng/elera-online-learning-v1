import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../errors';
import { Order, Course } from '../../models';
import { OrderStatus } from '../../utils';
// const EXPIRATION_WINDOW_SECONDS = 10 * 60 * 1000;

export const newOrder = async (req: Request, res: Response, next: NextFunction) => {
  const course = await Course.findById(req.params.courseId);

  if (!course) {
    return next(new BadRequestError('Course not found'));
  }
  const existingOrder = await Order.findOne({ course });

  if (existingOrder?.status === OrderStatus.COMPLETED) {
    return next(new BadRequestError('This course already punched'));
  } else if (existingOrder) {
    return res.status(201).json({ order: existingOrder });
  } else {
    const order = Order.build({
      user: req.user?.id,
      course: course.id,
      price: course.price,
    });

    await order.save();
    res.status(201).json({ order });
  }
};
