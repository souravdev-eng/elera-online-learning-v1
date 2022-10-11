import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { User } from '../../models';

export const userDetails = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user?.id);

  if (!user) {
    return next(new NotFoundError('There is no user found'));
  }
  res.status(200).json({ user });
};
