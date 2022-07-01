import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../errors/badRequestError';
import { Course } from '../../models/courseModel';
import { Order } from '../../models/orderModel';

export const newOrder = async (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  const userId = req.user!.id;
  const courseId = req.params.courseId;

  const course = await Course.findById(courseId);

  if (!course) {
    return next(new BadRequestError('Course not found'));
  }
  const existingOrder = await Order.findOne({ course });

  if (existingOrder) {
    console.log('existingOrder', existingOrder);
    return next(new BadRequestError('Order already exists on your cart! Complete the payment to proceed'));
  }

  const order = Order.build({
    user: userId,
    course: course.id,
    price: course.price,
  });

  await order.save();

  res.status(201).json({ order });
};
