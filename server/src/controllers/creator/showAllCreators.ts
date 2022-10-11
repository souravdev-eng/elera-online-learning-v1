import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { APIFeatures } from '../../utils';
import { Creator } from '../../models';

export const showAllCreators = async (req: Request, res: Response, next: NextFunction) => {
  req.query.fields = 'nickName,profileImage,bio';

  const features = new APIFeatures(Creator.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const creator = await features.query.cache();

  if (!creator) {
    return next(new NotFoundError('There is no creator found'));
  }

  res.status(200).json({ creator });
};
