'use strict';
import dotenv from 'dotenv';
import process from 'process';
import Sequelize from 'sequelize';
import config from '../config.js';
import Users from './users.js';
import Articles from './articles.js';
// .envファイルから環境変数をロード
dotenv.config();

// 環境変数からデータベース接続URLを取得
const dbUrl = process.env.DATABASE_URL;

const db = {};

let sequelize;
sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // SSLを必須に設定
      rejectUnauthorized: false, // セルフサイン証明書を使用している場合、これをfalseにする必要があります
    },
  },
  logging: false, // ログの表示を無効にする（任意）
});

db['Users'] = Users(sequelize, Sequelize.DataTypes);
db['Articles'] = Articles(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
