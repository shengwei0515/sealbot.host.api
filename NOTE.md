#  pipe
## Validation pipe
1. 在 model class 內要設定要驗證的type
2. 撰寫 Validation pipe 去對這些值進行驗證，並決定錯誤時該怎麼處理
3. 在 controller 內的 express 函數中，去 new validation pipe 讓他作用，當然也可以弄成全域的。

## 數值轉換
1. 撰寫 pipe ，在裡面寫要轉換的邏輯
2. 在 controller 內的 express 函數中，去 new validation pipe 讓他作用。


# Guard
* 攔截 request 並且檢查，回傳 true or flase 決定要不要讓它過去