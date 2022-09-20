import { NextFunction, Request, Response } from 'express';
import { Review } from '../../models/reviewModel';

export const newReview = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?.id;

  const review = Review.build({
    course: req.body.course,
    user: userId!,
    rating: req.body.rating,
    review: req.body.review,
  });

  await review.save();
  res.status(200).json({ review });
};
