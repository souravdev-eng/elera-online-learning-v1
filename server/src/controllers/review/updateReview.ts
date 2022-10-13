import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../errors';
import { Review } from '../../models/reviewModel';

export const updateReview = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const review = await Review.findByIdAndUpdate(
    id,
    {
      rating: req.body.rating,
      review: req.body.review,
    },
    { runValidators: true, new: true }
  );

  if (!review) {
    return next(new NotFoundError('No review found with this id!'));
  }

  await review.save();
  res.status(200).json({ review });
};
