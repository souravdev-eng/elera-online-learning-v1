import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';
import { Course } from '../../models/courseModel';

export const showAllCourse = async (req: Request, res: Response, next: NextFunction) => {
  const course = await Course.find({}).cache();

  if (!course) {
    return next(new NotFoundError('There is no course found'));
  }

  res.status(200).json({ data: course });
};
