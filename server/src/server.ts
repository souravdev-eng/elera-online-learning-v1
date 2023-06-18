import { Socket } from 'socket.io';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createServer } from 'http';
dotenv.config({ path: 'config.env' });

import { client, app } from './app';

const httpServer = createServer(app);
import { Server } from 'socket.io';

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not found');
  }

  if (!process.env.JWT_SECRET_EXPIRY) {
    throw new Error('JWT_SECRET_EXPIRY is not found');
  }
  io.on('connection', (socket: Socket) => {
    console.log('Socket connected');

    socket.on('chat', (payload) => {
      console.log(payload);
      io.emit('chat', payload);
    });
  });

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
  httpServer.listen(process.env.PORT || 4000, () =>
    console.log(`App is running PORT ${process.env.PORT}`)
  );
};

start();
