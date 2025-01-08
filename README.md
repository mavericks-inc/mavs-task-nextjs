# Next.js + Express.js のベースプロジェクトです。

## 環境構築方法

Node のバージョンは 18.17.0 です。  
Volta をインストールしている場合は自動でバージョンが切り替わります。

### リポジトリのフォーク

リポジトリの右上にあるフォークボタンをクリック

https://user-images.githubusercontent.com/51960141/232392797-4d1946b2-4f82-4363-9e00-b72be8e4eefc.mov

```
git clone git@github.com:ユーザー名/mavs-task-nextjs.git
cd mavs-task-nextjs
```

### パッケージインストール

フロントエンドのパッケージインストール&環境変数追加

```
cd frontend
npm install
cp .env.example .env
```

バックエンドのパッケージインストール

```
cd ../
cd backend
npm install
```

### Docker を起動（ルートディレクトリで実行）

Docker Desktop を起動しておきます。

```
cd ../
docker compose up --build
```

ターミナルにこのように表示されていれば問題なく動作しています。
![image](https://user-images.githubusercontent.com/51960141/232393291-f191f501-128b-4b95-8508-d3c2d39f3ea1.png)

※postgresql には初期構築時にテストデータが投入されます。

### 動作確認

http://localhost:3000

このように表示できていれば ok です！

<img width="1439" alt="image" src="https://github.com/mavericks-inc/mavs-task/assets/51960141/323534f0-acc1-4398-b5dc-af8616ef0e71">

## ログイン機能について

| メールアドレス  | パスワード |
| --------------- | ---------- |
| sample@test.com | password   |

http://localhost:3000/signin にアクセスし、  
上記のメールアドレス、パスワードを入力しログインボタンクリック  
右上にメールアドレスが表示されていればログイン処理が正常に動作しています！

https://github.com/mavericks-inc/mavs-task/assets/51960141/6c5e75da-8551-47f7-88bf-eb3e702a9405

## データベースクライアントツール

pgAdmin を使用してテーブルを見ることができます。

### アクセス方法

http://localhost

| メールアドレス | パスワード |
| -------------- | ---------- |
| root@test.com  | root       |

### データベース登録

Create Server から下記内容を設定する
| タブ | 設定項目 | 設定値 |
| ---------- | -------------------- | -------- |
| General | Name | postgres |
| Connection | Host | postgres |
| | Port | 5432 |
| | Maintenance Database | postgres |
| | Username | root |
| | Password | root |
