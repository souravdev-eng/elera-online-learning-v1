import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../errors/badRequestError';
import { Course } from '../../models/courseModel';

export const newCourse = async (req: Request, res: Response, next: NextFunction) => {
  const { title, aboutCourse, durationHours, lessons, preRequisite, price, originalPrice, category, introVideo, image } = req.body;

  const creator = req.creator;

  if (!creator) {
    return next(new BadRequestError('Creator not found'));
  }

  const course = Course.build({
    title,
    price,
    image,
    lessons,
    category,
    creatorId: creator.id,
    introVideo,
    aboutCourse,
    preRequisite,
    durationHours,
    originalPrice,
  });

  await course.save();

  res.status(201).json({ course });
};
