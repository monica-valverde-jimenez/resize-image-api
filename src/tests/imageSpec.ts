import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Image endpoint responses', () => {
  const fileName = 'santamonica.jpg';

  it('get api/image/:filename with status code 200', async () => {
    const response = await request.get(`/api/images/${fileName}`);
    expect(response.status).toBe(200);
  });

  it('get api/image/:filename params with status code 200', async () => {
    const response = await request.get(
      `/api/images/${fileName}?width=200&height=100`
    );
    expect(response.status).toBe(200);
  });

  it('get api/image/ status code 404', async () => {
    const response = await request.get(`/api/images/`);
    expect(response.status).toBe(404);
  });

  it('get api/image/:filename status code 404', async () => {
    const response = await request.get(`/api/images/notFound`);
    expect(response.status).toBe(404);
  });
});
