import mongoose from 'mongoose';
import { OrderStatus } from '../utils/OrderType';

interface OrderAttars {
  course: mongoose.Types.ObjectId;
  user: string;
  price: number;
}

interface OrderDocument extends mongoose.Document {
  course: mongoose.Types.ObjectId;
  user: string;
  price: number;
  status: OrderStatus;
}

interface OrderModel extends mongoose.Model<OrderDocument> {
  build(attrs: OrderAttars): OrderDocument;
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

orderSchema.statics.build = (attrs: OrderAttars) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDocument, OrderModel>('Order', orderSchema);

export { Order };
