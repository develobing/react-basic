import path from 'path';
import express from 'express';
import authRoutes from './auth.js';
import userRoutes from './users.js';
import todoRoutes from './todos.js';

const __dirname = path.resolve();
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/todos', todoRoutes);
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'api.html'));
});

export default router;
