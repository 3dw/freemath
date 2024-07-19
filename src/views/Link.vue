<template lang="pug">
  .hello
    .buttons-container
      a.button.primary(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 星河計畫-自學生經驗匯流
      a.button.secondary(href="https://we.alearn.org.tw") 自學2.0
      a.button.tertiary(href="https://sites.google.com/view/autoalearn") 自主學習促進會
      a.button.quaternary(href="https://map.alearn.org.tw/#/") 自學地圖
      a.button.quinary(href="https://playback.bestian.tw/") Playback劇場
      a.button.primary(href="https://hack.bestian.tw/") Bestian 的工坊
</template>

<script>
import { sify } from 'chinese-conv';

export default {
  name: 'LinkView',
  props: ['si'],
  data() {
    return {};
  },
  methods: {
    sify(t) {
      return this.si ? sify(t) : t;
    }
  },
};
</script>

<style scoped>
.hello {
  background-color: #f9f9f9;
  padding: 50px 0;
  text-align: center;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.button {
  color: #ffffff; /* 白色文字 */
  padding: 10px 20px; /* 調整按鈕內間距 */
  text-align: center;
  text-decoration: none;
  border-radius: 15px; /* 調整圓弧大小 */
  font-size: 16px; /* 調整字體大小 */
  font-weight: bold;
  border: 1px solid transparent; /* 調整邊框寬度 */
  transition: background-color 0.3s ease, border-color 0.3s ease;
  width: 100%;
  max-width: 300px; /* 調整最大寬度 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button.primary {
  background-color: #003366; /* 深藍色背景 */
  border-color: #003366;
}

.button.primary:hover {
  background-color: #002855; /* 懸停時更深的藍色背景 */
  border-color: #002855;
}

.button.primary:active {
  background-color: #001f40; /* 點擊時最深的藍色背景 */
  border-color: #001f40;
}

.button.secondary {
  background-color: #0056b3; /* 深藍色背景 */
  border-color: #0056b3;
}

.button.secondary:hover {
  background-color: #004494; /* 懸停時更深的藍色背景 */
  border-color: #004494;
}

.button.secondary:active {
  background-color: #003366; /* 點擊時最深的藍色背景 */
  border-color: #003366;
}

.button.tertiary {
  background-color: #1e7e34; /* 深綠色背景 */
  border-color: #1e7e34;
}

.button.tertiary:hover {
  background-color: #155724; /* 懸停時更深的綠色背景 */
  border-color: #155724;
}

.button.tertiary:active {
  background-color: #0c3e17; /* 點擊時最深的綠色背景 */
  border-color: #0c3e17;
}

.button.quaternary {
  background-color: #b21f2d; /* 深紅色背景 */
  border-color: #b21f2d;
}

.button.quaternary:hover {
  background-color: #89121b; /* 懸停時更深的紅色背景 */
  border-color: #89121b;
}

.button.quaternary:active {
  background-color: #610b10; /* 點擊時最深的紅色背景 */
  border-color: #610b10;
}

.button.quinary {
  background-color: #d39e00; /* 深黃色背景 */
  border-color: #d39e00;
}

.button.quinary:hover {
  background-color: #b38600; /* 懸停時更深的黃色背景 */
  border-color: #b38600;
}

.button.quinary:active {
  background-color: #8e6c00; /* 點擊時最深的黃色背景 */
  border-color: #8e6c00;
}
</style>
