import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';
import { Course } from '../../models/courseModel';
import { APIFeatures } from '../../utils/apiFetcher';

export const showAllCourse = async (req: Request, res: Response, next: NextFunction) => {
  const features = new APIFeatures(Course.find(), req.query).filter().sort().limitFields().paginate();
  const course = await features.query.cache();

  if (!course) {
    return next(new NotFoundError('There is no course found'));
  }

  res.status(200).json({ course });
};
