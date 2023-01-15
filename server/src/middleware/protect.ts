import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../errors';

type UserPayload = {
  id: string;
  email: string;
  fcmToken?: string;
};

declare global {
  namespace Express {
    interface Request {
      user: UserPayload;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      throw new BadRequestError('You are not logged in! Please login first');
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;

    if (!payload) {
      throw new BadRequestError('There is no user with this id');
    }

    req.user = payload;
  } catch (error) {
    console.log(error);
  }

  next();
};
