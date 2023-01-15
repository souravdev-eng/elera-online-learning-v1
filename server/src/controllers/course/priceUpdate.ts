import { NextFunction, Request, Response } from 'express';
import { admin } from '../../firebase/firebase.config';
import { Course, User } from '../../models';

const notification_options = {
  priority: 'high',
  timeToLive: 60 * 60 * 24,
};

export const updateCoursePrice = async (req: Request, res: Response, next: NextFunction) => {
  const options = notification_options;
  await Course.updateMany({ price: req.body.price });

  const message = {
    notification: {
      title: `Great deal for today`,
      body: `Now you can grow your skill at only for ${req.body.price}`,
    },
  };

  admin
    .messaging()
    .sendToDevice(req.user.fcmToken!, message, options)
    .then((response) => {
      res.status(200).send('Notification sent successfully');
    })
    .catch((error) => {
      console.log(error);
    });

  res.status(200);
};
