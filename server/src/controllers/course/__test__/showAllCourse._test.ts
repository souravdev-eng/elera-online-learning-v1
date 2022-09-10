import request from 'supertest';
import { app } from '../../../app';

it('should return 200 after successfully get all data', async () => {
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
      price: 500,
      originalPrice: 600,
      category: 'Programing',
      introVideo: 'http://dummy',
      image: 'http://dummy',
      creatorId: creator.id,
    })
    .expect(201);

  await request(app)
    .post('/api/v1/course')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Test course2',
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
    .expect(201);

  const res = await request(app).get('/api/v1/course/');
  console.log(res.body);
  // expect(res.body).toHaveLength(2);
});
