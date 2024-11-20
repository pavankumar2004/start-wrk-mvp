import { Request, Response } from 'express';
import { pool } from '../config/database';
import { hashPassword, verifyPassword } from '../utils/password';
import { generateToken } from '../utils/jwt';
import { UserInput } from '../types';

export const signup = async (req: Request, res: Response) => {
  const userData: UserInput = req.body;

  try {
    const existingUser = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [userData.email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await hashPassword(userData.password);

    const result = await pool.query(
      `INSERT INTO users (
        email, password_hash, full_name, business_name,
        business_address, phone_number, timezone
      ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        userData.email,
        hashedPassword,
        userData.full_name,
        userData.business_name,
        userData.business_address,
        userData.phone_number,
        userData.timezone,
      ]
    );

    const user = result.rows[0];
    const token = generateToken(user);

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        business_name: user.business_name,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const validPassword = await verifyPassword(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        business_name: user.business_name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
