import request from 'supertest';
import { app } from '../../../app';

it.todo('Test the password encrypted or not');

it('should return 201 after successfully create a user', async () => {
  await request(app)
    .post('/api/v1/user/signup')
    .send({ email: 'test@gmail.com', password: 'Test1234$', fullName: 'Test' })
    .expect(201);
});

it('after register a user jwt token must be there', async () => {
  const res = await request(app)
    .post('/api/v1/user/signup')
    .send({ email: 'test@gmail.com', password: 'Test1234$', fullName: 'Test' });
  expect(res.body.token).toBeDefined();
});

it('should return 400 if user does not provide all credential properly', async () => {
  await request(app)
    .post('/api/v1/user/signup')
    .send({ email: 'test@gmail.com', fullName: 'Test' })
    .expect(400);
  await request(app)
    .post('/api/v1/user/signup')
    .send({ password: '123456', fullName: 'Test' })
    .expect(400);
  await request(app).post('/api/v1/user/signup').send({ password: '123' }).expect(400);
});

it('should return 400 if email address already exists', async () => {
  await request(app)
    .post('/api/v1/user/signup')
    .send({ email: 'test@gmail.com', password: 'Test1234$', fullName: 'Test' })
    .expect(201);

  await request(app)
    .post('/api/v1/user/signup')
    .send({ email: 'test@gmail.com', password: 'Test1234$', fullName: 'Test' })
    .expect(400);
});
