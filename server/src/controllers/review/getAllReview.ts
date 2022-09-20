import { NextFunction, Request, Response } from 'express';
import { Review } from '../../models/reviewModel';

export const getAllReviews = async (req: Request, res: Response, next: NextFunction) => {
  const review = await Review.find();

  res.status(200).json({
    length: review.length,
    data: { review },
  });
};
