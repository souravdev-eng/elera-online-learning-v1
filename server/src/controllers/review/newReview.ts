import { NextFunction, Request, Response } from 'express';
import { Review } from '../../models/reviewModel';

export const newReview = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.course) req.body.course = req.params.courseId;
  if (!req.body.user) req.body.user = req.user?.id;

  const review = Review.build({
    course: req.body.course,
    user: req.body.user,
    rating: req.body.rating,
    review: req.body.review,
  });

  await review.save();
  res.status(200).json({ review });
};
