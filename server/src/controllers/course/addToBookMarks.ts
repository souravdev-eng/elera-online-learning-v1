import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { User, Course } from '../../models';

export const addToBookMarks = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const userId = req.user?.id;

  const course = await Course.findById(id);
  const user = await User.findById(userId);

  if (!course) {
    return next(new NotFoundError('There is no course found'));
  }

  if (!user) {
    return next(new NotFoundError('There is no user found'));
  }

  if (user.bookMarks.includes(course.id)) {
    user.bookMarks = user.bookMarks.filter((courseId) => courseId !== course.id);
    await user.save();
    res.status(200).json({ message: 'Course removed to bookmarks' });
  } else {
    user.bookMarks.push(course.id);
    await user.save();
    res.status(200).json({ message: 'Course added to bookmarks' });
  }
};
