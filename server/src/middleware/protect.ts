import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../errors/badRequestError';

type UserPayload = {
  readonly id: string;
  readonly email: string;
};

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(new BadRequestError('You are not logged in! Please login first'));
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    req.user = payload;
  } catch (error) {}

  next();
};
