import mongoose from 'mongoose';
import { app, client } from './app';

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!, {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    });
    console.log('Connected to mongodb...');

    client.on('error', (err) => console.log('Redis Client Error', err));
    client.connect().then(() => console.log('Redis contented.....'));
  } catch (error: any) {
    console.log(error.message);
  }
  app.listen(process.env.PORT, () => console.log(`App is running PORT --> ${process.env.PORT}`));
};

start();
