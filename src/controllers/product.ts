import { Request, Response } from 'express';

const getAllProductController = (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
};

export { getAllProductController };
