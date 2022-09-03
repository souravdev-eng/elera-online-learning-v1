import request from 'supertest';
import { app } from '../../../app';

const user = {
  fullName: 'Test',
  email: 'test@gmail.com',
  password: '123456',
};

it('should return 200 after user successfully login & check is the data match', async () => {
  await global.signIn();
  const res = await request(app)
    .post('/api/v1/user/login')
    .send({ email: 'test@gmail.com', password: '123456' });

  expect(res.statusCode).toEqual(200);
  expect(res.body.user.email).toEqual(user.email);
  expect(res.body.user.fullName).toEqual(user.fullName);
  expect(res.body.token).toBeDefined();
});

it('should return 400 if user provide wrong email & password', async () => {
  await global.signIn();
  await request(app)
    .post('/api/v1/user/login')
    .send({ email: 'test1@gmail.com', password: '123456' })
    .expect(400);

  await request(app)
    .post('/api/v1/user/login')
    .send({ email: 'test@gmail.com', password: '12345689' })
    .expect(400);
});

it('should return 400 if user does not provide email & password', async () => {
  await global.signIn();
  await request(app).post('/api/v1/user/login').send({ password: '123456' }).expect(400);
  await request(app).post('/api/v1/user/login').send({ email: 'test@gmail.com' }).expect(400);
});
