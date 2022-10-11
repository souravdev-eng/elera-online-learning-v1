import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors';
import { Creator } from '../../models';

export const creatorLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const creator = await Creator.findOne({ email });

  if (!creator || !(await creator.correctPassword(password, creator.password))) {
    return next(new BadRequestError('User is not found or password is incorrect'));
  }

  const token = jwt.sign({ id: creator.id, email: creator.email }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_SECRET_EXPIRY!,
  });

  res.status(200).json({ token, creator });
};
