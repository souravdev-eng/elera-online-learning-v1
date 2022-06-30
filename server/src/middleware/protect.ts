import { promisify } from 'util';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../errors/badRequestError';
import { NotFoundError } from '../errors/notFoundError';
import { User } from '../models/userModel';

interface UserPayload {
  email: string;
  password: string;
  fullName: string;
  nickName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  dialCode: string;
  gender: 'male' | 'female' | 'others';
  profileImage: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new BadRequestError('You are not logged in! Please login first'));
  }

  // @ts-ignore
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET!);

  // @ts-ignore
  const currentUser = await User.findById(decode.id);

  if (!currentUser) {
    return next(new NotFoundError('No user found! Please login first'));
  }

  req.user = currentUser;

  next();
};
