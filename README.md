# Random Topic｜日常聊天話題隨機產生器

Random Topic 是一個簡單的 React 網頁工具，從 `public/topics.txt` 載入話題清單，按下開始後以固定間隔隨機切換顯示內容，按下停止則停止輪播。

## 功能

- 從靜態文字檔載入話題清單。
- 將每一行文字視為一個獨立話題。
- 開始後每 100 毫秒隨機選取一個話題。
- 停止後保留目前顯示的話題。

## 技術

- React 18
- Create React App／react-scripts
- JavaScript
- React Hooks：useState、useEffect、useRef
- Fetch API、setInterval

## 資料來源

話題內容儲存在 `public/topics.txt`，目前包含日常聊天、興趣、旅行及個人想法等開放式問題。新增話題時可在檔案中增加一行文字。

## 目前實作界線

- 目前只支援從靜態文字檔讀取話題，沒有使用者自訂清單或後端資料庫。
- 每 100 毫秒切換一次，屬快速隨機輪播，不是有動畫緩動或公平抽籤紀錄的抽選系統。
- Fetch 流程沒有完整的 HTTP 錯誤處理。
- 本次依程式碼整理，未重新安裝依賴或執行 build。

詳細程式證據與技術回顧請參閱 [PROJECT_RETROSPECTIVE.md](PROJECT_RETROSPECTIVE.md)。
