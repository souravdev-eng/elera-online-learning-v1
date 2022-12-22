import mongoose from 'mongoose';
import { OrderStatus } from '../utils/OrderType';
import { Course } from './courseModel';

interface OrderAttars {
  course: mongoose.Types.ObjectId;
  user: string;
  price: number;
}

interface OrderDocument extends mongoose.Document {
  course: string;
  user: string;
  price: number;
  status: OrderStatus;
}

interface OrderModel extends mongoose.Model<OrderDocument> {
  build(attrs: OrderAttars): OrderDocument;
  updateStudent: (course: any) => Promise<void>;
}

const orderSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: OrderStatus.PENDING,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

orderSchema.statics.updateStudent = async function (course: string) {
  const stats = await this.aggregate([
    {
      $match: { course },
    },
    {
      $group: {
        _id: '$course',
        nStudent: { $sum: 1 },
      },
    },
  ]);

  await Course.findByIdAndUpdate(course, {
    totalStudent: stats[0].nStudent,
  });
};

orderSchema.pre('save', async function (next) {
  if (this.status !== OrderStatus.COMPLETED) return next();
  // @ts-ignore
  await this.constructor.updateStudent(this.course);
  next();
});

orderSchema.statics.build = (attrs: OrderAttars) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDocument, OrderModel>('Order', orderSchema);

export { Order };
