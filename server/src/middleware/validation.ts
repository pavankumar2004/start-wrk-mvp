import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validateSignup = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    full_name: z.string().min(1),
    business_name: z.string().min(1),
    business_address: z.string().optional(),
    phone_number: z.string().optional(),
    timezone: z.string().optional(),
  });

  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
};

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid input', error });
  }
};
