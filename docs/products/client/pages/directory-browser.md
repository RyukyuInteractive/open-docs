---
features:
  - view-document-list
  - delete-document
---

# ディレクトリブラウザページ

ディレクトリ構造をツリービューで表示し、ドキュメントを一覧・管理するためのメインページ。

## UI/UX

- サイドバー：ディレクトリツリービュー
  - 階層構造を展開・折りたたみ可能
  - ディレクトリアイコンとファイル数表示
  - 選択状態のハイライト
- メインエリア：ドキュメント一覧テーブル
  - スキーマに基づくカラム構成
  - ソート・フィルタリング機能
  - ページネーション
- ヘッダー：パンくずナビゲーション
  - 現在位置の表示
  - 上位階層への遷移リンク
- アクションボタン：
  - 「新規作成」：新しいドキュメントの作成
  - 「一括操作」：複数選択での操作
  - 「表示設定」：カラムの表示/非表示切り替え

## 補足

- レスポンシブデザインでモバイル対応
- キーボードショートカット対応
- ドラッグ&ドロップでのファイル移動（将来実装予定）
- リアルタイム更新機能
- 検索・フィルタリングの状態保持