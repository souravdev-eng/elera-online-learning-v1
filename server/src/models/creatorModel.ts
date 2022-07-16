import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface CreatorAttars {
  email: string;
  password: string;
  phoneNumber: string;
  dialCode: string;
}

interface CreatorDoc extends mongoose.Document {
  email: string;
  password: string;
  fullName: string;
  nickName: string;
  bio: string;
  dateOfBirth: Date;
  phoneNumber: string;
  dialCode: string;
  gender: 'male' | 'female' | 'others';
  profileImage: string;
  totalStudent: number;
  totalCourse: number;
  totalReviews: number;
  website: string;
  role: 'creator';
  correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
}

interface CreatorModel extends mongoose.Model<CreatorDoc> {
  build: (attars: CreatorAttars) => CreatorDoc;
}

const creatorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    nickName: {
      type: String,

      trim: true,
    },
    bio: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    dialCode: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
    },
    profileImage: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    role: {
      type: String,
      default: 'creator',
    },
    totalStudent: {
      type: Number,
      default: 0,
    },
    totalCourse: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    website: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);

creatorSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

creatorSchema.methods.correctPassword = async function (candidatePassword: string, userPassword: string) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

creatorSchema.statics.build = function (attars: CreatorAttars) {
  return new Creator(attars);
};

const Creator = mongoose.model<CreatorDoc, CreatorModel>('Creator', creatorSchema);

export { Creator };
