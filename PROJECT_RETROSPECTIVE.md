# Random Topic：技術經歷回顧

> 本文件依據 React 元件、話題文字檔及 package 設定整理，未重新執行應用程式或 build。

## 1. 專案定位

Random Topic 是一個用於日常聊天靈感的簡單網頁工具。使用者按下開始後，頁面會從文字檔載入的話題清單中，以固定時間間隔隨機選取並顯示一個話題；按下停止則停止更新。

## 2. 核心程式流程

主要檔案：`src/App.js`

1. 使用 `useState` 管理目前話題、完整話題陣列及執行狀態。
2. 元件掛載後透過 Fetch API 讀取 `/topics.txt`。
3. 將文字內容以換行符號切分，並移除空白行。
4. 使用 `useEffect` 監控執行狀態與話題清單。
5. 當 `isRunning` 為 true 且話題清單非空時，建立 100 毫秒的 interval。
6. 每次 interval 產生隨機索引，更新目前顯示的話題。
7. 停止或元件卸載時清除 interval。

## 3. 資料來源

`public/topics.txt` 使用純文字逐行保存話題。每一行視為一個隨機候選項目，內容以日常對話、個人興趣、音樂、動畫、旅行及想法為主。

此設計讓話題資料與 React 元件分離；若要調整話題，可直接編輯文字檔，不需要修改隨機選取邏輯。

## 4. 技術能力摘要

| 技術 | 程式證據 | 合理定位 |
|---|---|---|
| React | App component | 有 React 網頁元件開發經驗 |
| useState | topic、topics、isRunning | 有基本 React state 管理經驗 |
| useEffect | 資料載入及 interval lifecycle | 有 effect 與副作用清理經驗 |
| useRef | 保存 interval ID | 有 useRef 管理外部資源經驗 |
| Fetch API | 讀取 topics.txt | 有前端靜態資源請求經驗 |
| setInterval | 每 100ms 隨機切換話題 | 有計時器與互動狀態控制經驗 |

## 5. 已知限制

- **快速輪播：** 每 100 毫秒就切換話題，較適合視覺快速跳動的簡單效果；若作為實際抽題工具，應增加較慢的抽選節奏及結果鎖定。
- **沒有抽選紀錄：** 不保存過去已出現的話題，可能連續抽到相同項目。
- **沒有錯誤處理：** Fetch 沒有檢查 response.ok，也沒有 catch 網路錯誤；話題檔讀取失敗時沒有使用者提示。
- **沒有清單管理介面：** 話題只能透過修改 `topics.txt` 調整。
- **沒有測試證據：** Repository 中雖包含 Create React App 測試依賴，但沒有看到對隨機選取、載入錯誤或 interval lifecycle 的專案測試。

## 6. 履歷描述建議

使用 React 建立日常聊天話題隨機產生器，透過 Fetch API 載入外部文字清單，使用 useState／useEffect 管理話題資料與執行狀態，並以 setInterval 實作隨機切換、開始及停止控制。

## 7. 驗證界線

- 未重新安裝 npm dependencies。
- 未執行 CRA development server、測試或 production build。
- 未驗證話題清單讀取失敗、快速重複操作及不同瀏覽器下的計時器行為。
- 本文件描述目前可讀取的程式實作，不代表已完成抽選公平性或歷史紀錄功能。
