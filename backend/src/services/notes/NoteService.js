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
   * @return ランダム値
   */
  async getNoteList(user_id) {
    const noteList = await db.Notes.findAll({ where: { user_id: user_id }});
    return noteList;
  }
  /**
   * メモ詳細取得
   * @param user_id, note_id
   * @return ランダム値
   */
  async getNote(user_id, note_id) {
    return {};
  }
}

export default NoteService;
