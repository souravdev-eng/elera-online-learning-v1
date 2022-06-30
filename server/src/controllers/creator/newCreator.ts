import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Creator } from '../../models/creatorModel';

export const newCreator = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, phoneNumber, dialCode } = req.body;

  const creator = Creator.build({ email, dialCode, phoneNumber, password });
  await creator.save();

  const token = jwt.sign({ id: creator.id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_SECRET_EXPIRY! });

  res.status(201).json({ message: 'Creator created successfully', data: { token, creator } });
};
