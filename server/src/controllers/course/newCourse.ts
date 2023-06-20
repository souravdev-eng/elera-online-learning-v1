import { NextFunction, Request, Response } from 'express';
import { BadRequestError, NotFoundError } from '../../errors';
import { Course, Creator } from '../../models';

export const newCourse = async (req: Request, res: Response, next: NextFunction) => {


  const {
    title,
    aboutCourse,
    durationHours,
    lessons,
    preRequisite,
    price,
    originalPrice,
    category,
    introVideo,
    image,
  } = req.body;

  if (price > originalPrice) {
    return next(new BadRequestError('Offer price must be less than original price!'));
  }


  const course = Course.build({
    title,
    price,
    image,
    lessons,
    category,
    creatorId: req?.user!.id,
    introVideo,
    aboutCourse,
    preRequisite,
    durationHours,
    originalPrice,
  });

  if (course?.id) {
    let id = course?.creatorId;
    await Creator.findByIdAndUpdate(id, { $inc: { totalCourse: 1 } }, { new: true })
  }


  await course.save();

  res.status(201).json({ course });
};
