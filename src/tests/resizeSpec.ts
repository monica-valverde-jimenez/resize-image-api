import { Dimension } from '../ts/interfaces/Dimension';
import resize from '../utilities/resize';

describe('Resize function', () => {
  const fileName = 'santamonica.jpg';

  it('expect to return an image resize without properties', async () => {
    const image = await resize(fileName, {} as Dimension);
    expect(image).toEqual(jasmine.any(Buffer));
  });

  it('expect to return an image resize with width property', async () => {
    const image = await resize(fileName, { width: 200 } as Dimension);
    expect(image).toEqual(jasmine.any(Buffer));
  });

  it('expect to return an image resize with height property', async () => {
    const image = await resize(fileName, { height: 200 } as Dimension);
    expect(image).toEqual(jasmine.any(Buffer));
  });

  it('expect to return an image resize with width and height properties', async () => {
    const image = await resize(fileName, {
      width: 100,
      height: 100
    } as Dimension);
    expect(image).toEqual(jasmine.any(Buffer));
  });

  it('expect to return an error when file not found', async () => {
    const image = await resize('nofile', { width: 100 } as Dimension);
    expect(image).toBeFalse();
  });
});
