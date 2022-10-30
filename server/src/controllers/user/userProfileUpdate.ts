import { NextFunction, Request, Response } from 'express';
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
