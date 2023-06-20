import { NextFunction, Request, Response } from 'express';
import { Course } from '../../models/courseModel';

export const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
  const { ratingAvg, price, title } = req.body;
  const id = req.params.id;
  await Course.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });

  res.status(200).json({ course: 'Updated successfully' });
};
