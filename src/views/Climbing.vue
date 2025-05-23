<template lang="pug">
.hello
  h3.ui.header {{sify('數學診療室')}}

  .ui.success.message {{sify('從一個單元開始，回答3~5個題目，即可進階到下一個單元。\n如果答錯，則會降低難度。並會協助您找到先備知識，以「倒溯法」補強。\n請您準備好紙筆，以便進行計算，和記錄您的學習過程。')}}
  
  // 單元選擇
  select.ui.dropdown(@change="onSelectUnit", v-model="selectedUnit")
    option(:value="null", selected) {{sify('選擇一個單元')}}
    option(v-for="unit in filteredUnits", :value="unit.id" :key="unit.id") {{ unit.n }}
  
  .ui.divider
  
  // 當前單元資訊
  .ui.grid(v-if="currentUnit")
    .ui.stackable.row
      .eight.wide.column
        .ui.segment
          h4.ui.orange.header 當前單元
          p 
            b {{ currentUnit.n }}
            |  - {{ currentUnit.d }}
          p 難度等級: {{ currentDifficulty }}
          a.ui.basic.orange.button(:href="currentUnit.url", target="_blank")
            img(:src="'https://www.google.com/s2/favicons?domain='+currentUnit.url", :alt="sify(currentUnit.n)")
            | {{ sify('看' + currentUnit.n + '教材') }}
      .eight.wide.column
        .ui.segment
          h4.ui.orange.header 先備知識
          button.ui.basic.purple.button(v-for="u in prerequisiteUnits" :key="u.id", @click="switchToUnit(u.id)")
            | {{ u.n }}
  
  // 題目顯示區域
  .ui.segment(style="min-height: 300px;", v-show="currentUnit && !showPrerequisites && !showPostrequisites")
    .ui.active.dimmer(v-if="currentUnit && !currentQuiz")
      .ui.text.loader {{sify('載入中...')}}
    .ui.segment(v-if="!currentUnit")
      h4.ui.header 
        | {{ sify('先請選擇一個單元，題目會隨著難度提升而增加') }}
    div(v-if="currentQuiz")
      .ui.success.message(v-if="showResult && currentQuiz.correct_ans === userAnswer") {{sify('答對了！真棒！下一題載入中...')}}
      .ui.error.message(v-if="showResult && currentQuiz.correct_ans !== userAnswer") {{sify('答錯了！再接再勵。下一題載入中...')}}
      h4.ui.header 
        | {{ tify(currentQuiz.q) }}
      button.ui.icon.button(@click="toggleHint" :class="{ 'yellow': showHint, 'disabled': showResult }")
        i.lightbulb.icon
        span {{sify('看提示')}}
      .ui.message.blue(v-if="showHint && currentQuiz.hint")
        p {{ tify(currentQuiz.hint) }}
      .ui.divider
      button.ui.button(
        style="margin: 10px",
        v-for="(ans, index) in allAnswers",
        :key="index",
        @click="checkAnswer(ans)",
        :class="{'green': showResult && ans === currentQuiz.correct_ans, 'red': showResult && ans !== currentQuiz.correct_ans, 'disabled': showResult }"
      ) {{ ans }}
  
  // 先備知識提示
  .ui.segment(v-if="showPrerequisites")
    h4.ui.purple.header
      span {{sify('您需要先建立先備知識以學習')}}
      span {{currentUnit.n}}
      span {{sify('。請選擇以下單元之一')}}
    .ui.list
      .item(v-for="u in prerequisiteUnits" :key="u.id")
        button.ui.basic.purple.button(@click="switchToUnit(u.id)")
          | {{ u.n }} - {{ u.d }}
  
  // 後續知識提示
  .ui.segment(v-if="showPostrequisites")
    .ui.success.message.donate-us
      a.ui.icon.header(href="https://www.alearn.org.tw/donate", target="_blank")
        i.lightbulb.icon
        | {{sify('邀請您捐贈「自由數學」專案，支持我們的開發者、伺服器和AI服務。')}}
      .description
        | {{sify('我們是非營利組織，致力於提供免費優質的學習資源。您的捐款將用於維護伺服器、更新教材、和開發更多功能。')}}
    h4.ui.blue.header {{sify('您可以進展到後續知識了')}}
    .ui.list
      .item(v-for="u in postrequisiteUnits" :key="u.id")
        button.ui.basic.blue.button(@click="switchToUnit(u.id)")
          | {{ u.n }} - {{ u.d }}

</template>

<script>
import { sify, tify } from 'chinese-conv'
import { backs } from '../data/backs.js'

export default {
  name: 'Climbing',
  props: ['units', 'si'],
  data() {
    return {
      backs: backs,
      unitBlacklist: [
        '分類',
        '誰比較多',
        '認識數字',
        '數氣球',
        '百數表',
        '湊十釣魚',
        '分數影片',
        '加法影片',
        '減法影片',
        '乘法影片'
      ],
      selectedUnit: null,
      currentDifficulty: 3,
      currentQuiz: null,
      userAnswer: null,
      showResult: false,
      showPrerequisites: false,
      showPostrequisites: false,
      allAnswers: [],
      showHint: false
    }
  },
  computed: {
    filteredUnits() {
      return this.units.filter(unit => !this.unitBlacklist.includes(unit.n))
    },
    currentUnit() {
      return this.units.find(unit => unit.id === this.selectedUnit) || null
    },
    prerequisiteUnits() {
      if (!this.currentUnit) return []
      const selectedUnitName = this.currentUnit.n
      return this.units.filter(u => 
        this.backs.some(back => 
          back.to.includes(selectedUnitName) && back.from === u.n
        )
      ).filter(u => !this.unitBlacklist.includes(u.n))
    },
    postrequisiteUnits() {
      if (!this.currentUnit) return []
      const selectedUnitName = this.currentUnit.n
      return this.units.filter(u => 
        this.backs.some(back => 
          back.from === selectedUnitName && back.to.includes(u.n)
        )
      ).filter(u => !this.unitBlacklist.includes(u.n))
    }
  },
  methods: {
    tify(t) {
      return tify(t)
    },
    sify(t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    async onSelectUnit(event) {
      console.log('選擇單元:', event.target.value)
      const value = parseInt(event.target.value, 10)
      this.selectedUnit = isNaN(value) ? null : value
      console.log('解析後的單元ID:', this.selectedUnit)
      this.currentDifficulty = 3
      this.showResult = false
      this.showPrerequisites = false
      this.showPostrequisites = false
      this.showHint = false
      if (this.selectedUnit !== null) {
        await this.fetchQuiz()
      }
    },
    async fetchQuiz() {
      if (!this.currentUnit) return
      console.log('開始獲取題目:', {
        單元: this.currentUnit.n,
        難度: this.currentDifficulty
      })
      try {
        const response = await fetch(
          `https://freemath-backend.alearn13994229.workers.dev/api/makeQuiz/${encodeURIComponent(this.currentUnit.n + ': ' + this.currentUnit.d)}/${this.currentDifficulty}`
        )
        const data = await response.json()
        this.currentQuiz = JSON.parse(data)
        console.log('獲取到的題目:', {
          題目: tify(this.currentQuiz.q),
          正確答案: tify(this.currentQuiz.correct_ans),
          提示: tify(this.currentQuiz.hint)
        })
        // 將所有答案混合並打亂順序
        this.allAnswers = [this.currentQuiz.correct_ans, ...this.currentQuiz.wrong_ans]
        this.shuffleArray(this.allAnswers)
        console.log('打亂後的答案選項:', this.allAnswers)
        this.showResult = false
        this.showHint = false
      } catch (error) {
        console.error('獲取題目時發生錯誤:', error)
        window.alert('獲取題目時發生錯誤，請重新整理頁面，並稍後再試。')
      }
    },
    shuffleArray(array) {
      console.log('打亂答案前的順序:', [...array])
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
      console.log('打亂答案後的順序:', [...array])
    },
    async checkAnswer(answer) {
      if (this.showResult) return
      console.log('檢查答案:', {
        選擇的答案: answer,
        正確答案: this.currentQuiz.correct_ans,
        當前難度: this.currentDifficulty
      })
      this.showResult = true
      this.showHint = false

      this.userAnswer = answer
      
      if (answer === this.currentQuiz.correct_ans) {
        console.log('答對了！')
        // 答對增加難度
        if (this.currentDifficulty < 5) {
          this.currentDifficulty++
          console.log('難度提升至:', this.currentDifficulty)
          setTimeout(() => {
            this.fetchQuiz()
          }, 500)
        } else {
          console.log('達到最高難度，顯示後續知識')
          // 達到最高難度，顯示後續知識
          this.showPostrequisites = true
        }
      } else {
        console.log('答錯了！')
        // 答錯降低難度
        if (this.currentDifficulty > 1) {
          this.currentDifficulty--
          console.log('難度降低至:', this.currentDifficulty)
          setTimeout(() => {
            this.fetchQuiz()
          }, 500)
        } else {
          console.log('達到最低難度，顯示先備知識')
          // 達到最低難度，顯示先備知識
          this.showPrerequisites = true
        }
      }
    },
    switchToUnit(unitId) {
      console.log('切換到單元:', unitId)
      this.selectedUnit = unitId
      this.currentDifficulty = 3
      this.showPrerequisites = false
      this.showPostrequisites = false
      this.fetchQuiz()
    },
    toggleHint() {
      console.log('切換提示顯示:', !this.showHint)
      this.showHint = !this.showHint
    }
  }
}
</script>

<style scoped>
.hello {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
}

.ui.header {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.ui.dropdown {
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}

.ui.segment {
  margin: 20px 0;
  padding: 20px;
}

.ui.buttons {
  margin: 20px 0;
}

.ui.button {
  margin: 5px 0;
  text-align: left;
  padding: 15px;
  font-size: 16px;
}

.ui.message {
  margin-top: 20px;
}

.ui.list {
  margin-top: 10px;
}

.ui.list .item {
  margin: 10px 0;
}

.ui.icon.button.tiny {
  padding: 8px;
  margin-left: 10px;
}

.ui.icon.button.tiny i.icon {
  margin: 0;
}

.ui.icon.button.tiny span {
  margin-left: 5px;
}

.ui.message.blue {
  margin-top: 10px;
  margin-bottom: 20px;
}

.ui.message {
  text-align: left;
  font-size: 16px;
  white-space: pre-wrap;
}
</style> 