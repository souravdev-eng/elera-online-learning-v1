import mongoose from 'mongoose';

enum CourseCategory {
  WebDevelopment = 'Web Development',
  Programing = 'Programing',
  UIUX = 'UI/UX',
  Design = '3D Design',
  WebDesign = 'Web Design',
  MobileDevelopment = 'Mobile Development',
  Photography = 'Photography',
  Illustration = 'Illustration',
  Animation = 'Animation',
  DevOps = 'DevOps',
}

interface CourseAttars {
  title: string;
  image: string;
  introVideo: string;
  category: CourseCategory;
  originalPrice: number;
  price: number;
  creatorId: string;
  durationHours: number;
  lessons: { title: string; videos: [{ title: string; videoUrl: string }] }[];
  aboutCourse: string;
  preRequisite: string[];
}

interface CourseDoc extends mongoose.Document {
  title: string;
  introVideo: string;
  category: CourseCategory;
  ratingAvg: number;
  totalReview: number;
  totalStudent: number;
  originalPrice: number;
  price: number;
  creatorId: string;
  durationHours: number;
  lessons: { title: string; videos: [{ title: string; videoUrl: string }] }[];
  aboutCourse: string;
  preRequisite: string[];
  image: string;
}

interface CourseModel extends mongoose.Model<CourseDoc> {
  build: (attars: CourseAttars) => CourseDoc;
}

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    introVideo: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(CourseCategory),
    },
    ratingAvg: {
      type: Number,
      default: 0,
      set: (val: number) => Math.round(val * 10) / 10,
    },
    totalReview: {
      type: Number,
      default: 0,
    },
    totalStudent: {
      type: Number,
      default: 0,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      ref: 'Creator',
      required: true,
    },
    durationHours: {
      type: Number,
      required: true,
    },
    lessons: {
      type: Array({
        title: String,
        videos: [{ title: String, videoUrl: String }],
      }),
      required: true,
    },
    aboutCourse: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    preRequisite: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

courseSchema.index({ ratingAvg: 1 });

courseSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'course',
  localField: '_id',
});

courseSchema.statics.build = function (attars: CourseAttars) {
  return new Course(attars);
};

const Course = mongoose.model<CourseDoc, CourseModel>('Course', courseSchema);

export { Course };
