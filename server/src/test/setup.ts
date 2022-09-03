import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import { app } from '../app';

declare global {
  function signIn(): Promise<any>;
}

let mongo: any;

beforeAll(async () => {
  jest.clearAllMocks();
  process.env.JWT_SECRET = 'kjdhskcvhdkjs';
  process.env.JWT_SECRET_EXPIRY = '90d';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri);
}, 120_000);

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
}, 120_000);

global.signIn = async () => {
  const user = {
    fullName: 'Test',
    email: 'test@gmail.com',
    password: '123456',
  };
  const response = await request(app).post('/api/v1/user/signup').send(user).expect(201);

  return response.body;
};
