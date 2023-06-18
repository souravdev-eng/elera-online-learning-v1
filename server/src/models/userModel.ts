import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface UserAttars {
  email: string;
  password: string;
  fullName: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  fullName: string;
  nickName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  dialCode: string;
  gender: 'male' | 'female' | 'others';
  profileImage: string;
  role: string;
  correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
  bookMarks: string[];
  fcmToken: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build: (attars: UserAttars) => UserDoc;
}

const userSchema = new mongoose.Schema(
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
    phoneNumber: {
      type: String,
    },
    bookMarks: {
      type: Array,
      default: [],
    },
    dialCode: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
    },
    profileImage: {
      type: String,
      default: 'https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000',
    },
    dateOfBirth: {
      type: Date,
    },
    role: {
      type: String,
      default: 'student',
    },
    fcmToken: {
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

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.statics.build = function (attars: UserAttars) {
  return new User(attars);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
