<template>
  <div class="ai-container">
    <h2 class="ui left aligned header">
      <i class="ui question circle icon"></i>
      AI 數學家教
      <div class="left aligned sub header">
        AI數學家教，可以回答數學問題，也可以解釋數學概念。
      </div>
    </h2>
    <div class="input-section">
      <textarea
        v-model="userQuestion"
        placeholder="請輸入您的數學問題..."
        rows="4"
        class="question-input"
      ></textarea>

      <div class="ui vertical buttons">
        <!-- 範例問題：請問質數是什麼？、請問三角形面積怎麼算？、請問圓周率是多少？ -->
        <button class="ui basic button" @click="setExampleQuestion('請問質數是什麼？')">請問質數是什麼？</button>
        <button class="ui basic button" @click="setExampleQuestion('請問圓周率是什麼？')">請問圓周率是什麼？</button>
        <button class="ui basic button" @click="setExampleQuestion('請計算15和18的最大公因數，並附過程')">請計算15和18的最大公因數，並附過程</button>
        <button class="ui green button" @click="askQuestion" :disabled="isLoading">
          {{ isLoading ? '處理中...' : '送出問題' }}
        </button>
      </div>
    </div>
    
    <div class="response-section" v-if="response">
      <div class="response-content" v-html="formattedResponse"></div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'

export default {
  name: 'AI',
  mounted() {
    // 載入 MathJax
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    script.async = true
    document.head.appendChild(script)
    
    // 設定 MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']]
      }
    }
  },
  data() {
    return {
      userQuestion: '',
      response: '',
      isLoading: false
    }
  },
  computed: {
    formattedResponse() {
      if (!this.response) return ''
      console.log(this.response)
      
      // 先處理 LaTeX 公式，將 \( \) 轉換為 $$ $$
      let processedText = this.response
        .replace(/\\\(/g, '$$')
        .replace(/\\\)/g, '$$')
        .replace(/\\\[/g, '$$')
        .replace(/\\\]/g, '$$')
      
      // 轉換 markdown
      const html = marked((processedText))
      
      // 在下一個 tick 重新渲染數學公式
      this.$nextTick(() => {
        if (window.MathJax) {
          window.MathJax.typesetPromise()
        }
      })
      
      return html
    }
  },
  methods: {
    setExampleQuestion(question) {
      this.userQuestion = question
    },
    async askQuestion() {
      if (!this.userQuestion.trim()) return
      
      this.isLoading = true
      this.response = ''
      
      try {
        const response = await fetch('https://freemath-backend.alearn13994229.workers.dev/api/ai_tutor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            question: this.userQuestion
          })
        })

        const data = await response.json()
        console.log(data)
        
        if (data.response) {
          this.response = data.response
        } else {
          this.response = '發生錯誤，請稍後再試。'
        }
      } catch (error) {
        this.response = '發生錯誤，請稍後再試。'
        console.error('Error:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.ai-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input-section {
  margin-bottom: 20px;
  font-size: 1.2em;
}

.question-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  font-size: 1.2em;
  border-radius: 4px;
  resize: vertical;
}

.submit-btn {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.response-section {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.response-content {
  white-space: pre-wrap;
  font-size: 1.2em;
  text-align: left;
}

.response-content :deep(p) {
  margin: 0.5em 0;
}

.response-content :deep(pre) {
  background-color: #f4f4f4;
  padding: 1em;
  border-radius: 4px;
  overflow-x: auto;
}

.response-content :deep(code) {
  background-color: #f4f4f4;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
}

.response-content :deep(ul), .response-content :deep(ol) {
  padding-left: 2em;
}

.ui.icon {
  display: inline;
  float: left;
}
</style>
