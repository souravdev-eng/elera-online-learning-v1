import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors/notFoundError';

export const userDetails = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user) {
    return next(new NotFoundError('There is no user found'));
  }
  res.status(200).json({ user });
};
