import express from 'express';
import get from 'lodash/get';
import file from '../../utilities/file';
import logger from '../../utilities/logger';
import resize from '../../utilities/resize';

const images = express.Router();
const contentType = 'image/jpeg';

images.get('/:filename', logger, async (req, res) => {
  const { filename } = req.params;
  const width = parseInt(get(req, ['query', 'width'], '0') as string);
  const height = parseInt(get(req, ['query', 'height'], '0') as string);
  const dimensions = { width, height };
  const cachedImage = (await file.readImage(filename, dimensions)) as unknown;
  let resizeImg = Buffer.from('');
  if (cachedImage) {
    resizeImg = Buffer.from(cachedImage as string, 'binary');
    res.contentType(contentType);
    res.send(resizeImg);
  } else {
    const resizeBuffer = (await resize(filename, dimensions)) as string;
    if (resizeBuffer) {
      resizeImg = Buffer.from(resizeBuffer, 'binary');
      (width || height) && file.saveImage(filename, dimensions, resizeImg);
      res.contentType(contentType);
      res.send(resizeImg);
    } else {
      res.sendStatus(404);
    }
  }
});

export default images;
