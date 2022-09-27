import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { User } from '../../models/userModel';
import { Course } from '../../models/courseModel';
import { APIFeatures } from '../../utils/apiFetcher';

export const showAllBookMarks = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    return next(new NotFoundError('There is no user found'));
  }

  const features = new APIFeatures(Course.find({ _id: { $in: user.bookMarks } }), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const course = await features.query.cache();

  res.status(200).json({ course });
};
