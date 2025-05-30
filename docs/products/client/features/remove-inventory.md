---
milestone: 2028.01.01
is-done: false
priority: 0
---

# 出庫処理を行う

在庫管理者が商品の出庫（販売、廃棄など）を記録する機能。

1. 在庫管理者がメニューから「出庫処理」を選択する
2. システムが出庫登録フォームを表示する
3. 在庫管理者が以下の情報を入力する
   - 商品（必須）：商品コードまたは商品名で検索して選択
   - 倉庫（必須）：出庫元の倉庫を選択
   - 数量（必須）：出庫する数量を入力
   - 取引日時（必須）：デフォルトは現在日時
   - 取引理由（必須）：「販売」「廃棄」「在庫調整」「移動出庫」などから選択
   - 取引先（任意）：販売先などの取引先を選択
   - ロット番号（任意）：特定のロットから出庫する場合に選択
   - 単価（任意）：出庫時の単価を入力
   - 備考（任意）：補足情報を入力
4. 在庫管理者が「登録」ボタンをクリックする
5. システムが入力内容を検証する
6. 問題がなければ、システムが出庫情報を記録し、在庫数量を更新する
7. システムが「出庫処理が正常に完了しました」というメッセージを表示する
8. システムが在庫一覧画面または出庫履歴画面に移動する

## 代替フロー

### 在庫数量が不足している場合

1. システムが在庫数量を検証する
2. 在庫数量が出庫数量より少ない場合、システムは「在庫数量が不足しています」というエラーメッセージを表示する
3. 在庫管理者は出庫数量を修正するか、別の倉庫を選択するか、または処理をキャンセルする

### バーコードスキャナーで商品を登録する場合

1. 在庫管理者が商品フィールドにカーソルを置く
2. 在庫管理者がバーコードスキャナーで商品のバーコードをスキャンする
3. システムがバーコードから商品を識別し、自動的に商品情報を入力する
4. 在庫管理者は残りの必要情報を入力して処理を続行する

### 複数商品を一括で出庫する場合

1. 在庫管理者が「複数商品出庫」ボタンをクリックする
2. システムが複数商品出庫フォームを表示する
3. 在庫管理者が複数の商品について、それぞれ商品ID、数量などを入力する
4. 共通情報（倉庫、取引日時、取引理由など）を一度入力する
5. 在庫管理者が「一括登録」ボタンをクリックする
6. システムが入力内容を検証し、問題がなければ全ての商品の出庫処理を実行する
