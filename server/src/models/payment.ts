import mongoose from 'mongoose';

interface PaymentAttrs {
  order: mongoose.Types.ObjectId;
  stripeId: string;
}

interface PaymentDocument extends mongoose.Document {
  order: mongoose.Types.ObjectId;
  stripeId: string;
}

interface PaymentModel extends mongoose.Model<PaymentDocument> {
  build(attrs: PaymentAttrs): PaymentDocument;
}

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Types.ObjectId,
      ref: 'Order',
    },
    stripeId: {
      type: String,
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

paymentSchema.statics.build = (attrs: PaymentAttrs) => {
  return new Payment(attrs);
};

const Payment = mongoose.model<PaymentDocument, PaymentModel>('Payment', paymentSchema);

export { Payment };
