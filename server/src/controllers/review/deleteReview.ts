import { NextFunction, Request, Response } from 'express';
import { Review } from '../../models/reviewModel';
import { NotFoundError } from '../../errors';

export const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  const review = await Review.findByIdAndDelete({ id: req.params.id });

  if (!review) {
    return next(new NotFoundError('No review found with this id!'));
  }

  await review.save();
  res.status(200).json({ review: 'Review deleted' });
};
