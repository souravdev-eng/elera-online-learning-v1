import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../errors/badRequestError';
// import { admin } from '../../firebase/firebase.config';
import { Course } from '../../models/courseModel';
import { Creator } from '../../models/creatorModel';

export const newCourse = async (req: Request, res: Response, next: NextFunction) => {
  const { title, aboutCourse, durationHours, lessons, preRequisite, price, originalPrice, creatorId, category, introVideo, image } = req.body;

  const creator = await Creator.findById(creatorId);

  if (!creator) {
    return next(new BadRequestError('Creator not found'));
  }

  const course = Course.build({
    title,
    price,
    lessons,
    category,
    creatorId: creator.id,
    introVideo,
    aboutCourse,
    preRequisite,
    durationHours,
    originalPrice,
    image,
  });
  await course.save();

  // const message = {
  //   notification: {
  //     title: `New course added`,
  //     body: `${title}. It's might be your next course`,
  //     type: 'NEW_COURSE',
  //   },
  //   tokens: notificationToken,
  // };

  // admin
  //   .messaging()
  //   .sendMulticast(message)
  //   .then(() => {
  //     console.log('success');
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //   });

  res.status(201).json({ message: 'course created successfully', course });
};
