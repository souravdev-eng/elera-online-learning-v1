import mongoose from 'mongoose';

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

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'fullName',
  });

  next();
});

reviewSchema.statics.build = function (attars: ReviewAttars) {
  return new Review(attars);
};

const Review = mongoose.model<ReviewDoc, ReviewModel>('Review', reviewSchema);

export { Review };
