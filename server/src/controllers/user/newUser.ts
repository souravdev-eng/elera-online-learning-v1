import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../../errors';
import { User } from '../../models';

export const newUser = async (req: Request, res: Response, next: NextFunction) => {
  const { fullName, email, password } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    return next(new BadRequestError('User email already is used!'));
  }

  const user = User.build({ fullName, email, password });
  await user.save();

  const token = jwt.sign(
    { id: user.id, email: user.email, fcmToken: user.fcmToken },
    process.env.JWT_SECRET!,
    {
      expiresIn: process.env.JWT_SECRET_EXPIRY!,
    }
  );

  res.status(201).json({ token, user });
};
