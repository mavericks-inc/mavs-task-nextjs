import express from 'express';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import articlesRouter from './articles/articles.router.js';
import notesRouter from './notes/notes.router.js';
const router = express.Router();

// ルーティング設定
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.use('/notes', notesRouter);

export default router;
