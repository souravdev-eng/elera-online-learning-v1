import request from 'supertest';
import { app } from '../../../app';

const updatedUser = {
  phoneNumber: '7718300124',
  fullName: 'Updated full name',
};

it('should update user data successfully if user login', async () => {
  const res = await global.signIn();
  const data = await request(app)
    .patch(`/api/v1/user/update-user-profile/:${res.user.id}`)
    .set('Authorization', `Bearer ${res.token}`)
    .send(updatedUser);

  expect(data.statusCode).toEqual(200);
  expect(data.body.user.phoneNumber).toEqual(updatedUser.phoneNumber);
  expect(data.body.user.fullName).toStrictEqual(updatedUser.fullName);
});

it('should return 400 if user does not login', async () => {
  const res = await global.signIn();
  await request(app)
    .patch(`/api/v1/user/update-user-profile/:${res.user.id}`)
    .send(updatedUser)
    .expect(400);
});
