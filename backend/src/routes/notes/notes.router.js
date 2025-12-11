import NoteService from '../../services/notes/NoteService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';

const router = express.Router();
const noteService = new NoteService();

/**
 * メモ新規登録
 */
router.post('/', authenticate, async (req, res, next) => {
  try {
    const userId = req.jwtPayload.id;
    const { title, content } = req.body;

    let body = await noteService.createNote(userId, { title, content });

    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

/**
 * メモ一覧取得
 */
router.get('/', authenticate, async (req, res, next) => {
  try {
    const userId = req.jwtPayload.id;
    let body = await noteService.getNoteList(userId);

    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

export default router;
