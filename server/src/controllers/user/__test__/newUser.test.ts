import request from 'supertest';
import { app } from '../../../app';

it('should return 201 after successfully create a user', async () => {
  await request(app)
    .post('/api/v1/user/sign-up')
    .send({
      email: 'test@gmail.com',
      password: 'Test1234$',
    })
    .expect(201);
});
