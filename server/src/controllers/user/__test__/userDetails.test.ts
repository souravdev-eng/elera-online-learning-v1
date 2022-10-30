import request from 'supertest';
import { app } from '../../../app';

it('should return current user if user is logged in', async () => {
  const user = await global.signIn();
  const currentUser = await request(app)
    .get('/api/v1/user/me')
    .set('Authorization', `Bearer ${user.token}`);

  expect(currentUser.statusCode).toEqual(200);
  expect(currentUser.body.user.email).toBeDefined();
  expect(currentUser.body.user.fullName).toBeDefined();
});

it('should return 400 if user did not login first', async () => {
  await request(app).get('/api/v1/user/me').expect(400);
});

it('should return 404 if user does not exist anymore', async () => {
  const user = await request(app)
    .post('/api/v1/user/login')
    .send({ email: 'test@gmail.com', password: '123456' });

  await request(app)
    .get('/api/v1/user/me')
    .set('Authorization', `Bearer ${user.body.token}`)
    .expect(404);
});
