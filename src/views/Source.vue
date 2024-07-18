<template>
  <div class="source-container">
    <p>自由數學 開放原始碼</p>
    <p class="github-instructions">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo" />
      請為此專案按星星
    </p>
    <a class="github-button" 
       href="https://github.com/3dw/freemath" 
       data-icon="octicon-star" 
       data-size="large" 
       data-show-count="true" 
       aria-label="Star 3dw/freemath on GitHub">
      Star
    </a>
  </div>
</template>

<script>
import { sify } from 'chinese-conv';

export default {
  name: 'Source',
  props: ['si'],
  data() {
    return {};
  },
  methods: {
    sify(t) {
      return this.si ? sify(t) : t;
    }
  },
  mounted() {
    // 確保 GitHub 按鈕腳本被加載
    const script = document.createElement('script');
    script.src = 'https://buttons.github.io/buttons.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
};
</script>

<style scoped>
.source-container {
  padding: 40px;
  max-width: 800px;
  margin: 40px auto;
  background: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: #222;
  text-align: center;
}

.source-container p {
  font-size: 1.5em; /* 字體放大 */
  font-weight: 500;
  color: #444;
  margin-bottom: 20px;
}

.source-container .github-instructions {
  font-size: 1.2em; /* 字體放大 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.source-container .github-logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.source-container a.github-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em; /* 字體放大 */
  font-weight: 700;
  color: #fff;
  background-color: #0366d6;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.source-container a.github-button:hover {
  background-color: #0056b3;
}
</style>
