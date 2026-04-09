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
