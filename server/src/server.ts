import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

import { app, client } from './app';

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not found');
  }

  if (!process.env.JWT_SECRET_EXPIRY) {
    throw new Error('JWT_SECRET_EXPIRY is not found');
  }

  try {
    await mongoose.connect(process.env.DB_URL!, {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    });
    console.log('Connected to MongoDB');

    client.on('error', (err) => console.log('Redis Client Error...', err));
    client.connect().then(() => console.log('Redis contented...'));
  } catch (error: any) {
    console.log(error);
  }
  app.listen(process.env.PORT || 4000, () =>
    console.log(`App is running PORT ${process.env.PORT}`)
  );
};

start();
