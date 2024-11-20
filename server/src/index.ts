import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { initDatabase } from './config/database';
import authRoutes from './routes/auth';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Initialize database and start server
initDatabase()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
