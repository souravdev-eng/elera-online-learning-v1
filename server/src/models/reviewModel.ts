import mongoose from 'mongoose';
import { Course } from './courseModel';

interface ReviewAttars {
  review: string;
  rating: number;
  user: string;
  course: string;
}

interface ReviewDoc extends mongoose.Document {
  review: string;
  rating: number;
  user: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  createdAt: string;
  updatedAt: string;
}

interface ReviewModel extends mongoose.Model<ReviewDoc> {
  calcAverage: (course: any) => Promise<void>;
  build: (attars: ReviewAttars) => ReviewDoc;
}

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: 'String',
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
      virtuals: true,
    },
  }
);

reviewSchema.index({ course: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'fullName',
  });

  next();
});

reviewSchema.statics.calcAverage = async function (course: string) {
  const stats = await this.aggregate([
    {
      $match: { course },
    },
    {
      $group: {
        _id: '$course',
        nRating: { $sum: 1 },
        ratingAvg: { $avg: '$rating' },
      },
    },
  ]);

  await Course.findByIdAndUpdate(course, {
    totalReview: stats[0].nRating,
    ratingAvg: stats[0].ratingAvg,
  });
};

reviewSchema.statics.build = function (attars: ReviewAttars) {
  return new Review(attars);
};

reviewSchema.post('save', function () {
  // @ts-ignore
  this.constructor.calcAverage(this.course);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  // @ts-ignore
  this.r = await this.findOne().clone();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  // @ts-ignore
  await this.r.constructor.calcAverage(this.r.course);
});

const Review = mongoose.model<ReviewDoc, ReviewModel>('Review', reviewSchema);

export { Review };
