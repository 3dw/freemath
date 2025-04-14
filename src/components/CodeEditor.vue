<template>
  <div class="code-editor-container">
    <div class="editor-header">
      <h2>程式碼編輯區</h2>
      <p>在此編輯程式碼，立即查看效果</p>
    </div>
    
    <div class="editor-layout">
      <div class="editor-pane">
        <div class="editor-tabs">
          <div 
            v-for="(tab, index) in tabs" 
            :key="index" 
            :class="['editor-tab', { active: activeTab === index }]"
            @click="activeTab = index"
          >
            {{ tab.name }}
          </div>
        </div>
        
        <div class="editor-content">
          <textarea
            v-if="activeTab === 0"
            v-model="templateCode"
            class="code-textarea"
            spellcheck="false"
            @input="updatePreview"
          ></textarea>
          <textarea
            v-if="activeTab === 1"
            v-model="scriptCode"
            class="code-textarea"
            spellcheck="false"
            @input="updatePreview"
          ></textarea>
          <textarea
            v-if="activeTab === 2"
            v-model="styleCode"
            class="code-textarea"
            spellcheck="false"
            @input="updatePreview"
          ></textarea>
        </div>
      </div>
      
      <div class="preview-pane">
        <div class="preview-header">
          <h3>預覽結果</h3>
          <button class="reset-button" @click="resetCode">重置程式碼</button>
        </div>
        <iframe class="preview-content" ref="previewFrame" sandbox="allow-scripts"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeEditor',
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: 'Template' },
        { name: 'Script' },
        { name: 'Style' }
      ],
      templateCode: `<div id="app">
  <h1>數字列表</h1>

  <h2 class="green">倍數著色</h2>
  <div class="container">
    <div v-for="num in numbers" :key="num" :class="{red: num % 3 === 0}">
      {{ num }}
    </div>
  </div>

  <h2>2 的次方列表</h2>
  <ul>
    <li v-for="(power, index) in powers" :key="index">
      2<sup>{{ numbers[index] }}</sup> = <span>{{ power }}</span>
    </li>
  </ul>
</div>
`,
      scriptCode: `const { createApp } = Vue; // 從載入的 Vue 庫取得 createApp

// 把上面複製的物件內容貼在這裡，並賦值給一個變數，例如 appOptions
const appOptions = {
  // TODO: 用埃式篩法篩出所有的質數
  data() {
    return {
      numbers: [0, 1, 2, 3, 4]
    };
  },
  mounted () {
    this.numbers = [];
    let x = 1;
    // while是一個迴圈
    while (x <= 100) {
      this.numbers.push(x)
      x += 1;
    }
  },
  computed: {
    powers() {
      return this.numbers.map(num => Math.pow(2, num));
    }
  }
};

// 建立 Vue App 並掛載到 HTML 中的 #app 元素
createApp(appOptions).mount('#app');`,
      styleCode: `ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
  font-size: 18px;
}
.container {
  width: 580px;
  display: flex;
  flex-wrap: wrap;
}
.container div {
  border: 1px solid black;
  text-align: right;
  width: 2em;
  padding: .6em;
}
.red {
  color: #f00;
}
.green {
  color: #090;
}
`,
      originalTemplateCode: `<template>
  <div class="sieve-game">
    <h1>質數找找樂 🎯</h1>
    <p>點選下方按鈕，逐步使用埃式篩法找出質數</p>
    <canvas ref="canvas" width="620" height="100" class="canvas"></canvas>
    <button @click="nextStep" :disabled="done">下一步</button>
    <p v-if="done">🎉 完成啦！質數都找出來了！</p>
  </div>
</template>`,
      originalScriptCode: `export default {
  data() {
    return {
      max: 30,
      sieve: [],
      current: 2,
      done: false
    };
  },
  mounted() {
    this.sieve = Array(this.max + 1).fill(true);
    this.sieve[0] = this.sieve[1] = false;
    this.draw();
  },
  methods: {
    nextStep() {
      const ctx = this.$refs.canvas.getContext('2d');

      while (this.current <= this.max && !this.sieve[this.current]) {
        this.current++;
      }

      if (this.current * this.current > this.max) {
        this.done = true;
        return;
      }

      for (let j = this.current * this.current; j <= this.max; j += this.current) {
        this.sieve[j] = false;
      }

      this.current++;
      this.draw();
    },
    draw() {
      const ctx = this.$refs.canvas.getContext('2d');
      ctx.clearRect(0, 0, 620, 100);

      for (let i = 1; i <= this.max; i++) {
        ctx.beginPath();
        ctx.rect((i - 1) * 20, 20, 20, 20);

        if (!this.sieve[i]) {
          ctx.fillStyle = '#f88'; // 非質數 - 紅色
        } else {
          ctx.fillStyle = '#8f8'; // 質數 - 綠色
        }

        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#000';
        ctx.font = '12px sans-serif';
        ctx.fillText(i, (i - 1) * 20 + 5, 35);
      }
    }
  }
};`,
      originalStyleCode: `.sieve-game {
  text-align: center;
  padding: 20px;
}
.canvas {
  border: 1px solid #333;
  margin: 20px auto;
  display: block;
}
button {
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
}`
    };
  },
  mounted() {
    this.updatePreview();
  },
  methods: {
    updatePreview() {
      const previewFrame = this.$refs.previewFrame;
      if (!previewFrame) return;
      
      const doc = document.implementation.createHTMLDocument('Vue Preview');
      const head = doc.head;
      const body = doc.body;
      
      // 添加 Vue.js
      const vueScript = doc.createElement('script');
      vueScript.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js';
      head.appendChild(vueScript);
      
      // 添加样式
      const style = doc.createElement('style');
      style.textContent = this.styleCode;
      head.appendChild(style);
      
      // 添加应用容器
      const app = doc.createElement('div');
      app.id = 'app';
      app.innerHTML = this.templateCode.replace('<template>', '').replace('</template>', '');
      body.appendChild(app);
      
      // 添加应用脚本
      const appScript = doc.createElement('script');
      appScript.textContent = `
        ${this.scriptCode}
        new Vue({
          el: "#app",
          data() {
            return {
              max: 30,
              sieve: [],
              current: 2,
              done: false
            };
          },
          mounted() {
            this.sieve = Array(this.max + 1).fill(true);
            this.sieve[0] = this.sieve[1] = false;
            this.draw();
          },
          methods: {
            nextStep() {
              const ctx = this.$refs.canvas.getContext("2d");

              while (this.current <= this.max && !this.sieve[this.current]) {
                this.current++;
              }

              if (this.current * this.current > this.max) {
                this.done = true;
                return;
              }

              for (let j = this.current * this.current; j <= this.max; j += this.current) {
                this.sieve[j] = false;
              }

              this.current++;
              this.draw();
            },
            draw() {
              const ctx = this.$refs.canvas.getContext("2d");
              ctx.clearRect(0, 0, 620, 100);

              for (let i = 1; i <= this.max; i++) {
                ctx.beginPath();
                ctx.rect((i - 1) * 20, 20, 20, 20);

                if (!this.sieve[i]) {
                  ctx.fillStyle = "#f88"; // 非質數 - 紅色
                } else {
                  ctx.fillStyle = "#8f8"; // 質數 - 綠色
                }

                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = "#000";
                ctx.font = "12px sans-serif";
                ctx.fillText(i, (i - 1) * 20 + 5, 35);
              }
            }
          }
        });
      `;
      body.appendChild(appScript);
      
      previewFrame.srcdoc = doc.documentElement.outerHTML;
    },
    resetCode() {
      this.templateCode = this.originalTemplateCode;
      this.scriptCode = this.originalScriptCode;
      this.styleCode = this.originalStyleCode;
      this.updatePreview();
    }
  }
};
</script>

<style scoped>
.code-editor-container {
  margin: 40px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.editor-header {
  padding: 20px;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.editor-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1e293b;
}

.editor-header p {
  color: #64748b;
  margin: 0;
}

.editor-layout {
  display: flex;
  flex-direction: column;
  height: 600px;
}

@media (min-width: 768px) {
  .editor-layout {
    flex-direction: row;
  }
  
  .editor-pane, .preview-pane {
    flex: 1;
  }
}

.editor-pane {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e2e8f0;
}

.editor-tabs {
  display: flex;
  background-color: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}

.editor-tab {
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  color: #64748b;
  border-bottom: 2px solid transparent;
}

.editor-tab.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
  background-color: #ffffff;
}

.editor-content {
  flex: 1;
  overflow: hidden;
}

.code-textarea {
  width: 100%;
  height: 100%;
  padding: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  resize: none;
  outline: none;
  background-color: #f8fafc;
  color: #1e293b;
}

.preview-pane {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.preview-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #1e293b;
}

.reset-button {
  padding: 6px 12px;
  background-color: #f1f5f9;
  color: #475569;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.reset-button:hover {
  background-color: #e2e8f0;
}

.preview-content {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ffffff;
}
</style>