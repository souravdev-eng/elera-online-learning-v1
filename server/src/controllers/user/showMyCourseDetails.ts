import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { Course, Order } from '../../models';
import { APIFeatures, OrderStatus } from '../../utils';

export const showMyCourseDetails = async (req: Request, res: Response, next: NextFunction) => {
  req.query.fields = 'title,lessons,creatorId';

  const { id } = req.params;

  const existCourse = await Order.findOne({
    user: req.user.id,
    status: OrderStatus.COMPLETED,
    course: id,
  });

  if (!existCourse) {
    return next(new NotFoundError('Oops! There is no course found with this ID'));
  }

  const features = new APIFeatures(Course.findById(id), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const course = await features.query.cache();

  res.status(200).json(course);
};
