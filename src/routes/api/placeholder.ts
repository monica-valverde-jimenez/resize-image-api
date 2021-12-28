import express from 'express';
import logger from '../../utilities/logger';
import fs from 'fs';
const placeholder = express.Router();

placeholder.get(
  '/',
  logger,
  (req: express.Request, res: express.Response): void => {
    fs.readFile('./pages/placeholder.html', (error, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    });
  }
);

export default placeholder;
