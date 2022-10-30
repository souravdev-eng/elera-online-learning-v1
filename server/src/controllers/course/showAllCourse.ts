import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { APIFeatures } from '../../utils';
import { Course } from '../../models';

export const showAllCourse = async (req: Request, res: Response, next: NextFunction) => {
  req.query.fields = 'title,price,originalPrice,totalReview,ratingAvg,category,image,totalStudent';

  const features = new APIFeatures(Course.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const course = await features.query.cache();

  if (!course) {
    return next(new NotFoundError('There is no course found'));
  }

  res.status(200).json({ course });
};
