import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../errors';
import { Order, Course } from '../../models';

export const newOrder = async (req: Request, res: Response, next: NextFunction) => {
  const course = await Course.findById(req.params.courseId);

  if (!course) {
    return next(new BadRequestError('Course not found'));
  }
  const existingOrder = await Order.findOne({ course });

  if (existingOrder) {
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
