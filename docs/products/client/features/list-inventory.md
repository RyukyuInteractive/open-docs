---
milestone: 2028.01.01
is-done: false
priority: 2
---

# 在庫一覧を表示する

在庫管理者が全ての在庫状況を一覧形式で確認できるようにする機能。

1. 在庫管理者がメニューから「在庫管理」を選択する
2. システムが全ての在庫情報を一覧で表示する
3. 在庫管理者は商品コード、商品名、倉庫、現在の在庫数量などの情報を確認できる
4. 在庫管理者は一覧を商品名、倉庫、在庫数量などでソートできる
5. 在庫管理者は商品名、商品コード、倉庫などで検索・フィルタリングできる
6. 在庫管理者は在庫量が最小在庫数を下回っている商品を色付きで表示できる
7. 在庫管理者は在庫量が最大在庫数を超えている商品を色付きで表示できる
8. 在庫管理者は特定の在庫を選択して詳細情報を確認できる

## 代替フロー

### 在庫が存在しない場合

1. 在庫管理者がメニューから「在庫管理」を選択する
2. 登録されている在庫が存在しない場合、システムは「在庫データが登録されていません」というメッセージを表示する
3. 「入庫登録」ボタンを表示し、在庫管理者が新しい入庫処理を行えるようにする

### 特定の倉庫の在庫のみを表示する場合

1. 在庫管理者が「倉庫」ドロップダウンメニューから特定の倉庫を選択する
2. システムは選択された倉庫の在庫情報のみを表示する
3. 在庫管理者は「全ての倉庫」を選択することで、再び全ての在庫情報を表示できる
