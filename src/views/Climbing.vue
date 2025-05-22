<template lang="pug">
.hello
  h3.ui.header {{sify('數學爬坡學習')}}
  
  // 單元選擇
  select.ui.dropdown(@change="onSelectUnit", v-model="selectedUnit")
    option(:value="null", selected) {{sify('選擇一個單元')}}
    option(v-for="unit in units", :value="unit.id" :key="unit.id") {{ unit.n }}
  
  .ui.divider
  
  // 當前單元資訊
  .ui.grid(v-if="currentUnit")
    .ui.stackable.row
      .sixteen.wide.column
        .ui.segment
          h4.ui.orange.header 當前單元
          p {{ currentUnit.n }} - {{ currentUnit.d }}
          p 難度等級: {{ currentDifficulty }}
  
  // 題目顯示區域
  .ui.segment(v-if="currentQuiz")
    h4.ui.header 
      | {{ currentQuiz.q }}
    button.ui.icon.button(@click="toggleHint" :class="{ 'yellow': showHint }")
      i.lightbulb.icon
      span {{sify('看提示')}}
    .ui.message.blue(v-if="showHint && currentQuiz.hint")
      p {{ currentQuiz.hint }}
    .ui.buttons.vertical.fluid
      button.ui.button(
        v-for="(ans, index) in allAnswers",
        :key="index",
        @click="checkAnswer(ans)",
        :class="{ 'green': showResult && ans === currentQuiz.correct_ans, 'red': showResult && ans !== currentQuiz.correct_ans}"
      ) {{ ans }}
  
  // 先備知識提示
  .ui.segment(v-if="showPrerequisites")
    h4.ui.purple.header {{sify('您需要先建立先備知識')}}
    .ui.list
      .item(v-for="u in prerequisiteUnits" :key="u.id")
        button.ui.basic.purple.button(@click="switchToUnit(u.id)")
          | {{ u.n }} - {{ u.d }}
  
  // 後續知識提示
  .ui.segment(v-if="showPostrequisites")
    h4.ui.blue.header {{sify('您可以進展到後續知識了')}}
    .ui.list
      .item(v-for="u in postrequisiteUnits" :key="u.id")
        button.ui.basic.blue.button(@click="switchToUnit(u.id)")
          | {{ u.n }} - {{ u.d }}

</template>

<script>
import { sify } from 'chinese-conv'
import { backs } from '../data/backs.js'

export default {
  name: 'Climbing',
  props: ['units', 'si'],
  data() {
    return {
      backs: backs,
      selectedUnit: null,
      currentDifficulty: 3,
      currentQuiz: null,
      showResult: false,
      showPrerequisites: false,
      showPostrequisites: false,
      allAnswers: [],
      showHint: false
    }
  },
  computed: {
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
      )
    },
    postrequisiteUnits() {
      if (!this.currentUnit) return []
      const selectedUnitName = this.currentUnit.n
      return this.units.filter(u => 
        this.backs.some(back => 
          back.from === selectedUnitName && back.to.includes(u.n)
        )
      )
    }
  },
  methods: {
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
          `https://freemath-backend.alearn13994229.workers.dev/api/makeQuiz/${encodeURIComponent(this.currentUnit.n)}/${this.currentDifficulty}`
        )
        const data = await response.json()
        this.currentQuiz = JSON.parse(data)
        console.log('獲取到的題目:', {
          題目: this.currentQuiz.q,
          正確答案: this.currentQuiz.correct_ans,
          提示: this.currentQuiz.hint
        })
        // 將所有答案混合並打亂順序
        this.allAnswers = [this.currentQuiz.correct_ans, ...this.currentQuiz.wrong_ans]
        this.shuffleArray(this.allAnswers)
        console.log('打亂後的答案選項:', this.allAnswers)
        this.showResult = false
        this.showHint = false
      } catch (error) {
        console.error('獲取題目時發生錯誤:', error)
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
      
      if (answer === this.currentQuiz.correct_ans) {
        console.log('答對了！')
        // 答對增加難度
        if (this.currentDifficulty < 5) {
          this.currentDifficulty++
          console.log('難度提升至:', this.currentDifficulty)
          setTimeout(() => {
            this.fetchQuiz()
          }, 1500)
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
          }, 1500)
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
</style> 