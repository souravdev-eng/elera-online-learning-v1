import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';
import { Course } from '../../models/courseModel';

export const courseDetailsById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const course = await Course.findById(id).populate({ path: 'creatorId', select: 'nickName profileImage bio' });

  if (!course) {
    return next(new NotFoundError('There is no course found'));
  }
  res.status(200).json({ course });
};
