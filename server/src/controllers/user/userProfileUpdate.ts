import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../../models';

export const userProfileUpdate = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user?.id;

  const { fullName, nickName, dateOfBirth, phoneNumber, dialCode, gender, profileImage } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { fullName, nickName, dateOfBirth, phoneNumber, dialCode, gender, profileImage },
    { new: true, runValidators: true }
  );

  res.status(200).json({ user });
};

export const userFcmTokenSave = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user?.id;
  const { fcmToken } = req.body;

  const user = await User.findByIdAndUpdate(id, { fcmToken }, { new: true, runValidators: true });

  if (user) {
    jwt.sign({ id: user.id, email: user.email, fcmToken: user.fcmToken }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_SECRET_EXPIRY!,
    });
  }

  res.status(200).json({ user });
};
