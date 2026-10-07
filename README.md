# 自由數學freemath

學習數學，讓思想跟自由而不是更受限制。
新手嗎？請[由此進](https://github.com/bestian/freemath/wiki)



## 給工程師的部份(新手可略)

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lints and fixes files
```
yarn lint
```

### Build & Deploy

```yarn build```

``` git push```

## Cloudflare Pages 自動部署

請在 Cloudflare Pages 專案設定以下值：

- Framework preset: `None`
- Build command: `corepack yarn build:cf`
- Build output directory: `dist`
- Node.js version: `20`

補充：

- 本專案已固定 `packageManager: yarn@4.13.0`，Cloudflare 會透過 Corepack 自動抓對應 Yarn。
- `dist` 已加入 `.gitignore`，不再追蹤；Cloudflare 會在雲端建置時產生。
- 本機開發可直接使用 `yarn ...`（例如 `yarn serve`）；Cloudflare 建議使用 `corepack yarn ...` 以確保版本一致。

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Google Analytics 4

正式版本透過建置時的 `VUE_APP_GA_MEASUREMENT_ID` 載入 Google tag。本站的正式評估 ID `G-BWTR1H6280` 已設定於 `.env.production`，正式建置會自動使用；未設定時不啟用追蹤，`yarn serve` 也不會送出開發流量。

1. 到 Google Analytics「管理 → 資料串流 → 本站的網站串流」，複製「評估 ID」（`G-` 開頭）。純數字的資源 ID、串流 ID 或舊的 `UA-` ID 都不能替代此值。
2. 若需改用其他串流，可在 Cloudflare Pages 正式環境設定 `VUE_APP_GA_MEASUREMENT_ID` 覆寫 `.env.production`，並重新建置部署。Vue CLI 會把值寫入建置產物，設定後必須重新建置才能生效。本機可複製 `.env.example` 為 `.env.production.local` 並填入同一個 ID。部署環境若已有此變數，請確認其值為 `G-BWTR1H6280`，避免覆寫成舊 ID。
3. 在網站串流的「加強型評估 → 網頁瀏覽 → 顯示進階設定」啟用「網頁載入」與「根據瀏覽器記錄事件判斷的網頁變更」。本站使用 Vue Router 的 History API，由 GA4 自動記錄首次載入與站內換頁，程式不額外送出 `page_view`，避免重複計數。
4. 部署後使用未封鎖 Analytics 的瀏覽器開啟網站。Network 應看到 `googletagmanager.com/gtag/js?id=G-…` 和 `google-analytics.com/g/collect`，收集請求的 `tid` 應符合評估 ID。再到 GA4「即時」確認事件；可用 Google Tag Assistant 的預覽連線在 DebugView 檢查首頁、站內換頁和按鈕事件。

初始化會等首次路由完成、網頁標題設定後才執行，並在 Google tag 下載期間把事件暫存至 `dataLayer`。現有 `$gtag.event(name, params)` 和 `$gtag.query('event', name, params)` 會使用正確的 Google tag 指令。

官方說明：[找出評估 ID](https://support.google.com/analytics/answer/12270356?hl=zh-Hant)、[單頁應用程式評估](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)。
