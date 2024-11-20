import { Router } from 'express';
import { signup, login } from '../controllers/auth';
import { validateSignup, validateLogin } from '../middleware/validation';

const router = Router();

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

export default router;