import { Dimension } from '../ts/interfaces/Dimension';
import sharp from 'sharp';

const imagePath = './images';

const resize = async (
  filename: string,
  params: Dimension
): Promise<unknown> => {
  const { width, height } = params;
  const imageSettings = {
    ...(width > 0 ? { width } : null),
    ...(height > 0 ? { height } : null)
  };
  return sharp(`${imagePath}/${filename}`)
    .resize(imageSettings)
    .toBuffer()
    .then((data: Buffer) => data)
    .catch(() => false);
};

export default resize;
