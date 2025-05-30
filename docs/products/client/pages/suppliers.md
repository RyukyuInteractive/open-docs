---
features:
---

# 取引先管理ページ

仕入先・販売先の情報を登録、編集、削除するためのページ。

## UI/UX

- テーブルビュー：取引先情報を表形式で表示
  - 列：取引先コード、取引先名、区分、電話番号、担当者、ステータス
  - ソート機能：各列でのソートが可能
  - ページネーション：大量のデータを複数ページに分けて表示
- 検索・フィルタリング機能：
  - キーワード検索：取引先コード、取引先名で検索
  - 区分フィルター：仕入先/販売先/両方でフィルタリング
  - ステータスフィルター：アクティブ/非アクティブでフィルタリング
- 取引先詳細フォーム：
  - 基本情報タブ：取引先コード、名称、区分、住所、連絡先など
  - 担当者タブ：複数の担当者情報を管理
  - 取引条件タブ：支払条件、納期、発注方法などの設定
  - 履歴タブ：過去の取引履歴
- アクションボタン：
  - 「新規登録」：新しい取引先の作成
  - 「編集」：選択した取引先の編集
  - 「削除」：選択した取引先の削除
  - 行アクション：各取引先の詳細表示、編集、削除

## 補足

- 取引先との取引履歴グラフ：月次または年次の取引金額推移
- 地図統合：取引先の住所を地図上に表示
- 取引先データのインポート/エクスポート機能
- 取引先ごとの特別価格設定機能
- 取引先評価システム：取引実績に基づく評価
- 取引先カテゴリ分け：A/B/Cランクなどでの分類
- 最終取引日の表示：長期間取引のない取引先の識別
- コミュニケーション履歴：メール、電話などの連絡履歴の記録
