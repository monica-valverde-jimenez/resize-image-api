import { promises as fsPromises } from 'fs';
import path from 'path';

import { Dimension } from '../ts/interfaces/Dimension';
const imageDir = './images';

const getFileName = (fileName: string, params: Dimension): string =>
  `${path.parse(fileName).name}-${params.width}x${params.height}${
    path.parse(fileName).ext
  }`;

const saveImage = async (
  fileName: string,
  params: Dimension,
  buffer: Buffer
): Promise<unknown> => {
  const cachedFile = getFileName(fileName, params);
  const imagePath = `${imageDir}/cache/${cachedFile}`;
  return fsPromises.writeFile(`${imagePath}`, buffer);
};

const readImage = async (
  fileName: string,
  params: Dimension
): Promise<unknown> => {
  if (params.width || params.height) {
    const cachedFile = getFileName(fileName, params);
    const imagePath = `${imageDir}/cache/${cachedFile}`;
    return fsPromises
      .readFile(imagePath)
      .then((data) => data)
      .catch(() => false);
  } else {
    return Promise.resolve(false);
  }
};

export default { saveImage, readImage };
