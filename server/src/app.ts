import 'express-async-errors';
import './service/cache';

import { createClient } from 'redis';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { userRouter } from './routes/user.routes';
import { creatorRouter } from './routes/creator.routes';
import { courseRouter } from './routes/course.routes';
import { orderRouter } from './routes/order.routes';
import { reviewRoute } from './routes/review.routes';
import { errorHandling } from './middleware/errorHandling';

const app = express();
const client = createClient({
      password: process.env.REDIS_PASSWORD! as any,
    socket: {
        host: process.env.REDIS_HOST! as any,
        port: process.env.REDIS_PORT as any
    }
});

app.use(express.json());
app.use(cors());

// if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
// }

app.use('/api/v1/user', userRouter);
app.use('/api/v1/creator', creatorRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/reviews', reviewRoute);

app.all('*', (req, res, next) => {
  res.status(404).json({ message: `${req.originalUrl} not found` });
});

app.use(errorHandling);

export { app, client };
