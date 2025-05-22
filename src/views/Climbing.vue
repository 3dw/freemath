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
    h4.ui.header {{ currentQuiz.q }}
    .ui.buttons.vertical.fluid
      button.ui.button(
        v-for="(ans, index) in allAnswers",
        :key="index",
        @click="checkAnswer(ans)",
        :class="{ 'green': showResult && ans === currentQuiz.correct_ans, 'red': showResult && ans !== currentQuiz.correct_ans}"
      ) {{ ans }}
    
    .ui.message.blue(v-if="showResult && currentQuiz.hint")
      p {{ currentQuiz.hint }}
  
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
      allAnswers: []
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
      const value = parseInt(event.target.value, 10)
      this.selectedUnit = isNaN(value) ? null : value
      this.currentDifficulty = 3
      this.showResult = false
      this.showPrerequisites = false
      this.showPostrequisites = false
      if (this.selectedUnit !== null) {
        await this.fetchQuiz()
      }
    },
    async fetchQuiz() {
      if (!this.currentUnit) return
      try {
        const response = await fetch(
          `https://freemath-backend.alearn13994229.workers.dev/api/makeQuiz/${encodeURIComponent(this.currentUnit.n)}/${this.currentDifficulty}`
        )
        const data = await response.json()
        this.currentQuiz = JSON.parse(data)
        // 將所有答案混合並打亂順序
        this.allAnswers = [this.currentQuiz.correct_ans, ...this.currentQuiz.wrong_ans]
        this.shuffleArray(this.allAnswers)
        this.showResult = false
      } catch (error) {
        console.error('Error fetching quiz:', error)
      }
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
    },
    async checkAnswer(answer) {
      if (this.showResult) return
      this.showResult = true
      
      if (answer === this.currentQuiz.correct_ans) {
        // 答對增加難度
        if (this.currentDifficulty < 10) {
          this.currentDifficulty++
          setTimeout(() => {
            this.fetchQuiz()
          }, 1500)
        } else {
          // 達到最高難度，顯示後續知識
          this.showPostrequisites = true
        }
      } else {
        // 答錯降低難度
        if (this.currentDifficulty > 1) {
          this.currentDifficulty--
          setTimeout(() => {
            this.fetchQuiz()
          }, 1500)
        } else {
          // 達到最低難度，顯示先備知識
          this.showPrerequisites = true
        }
      }
    },
    switchToUnit(unitId) {
      this.selectedUnit = unitId
      this.currentDifficulty = 3
      this.showPrerequisites = false
      this.showPostrequisites = false
      this.fetchQuiz()
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
</style> 