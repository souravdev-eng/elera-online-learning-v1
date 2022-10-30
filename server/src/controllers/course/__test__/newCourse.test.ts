import request from 'supertest';
import { app } from '../../../app';

it('should return 201 after success fully create a new course', async () => {
  const { creator, token } = await global.creatorSignIn();
  const res = await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Test course',
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      price: 500,
      originalPrice: 600,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.id,
    });
  expect(res.statusCode).toEqual(201);
  expect(creator.role).toStrictEqual('creator');
});

it('should return 400 if the user role is not creator before creating new course', async () => {
  const user = await global.signIn();
  const res = await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${user.token}`)
    .send({
      title: 'Test course',
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      price: 500,
      originalPrice: 600,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: user.user.id,
    });
  expect(res.statusCode).toEqual(400);
  expect(user.user.role).toStrictEqual('student');
});

it('should return 400 if creator did not login first', async () => {
  const { creator } = await global.creatorSignIn();
  await request(app)
    .post('/api/v1/course')
    .send({
      title: 'Test course',
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      price: 500,
      originalPrice: 600,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.id,
    })
    .expect(400);
});

it('should return 400 if creator did not provide required property for a new course', async () => {
  const { creator, token } = await global.creatorSignIn();

  await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${token}`)
    .send({
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      originalPrice: 600,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.id,
    })
    .expect(400);
});

it('should return 400 if course price bellow 299 & greater than 1000000', async () => {
  const { creator, token } = await global.creatorSignIn();
  await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Test course',
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      price: 288,
      originalPrice: 10000001,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.id,
    })
    .expect(400);
});

it('should return 400 if course price is grater than original price', async () => {
  const { creator, token } = await global.creatorSignIn();
  await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Test course',
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      price: 499,
      originalPrice: 399,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.id,
    })
    .expect(400);
});

it('should return 400 if user role not creator', async () => {
  const creator = await global.signIn();
  await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${creator.token}`)
    .send({
      title: 'Test course',
      aboutCourse: 'Some dummy text',
      durationHours: 1,
      lessons: { title: 'test', videos: [{ title: 'Test title', videoUrl: 'http://dummy' }] },
      preRequisite: ['Test'],
      price: 299,
      originalPrice: 499,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.user.id,
    })
    .expect(400);
});
