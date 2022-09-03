import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

import { app, client } from './app';

const start = async () => {
  // if (!process.env.STRIPE_KEY) {
  //   throw new Error('Stripe key not found');
  // }

  try {
    await mongoose.connect(process.env.DB_URL!, {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    });
    console.log('Connected to MongoDB');

    // client.on('error', (err) => console.log('Redis Client Error', err));
    // client.connect().then(() => console.log('Redis contented.....'));
  } catch (error: any) {
    console.log(error.message);
  }
  app.listen(process.env.PORT || 4000, () =>
    console.log(`App is running PORT ${process.env.PORT}`)
  );
};

start();
