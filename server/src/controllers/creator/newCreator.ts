import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/badRequestError';
import { Creator } from '../../models/creatorModel';

export const newCreator = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, phoneNumber, dialCode } = req.body;
  const existingCreator = await Creator.findOne({ email });

  if (existingCreator) {
    return next(new BadRequestError('Creator already exists. Please use different credentials'));
  }

  const creator = Creator.build({ email, dialCode, phoneNumber, password });
  await creator.save();

  const token = jwt.sign({ id: creator.id, email: creator.email }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_SECRET_EXPIRY!,
  });

  res.status(201).json({ token, creator });
};
