import { NextFunction, Request, Response } from 'express';
import { Review } from '../../models/reviewModel';

export const getAllReviews = async (req: Request, res: Response, next: NextFunction) => {
  let filter = {};

  if (req.params.courseId) filter = { course: req.params.courseId };

  const review = await Review.find(filter);

  res.status(200).json({
    length: review.length,
    data: { review },
  });
};
