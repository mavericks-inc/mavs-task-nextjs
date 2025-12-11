import db from "../../models/index.js";

// クラス
class NoteService {
  /**
   * メモ作成
   * @param user_id
   */
  async createNote(user_id, body) {
    return db.Notes.create({
      user_id: user_id,
      title: body.title,
      content: body.content,
    });
  }
  /**
   * メモ一覧取得
   * @param user_id
   * @return メモ一覧
   */
  async getNoteList(user_id) {
    const noteList = await db.Notes.findAll({ where: { user_id: user_id }});
    return noteList;
  }
  /**
   * メモ詳細取得
   * @param user_id, note_id
   * @return メモ情報（1つ）
   */
  async getNote(user_id, note_id) {
    const rows = await db.Notes.findOne({ where: { id: note_id, user_id: user_id }});
    const resData = {
      id: rows.dataValues.id,
      user_id: rows.dataValues.user_id,
      title: rows.dataValues.title,
      content: rows.dataValues.content,
      created_at: rows.dataValues.created_at,
      updated_at: rows.dataValues.updated_at,
    };
    return resData;
  }
}

export default NoteService;
