# 取引先

在庫管理システムに関わる外部の企業や個人の情報を管理するエンティティ。主に仕入先と販売先が含まれる。

## 属性

### 取引先ID

取引先を一意に識別するための識別子。

- システム内で自動生成される一意の識別子であること
- 変更不可であること

### 取引先コード

取引先を識別するための業務上のコード。

- 英数字の組み合わせで、20文字以内であること
- システム内で一意であること
- 入力必須であること

### 取引先名

取引先の名称。

- 1文字以上100文字以内であること
- 入力必須であること

### 取引先区分

取引先の種類を示す区分。

- 「仕入先」「販売先」「両方」「その他」のいずれかであること
- 入力必須であること

### 郵便番号

取引先の郵便番号。

- 郵便番号形式に従った文字列であること
- 入力は任意であること

### 住所

取引先の住所。

- 255文字以内であること
- 入力は任意であること

### 電話番号

取引先の電話番号。

- 電話番号形式に従った文字列であること
- 入力は任意であること

### メールアドレス

取引先の連絡先メールアドレス。

- 有効なメールアドレス形式であること
- 入力は任意であること

### 担当者名

取引先の担当者名。

- 100文字以内であること
- 入力は任意であること

### 備考

取引先に関する補足情報。

- 1000文字以内であること
- 入力は任意であること

### 作成日時

取引先が登録された日時。

- システムによって自動設定されること
- 変更不可であること

### 更新日時

取引先情報が最後に更新された日時。

- システムによって自動更新されること

### アクティブフラグ

取引先が有効かどうかを示すフラグ。

- 真偽値（true/false）であること
- デフォルトはtrue（有効）であること

## ビジネスルール

- 同一の取引先コードを持つ取引先は登録できない
- 削除する代わりに、アクティブフラグをfalseに設定することで非アクティブ化する
- 非アクティブな取引先とは新規の取引を行えない
- 取引履歴が存在する取引先は完全に削除できない
- 取引先の情報変更履歴を保持する
