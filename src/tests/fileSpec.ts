import file from '../utilities/file';
import { Dimension } from '../ts/interfaces/Dimension';

describe('File function', () => {
  const fileName = 'santamonica.jpg';

  it('expect to read a file', async () => {
    spyOn(file, 'saveImage').and.returnValue(Promise.resolve(Buffer.from('')));
    const image = await file.saveImage(
      fileName,
      { width: 1, height: 1 } as Dimension,
      Buffer.from('')
    );
    expect(image).toEqual(jasmine.any(Buffer));
  });

  it('expect to write a file', async () => {
    spyOn(file, 'readImage').and.returnValue(Promise.resolve(Buffer.from('')));
    const image = await file.readImage(fileName, {
      width: 1,
      height: 1
    } as Dimension);
    expect(image).toEqual(jasmine.any(Buffer));
  });

  it('expect not to write a file', async () => {
    const image = await file.readImage(fileName, {} as Dimension);
    expect(image).toBeFalse();
  });
});
