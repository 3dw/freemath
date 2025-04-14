<template>
  <div class="prime-finding-game">
    <div class="game-header">
      <h1>質數找找樂 🎯</h1>
      <p>點選下方按鈕，逐步使用埃式篩法找出質數</p>
    </div>
    
    <div class="game-container">
      <canvas ref="canvas" width="620" height="100" class="canvas"></canvas>
      <div class="controls">
        <button @click="nextStep" :disabled="done" class="next-button">下一步</button>
        <button @click="resetGame" class="reset-button">重新開始</button>
      </div>
      <p v-if="done" class="completion-message">🎉 完成啦！質數都找出來了！</p>
    </div>
    
    <div class="game-explanation">
      <h2>什麼是埃式篩法？</h2>
      <p>埃式篩法（Sieve of Eratosthenes）是一種找出所有小於或等於給定數值的質數的簡單算法。其步驟如下：</p>
      <ol>
        <li>從2開始，將所有數字標記為可能是質數</li>
        <li>選取第一個未被標記為非質數的數字（初始為2）</li>
        <li>將該數的所有倍數標記為非質數</li>
        <li>重複步驟2-3，直到選取的數的平方大於給定的最大值</li>
      </ol>
      <p>剩下的未被標記為非質數的數字就是質數。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrimeFinding',
  data() {
    return {
      max: 30,
      sieve: [],
      current: 2,
      done: false
    };
  },
  mounted() {
    this.initGame();
  },
  methods: {
    initGame() {
      this.sieve = Array(this.max + 1).fill(true);
      this.sieve[0] = this.sieve[1] = false;
      this.current = 2;
      this.done = false;
      this.draw();
    },
    resetGame() {
      this.initGame();
    },
    nextStep() {
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
          ctx.fillStyle = '#f87171'; // 非質數 - 紅色
        } else {
          ctx.fillStyle = '#4ade80'; // 質數 - 綠色
        }
  
        ctx.fill();
        ctx.stroke();
  
        ctx.fillStyle = '#000';
        ctx.font = '12px sans-serif';
        ctx.fillText(i, (i - 1) * 20 + 5, 35);
      }
    }
  }
};
</script>

<style scoped>
.prime-finding-game {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.game-header {
  text-align: center;
  margin-bottom: 40px;
}

.game-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.game-header p {
  font-size: 1.25rem;
  color: #64748b;
}

.game-container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  text-align: center;
}

.canvas {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin: 20px auto;
  display: block;
  background-color: #f8fafc;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.next-button {
  background-color: #3b82f6;
  color: white;
}

.next-button:hover:not(:disabled) {
  background-color: #2563eb;
}

.next-button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

.reset-button {
  background-color: #f1f5f9;
  color: #475569;
}

.reset-button:hover {
  background-color: #e2e8f0;
}

.completion-message {
  font-size: 1.25rem;
  font-weight: 600;
  color: #10b981;
  margin-top: 20px;
}

.game-explanation {
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e2e8f0;
}

.game-explanation h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
}

.game-explanation p {
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.6;
}

.game-explanation ol {
  color: #475569;
  margin-bottom: 16px;
  padding-left: 24px;
}

.game-explanation li {
  margin-bottom: 8px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .game-header h1 {
    font-size: 2rem;
  }
  
  .canvas {
    width: 100%;
    height: auto;
  }
}
</style>
  