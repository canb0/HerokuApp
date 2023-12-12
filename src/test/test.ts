// test/test.ts
import * as chai from 'chai';
import supertest from 'supertest';
import app from '../index'; // Assuming your Express app instance is exported from index.ts
const expect = chai.expect;
const request = supertest(app);


describe('GET /', () => {
  it('should return "Hello, this is your TypeScript web service!"', async () => {
    const res = await request.get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello, this is your TypeScript web service!');
  });
});

describe('GET /users', () => {
  it('should return a JSON object with users', async () => {
    const res = await request.get('/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('users');
  });
});

describe('GET /users/:id', () => {
  it('should return a user by ID', async () => {
    const res = await request.get('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('user');
  });

  it('should return a 400 error for an invalid ID', async () => {
    const res = await request.get('/users/invalidId');
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('error');
  });
});
