import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Index endpoint responses', () => {
  it('expect status code', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
