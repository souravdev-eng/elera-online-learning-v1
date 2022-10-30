import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { APIFeatures } from '../../utils';
import { Creator } from '../../models';

export const showCreatorById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const features = new APIFeatures(Creator.findById(id), req.query);
  const creator = await features.query.cache();

  if (!creator) {
    return next(new NotFoundError('There is no creator found'));
  }

  res.status(200).json(creator);
};
