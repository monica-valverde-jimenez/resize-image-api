import { Request, Response } from 'express';

import logger from '../utilities/logger';

describe('Logger function', () => {
  const next = () => {};
  beforeEach(function () {
    spyOn(console, 'log');
  });

  it('expect console.log to be called', () => {
    const mockRequest = {
      url: 'api/test'
    };
    logger(mockRequest as Request, {} as Response, next);
    expect(console.log).toHaveBeenCalled();
  });
});
