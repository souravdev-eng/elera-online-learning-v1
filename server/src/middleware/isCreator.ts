import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../errors';
import { Creator } from '../models/creatorModel';

export const isCreator = async (req: Request, res: Response, next: NextFunction) => {
  const creator = await Creator.findById(req.user!.id);

  if (!creator) {
    return next(new BadRequestError('Creator not found'));
  }

  next();
};
