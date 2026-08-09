# 沛蓉百元剪髮 官方網站

> 台北市大安區汀洲路三段59號 · 前台電大樓捷運站 · 百元快剪

## 🚀 部署到 GitHub Pages

### 第一次設定

1. **建立 GitHub 帳號** 並登入 [github.com](https://github.com)

2. **新建 Repository**
   - 點選右上角 `+` → `New repository`
   - 名稱建議：`peirong-haircut`
   - 選擇 **Public**（GitHub Pages 免費版需公開）
   - 按 `Create repository`

3. **上傳所有檔案**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的帳號/peirong-haircut.git
   git push -u origin main
   ```

4. **啟用 GitHub Pages**
   - 進入 repo → `Settings` → `Pages`
   - Source 選 `GitHub Actions`
   - 儲存後等約 1~2 分鐘

5. **網站會在以下位址上線：**
   ```
   https://你的帳號.github.io/peirong-haircut/
   ```

---

## ✏️ 更新網站內容（管理員）

### 方法 A：透過管理員後台（推薦）

1. 前往 `https://你的帳號.github.io/peirong-haircut/admin.html`
2. 輸入管理員密碼（預設：`peirong2025`）
3. 修改各欄位內容
4. 按「儲存」→「下載 content.js」
5. 將下載的 `content.js` 替換 repo 內 `js/content.js`
6. Commit & Push → 網站自動更新

### 方法 B：直接編輯 content.js

直接修改 `js/content.js` 檔案，commit 並 push。

---

## 🔐 管理員密碼

預設密碼：`peirong2025`

可在後台「變更管理員密碼」區塊修改（儲存在瀏覽器本地）。

---

## 📁 檔案結構

```
peirong-haircut/
├── index.html          # 主頁面
├── admin.html          # 管理員後台
├── css/
│   └── style.css       # 樣式表
├── js/
│   ├── content.js      # 網站內容（可編輯）
│   └── main.js         # 主要 JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml  # 自動部署設定
└── README.md
```

---

## 📞 聯絡資訊

- 電話：0980-455-650
- LINE：0980455650
- 地址：台北市大安區汀洲路三段59號
