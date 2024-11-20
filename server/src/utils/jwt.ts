import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { User } from '../types';

export const generateToken = (user: User): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    env.JWT_SECRET,
    {
      expiresIn: env.JWT_EXPIRES_IN,
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};