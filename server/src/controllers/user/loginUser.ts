import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/badRequestError';
import { User } from '../../models/userModel';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user?.correctPassword(password, user.password))) {
    return next(new BadRequestError('Invalid email or password! Please try again'));
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_SECRET_EXPIRY! });

  res.status(200).json({ token, user });
};
