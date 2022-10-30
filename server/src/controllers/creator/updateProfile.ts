import { NextFunction, Request, Response } from 'express';
import { BadRequestError, NotFoundError } from '../../errors';
import { Creator } from '../../models';

export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user!.id;

  const isCreator = await Creator.findById(id);

  if (!isCreator) {
    console.log({ isCreator });
    return next(new NotFoundError('There is no creator found with this ID'));
  }

  if (isCreator?.id !== id) {
    return next(
      new BadRequestError(
        'You are not a creator! Only creator have a permission to access this route'
      )
    );
  }

  const { fullName, nickName, dateOfBirth, phoneNumber, dialCode, gender, profileImage, bio } =
    req.body;

  const creator = await Creator.findByIdAndUpdate(
    isCreator.id,
    {
      fullName,
      nickName,
      dateOfBirth,
      phoneNumber,
      dialCode,
      gender,
      profileImage,
      bio,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({ creator });
};
