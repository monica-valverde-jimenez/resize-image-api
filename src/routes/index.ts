import express from 'express';
import images from './api/images';
import placeholder from './api/placeholder';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Main api Route');
});

routes.use('/images', images);
routes.use('/sample', placeholder);

export default routes;
