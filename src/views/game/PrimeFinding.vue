<template>
  <div class="prime-finding-game">
    <div class="page-layout">
      <div class="section-card game-area">
        <div class="section-header">
          <h2>質數找找樂 🎯</h2>
          <p>點選下方按鈕，逐步使用埃式篩法找出質數</p>
        </div>
        
        <div class="game-container">
          <div class="numbers-grid">
            <div 
              v-for="i in max" 
              :key="i" 
              class="number-box" 
              :class="{ 
                'prime': sieve[i], 
                'not-prime': !sieve[i],
                'current': i === current
              }">
              {{ i }}
            </div>
          </div>
          <div class="controls">
            <button @click="nextStep" :disabled="done" class="button next-button">下一步</button>
            <button @click="resetGame" class="button reset-button">重新開始</button>
          </div>
          <p v-if="done" class="completion-message">🎉 完成啦！質數都找出來了！</p>
        </div>
        
        <div class="game-explanation">
          <h3>什麼是埃式篩法？</h3>
          <p>埃式篩法（Sieve of Eratosthenes）是一種找出所有小於或等於給定數值的質數的簡單算法。其步驟如下：</p>
          <ol>
            <li class="text-left">從2開始，將所有數字標記為可能是質數</li>
            <li class="text-left">選取第一個未被標記為非質數的數字（初始為2）</li>
            <li class="text-left">將該數的所有倍數標記為非質數</li>
            <li class="text-left">重複步驟2-3，直到選取的數的平方大於給定的最大值</li>
          </ol>
          <p>剩下的未被標記為非質數的數字就是質數。</p>
        </div>
      </div>

      <div class="section-card code-editor-section">
        <div class="section-header">
          <h2>程式碼探索 🔍</h2>
          <p>你可以看看下面的程式碼，看看如何找出質數：</p>
          <div id="codepen-container" ref="codepenContainer">
            <p class="codepen" data-height="600" data-default-tab="html,result" data-slug-hash="JojqGPJ" data-pen-title="埃式篩法篩出所有的質數" data-user="bestianT" data-token="bd65cb8a54b90840bae01b834923f89d" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
              <span>See the Pen <a href="https://codepen.io/bestianT/pen/JojqGPJ/bd65cb8a54b90840bae01b834923f89d">
              埃式篩法篩出所有的質數</a> by Bestian Tang (<a href="https://codepen.io/bestianT">@bestianT</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
          </div>
        </div>
        <!-- <CodeEditor /> -->
      </div>

      <div class="section-card lesson-plan-section">
        <div class="section-header">
          <h2>🧮 質數找找樂：教案設計</h2>
          <p>專為小學三年級以上，開始學習乘法與質數概念的學生設計</p>
        </div>

        <div class="learning-objectives">
          <h3>🧠 學習目標</h3>
          <ul>
            <li class="text-left">認識什麼是質數與合數</li>
            <li class="text-left">知道如何用「埃拉托色尼篩法」找出質數</li>
            <li class="text-left">培養邏輯思考能力與「效率程式思維」</li>
            <li class="text-left">操作互動遊戲，親自劃掉非質數，留下質數！</li>
          </ul>
        </div>

        <div class="lesson-timeline">
          <h3>🪄 課程流程（共約 30 分鐘）</h3>
          <div class="timeline-table">
            <div class="table-header">
              <div class="time">時間</div>
              <div class="activity">活動內容</div>
              <div class="focus">教學重點</div>
            </div>
            <div class="table-row">
              <div class="time">0–5分鐘</div>
              <div class="activity">啟發提問：「你知道什麼是質數嗎？」</div>
              <div class="focus">引導學生討論 2、3、4、5、6 是不是質數？為什麼？</div>
            </div>
            <div class="table-row">
              <div class="time">5–10分鐘</div>
              <div class="activity">數字找找看遊戲：請大家找 1～30 中有哪些質數</div>
              <div class="focus">複習除法與倍數概念</div>
            </div>
            <div class="table-row">
              <div class="time">10–15分鐘</div>
              <div class="activity">講解「埃式篩法」邏輯，用圖或白板說明劃掉方式</div>
              <div class="focus">強調「從小的質數開始劃掉它的倍數」</div>
            </div>
            <div class="table-row">
              <div class="time">15–25分鐘</div>
              <div class="activity">操作 Vue 小遊戲《質數找找樂 🎯》</div>
              <div class="focus">每按一次「下一步」，程式會自動篩掉一批數字（紅色），留下綠色的質數</div>
            </div>
            <div class="table-row">
              <div class="time">25–30分鐘</div>
              <div class="activity">回顧與反思：「你覺得哪裡最神奇？這樣做為什麼比較快？」</div>
              <div class="focus">建立效率思維</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-card exploration-section">
        <div class="section-header">
          <h2>🧠 探索思維：兩種找質數的方法</h2>
          <p>讓我們來比較兩種不同的找質數方法，看看哪個比較好？</p>
        </div>

        <div class="code-comparison">
          <div class="code-block">
            <h3>寫法1：一個一個試除法</h3>
            <pre><code class="language-javascript text-left">var isPrime = x > 1;
this.primes.forEach((p) => {
  if (x % p == 0) {
    isPrime = false
  }
})</code></pre>
            <div class="explanation">
              <h4>👀 這是什麼意思？</h4>
              <p>每找到一個新數字 x，就用之前的質數（像 2、3、5...）一個一個試試看能不能整除。如果可以整除，那就不是質數。</p>
            </div>
          </div>

          <div class="code-block">
            <h3>寫法2：埃拉托色尼篩法</h3>
            <pre><code class="language-javascript text-left">primeNumbers() {
  const max = Math.max(...this.numbers);
  const sieve = Array(max + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i &lt;= max; i++) {
    if (sieve[i]) {
      for (let j = i * i; j &lt;= max; j += i) {
        sieve[j] = false;
      }
    }
  }
  return this.numbers.filter(n => sieve[n]);
}</code></pre>
            <div class="explanation">
              <h4>👀 這是什麼意思？</h4>
              <p>一次性做好一張表（像篩網），把所有不是質數的都「篩」掉。最後留下的，就一定是質數！</p>
            </div>
          </div>
        </div>

        <div class="comparison-table">
          <h3>🌟 兩種方法比較表</h3>
          <div class="table">
            <div class="table-header">
              <div class="col">比較項目</div>
              <div class="col">寫法1 forEach</div>
              <div class="col">寫法2 埃式篩法</div>
            </div>
            <div class="table-row">
              <div class="col">容易看懂嗎</div>
              <div class="col">✅ 很簡單</div>
              <div class="col">❌ 稍微複雜</div>
            </div>
            <div class="table-row">
              <div class="col">效率快嗎</div>
              <div class="col">❌ 一個一個試，會比較慢</div>
              <div class="col">✅ 超級快（特別是數字變多時）</div>
            </div>
            <div class="table-row">
              <div class="col">適合用在哪裡</div>
              <div class="col">小範圍（1～100）</div>
              <div class="col">大範圍（1～10000）都沒問題</div>
            </div>
            <div class="table-row">
              <div class="col">小學生能懂嗎</div>
              <div class="col">✅（你現在正在學）</div>
              <div class="col">✅（只要理解一次，就超級神奇又快）</div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
// import CodeEditor from '@/components/CodeEditor.vue';

export default {
  name: 'PrimeFinding',
  components: {
    // CodeEditor
  },
  data() {
    return {
      max: 40,
      sieve: [],
      current: 2,
      currentMultiple: 0,
      done: false
    };
  },
  mounted() {
    this.initGame();
    this.loadCodePenScript();
  },
  methods: {
    initGame() {
      this.sieve = Array(this.max + 1).fill(true);
      this.sieve[0] = this.sieve[1] = false;
      this.current = 2;
      this.currentMultiple = this.current * this.current;
      this.done = false;
    },
    resetGame() {
      this.initGame();
    },
    nextStep() {
      // 如果當前數字不是質數，跳過它並找到下一個質數
      while (this.current <= this.max && !this.sieve[this.current]) {
        this.current++;
        this.currentMultiple = this.current * this.current;
      }

      if (this.current * this.current > this.max) {
        this.done = true;
        return;
      }

      // 找到當前質數的下一個需要標記的倍數（跳過已經標記的）
      while (this.currentMultiple <= this.max && !this.sieve[this.currentMultiple]) {
        this.currentMultiple += this.current;
      }

      if (this.currentMultiple <= this.max) {
        // 標記這個倍數為非質數
        const newSieve = [...this.sieve];
        newSieve[this.currentMultiple] = false;
        this.sieve = newSieve;
        
        // 移動到下一個倍數
        this.currentMultiple += this.current;
      } else {
        // 當前質數的所有倍數都已處理完，移動到下一個數字
        this.current++;
        // 自動跳過所有非質數，直接找到下一個質數
        while (this.current <= this.max && !this.sieve[this.current]) {
          this.current++;
        }
        this.currentMultiple = this.current * this.current;
      }
    },
    loadCodePenScript() {
      // 載入 CodePen 嵌入腳本
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://public.codepenassets.com/embed/index.js';
      document.body.appendChild(script);
    }
  }
};
</script>

<style scoped>
.prime-finding-game {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.page-layout {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
}

.section-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-header {
  margin-bottom: 32px;
  text-align: center;
}

.section-header h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
}

.section-header p {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: #64748b;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.game-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.numbers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 16px;
  margin: 0 auto;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.number-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  font-size: 16px;
}

.prime {
  background-color: #4ade80; /* 質數 - 綠色 */
  color: rgba(0, 0, 0, 0.8);
}

.not-prime {
  background-color: #f87171; /* 非質數 - 紅色 */
  color: rgba(0, 0, 0, 0.6);
  text-decoration: line-through;
}

.current {
  background-color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 50%;
}

.controls {
  display: flex;
  gap: 16px;
  margin: 24px 0;
  justify-content: center;
  flex-wrap: wrap;
}

.button {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.next-button {
  background: #3b82f6;
  color: white;
}

.next-button:hover:not(:disabled) {
  background: #2563eb;
}

.next-button:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.reset-button {
  background: #f1f5f9;
  color: #475569;
}

.reset-button:hover {
  background: #e2e8f0;
}

.completion-message {
  font-size: 1.25rem;
  font-weight: 600;
  color: #10b981;
  margin-top: 20px;
}

.game-explanation {
  margin-top: 32px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.game-explanation h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
}

.game-explanation p, 
.game-explanation li {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 12px;
}

.game-explanation ol {
  padding-left: 24px;
  margin: 16px 0;
}

.code-editor-section,
.lesson-plan-section,
.exploration-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.code-editor-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.code-editor-section > * {
  width: 100%;
  max-width: 1000px;
}

.code-block {
  width: 100%;
  max-width: 1000px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 24px;
  margin-top: 16px;
}

.code-editor-section :deep(.code-editor) {
  width: 100%;
  max-width: 1000px;
}

.comparison-table {
  width: 100%;
  max-width: 800px;
  margin: 24px auto;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.timeline-table {
  width: 100%;
  max-width: 800px;
  margin: 24px auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.lesson-plan-section .timeline-table {
  margin-top: 24px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.game-explanation {
  background-color: #f8fafc;
  border-radius: 12px;
  padding: clamp(20px, 4vw, 30px);
  border: 1px solid #e2e8f0;
  margin-bottom: 30px;
}

.game-explanation h3 {
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
}

.game-explanation p, .game-explanation li {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.6;
}

.lesson-header {
  margin-bottom: 30px;
}

.target-audience {
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.target-audience h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1e293b;
}

.target-audience p {
  color: #475569;
  line-height: 1.6;
}

.learning-objectives {
  margin-bottom: 30px;
}

.learning-objectives h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1e293b;
}

.learning-objectives ul {
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  color: #475569;
  line-height: 1.6;
}

.learning-objectives li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
}

.lesson-timeline {
  margin-top: 30px;
}

.lesson-timeline h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1e293b;
}

.timeline-table {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 120px 1fr 1fr;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  color: #1e293b;
}

.table-row {
  display: grid;
  grid-template-columns: 120px 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
}

.table-row:last-child {
  border-bottom: none;
}

.time, .activity, .focus {
  padding: 15px;
  color: #475569;
}

.time {
  background-color: #f8fafc;
  font-weight: 500;
}

.activity {
  border-left: 1px solid #e2e8f0;
}

.focus {
  border-left: 1px solid #e2e8f0;
  background-color: #f8fafc;
}

@media (max-width: 768px) {
  .game-header h1 {
    font-size: 2rem;
  }
  
  .canvas {
    width: 100%;
    height: auto;
  }

  .code-comparison {
    grid-template-columns: 1fr;
  }
  
  .table-header, .table-row {
    grid-template-columns: 1fr;
  }
  
  .col:not(:first-child) {
    border-left: none;
    border-top: 1px solid #e2e8f0;
  }
}

.exploration-section {
  margin-top: 40px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
}

.exploration-header {
  margin-bottom: 30px;
}

.exploration-header h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.exploration-header p {
  font-size: 1.25rem;
  color: #64748b;
}

.code-comparison {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 4vw, 30px);
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  .code-comparison {
    grid-template-columns: 1fr 1fr;
  }
}

.code-block {
  background-color: #f8fafc;
  border-radius: 8px;
  padding: clamp(15px, 3vw, 20px);
}

.code-block h3 {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
}

.code-block pre {
  background-color: #1e293b;
  color: #e2e8f0;
  padding: clamp(12px, 2.5vw, 16px);
  border-radius: 6px;
  overflow-x: auto;
  margin-bottom: 16px;
  max-width: 100%;
}

.code-block code {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(12px, 2vw, 14px);
  line-height: 1.5;
}

.explanation {
  background-color: #ffffff;
  border-radius: 6px;
  padding: 16px;
}

.explanation h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1e293b;
}

.explanation p {
  color: #475569;
  line-height: 1.6;
}

.comparison-table {
  margin-bottom: 30px;
}

.comparison-table h3 {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 20px;
  color: #1e293b;
}

.table {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  color: #1e293b;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
}

.col {
  padding: clamp(10px, 2vw, 15px);
  color: #475569;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

@media (max-width: 768px) {
  .table-header, .table-row {
    grid-template-columns: 1fr;
  }
  
  .col:not(:first-child) {
    border-left: none;
    border-top: 1px solid #e2e8f0;
  }
}

.conclusion {
  background-color: #f8fafc;
  border-radius: 8px;
  padding: clamp(15px, 3vw, 20px);
}

.conclusion h3 {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
}

.conclusion p {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.6;
}

.conclusion ul {
  list-style-type: none;
  padding: 0;
}

.conclusion li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  color: #475569;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.conclusion li::before {
  content: "👉";
  position: absolute;
  left: 0;
}

.text-left {
  text-align: left !important;
}
</style>
  