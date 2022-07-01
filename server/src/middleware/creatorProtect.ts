import { promisify } from 'util';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../errors/badRequestError';
import { NotFoundError } from '../errors/notFoundError';
import { Creator } from '../models/creatorModel';

interface UserPayload {
  id: mongoose.Types.ObjectId;
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
      creator?: UserPayload;
    }
  }
}

export const creatorProtect = async (req: Request, res: Response, next: NextFunction) => {
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
  const currentCreator = await Creator.findById(decode.id);

  if (!currentCreator) {
    return next(new NotFoundError('No user found! Please login first'));
  }

  // @ts-ignore
  req.creator = currentCreator;

  next();
};
