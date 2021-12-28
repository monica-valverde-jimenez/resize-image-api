import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const url = req.url;
  const now = new Date();
  console.log(`Info: ${now.toUTCString()} | ${url}`);
  next();
};

export default logger;
