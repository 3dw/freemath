<template>
  <div class="hello">
      <div v-if = "myQ">
        <h1 class="ui header">
            <h4 class = "sub header">{{myQ.c}}(等級{{myQ.l}})</h4>
            {{myQ.q}}
        </h1>
        <div class="ui buttons">
            <a class="ui huge button" :class="myA == a ? 'green' : 'gray'" v-for = "a in myQ.as" @click="myA = a; check(a, myQ.t)"> {{a}}
            </a>     
        </div>
      </div>
      <h1 v-if = "win">你答對了！</h1>
      <h1 v-if = "wrong">不對喔，請再加油！</h1>
      <hr/>
      <div>
        <div class="ui green huge button" @click="reset()">隨機測驗！</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Quiz',
  data () {
    return {
      myQ: undefined,
      myA: undefined,
      win: false,
      wrong: false,
      quizs: [
        {c: '加法', l: 1, q: '2+3 = ?', as: [3, 4, 5, 6], t: 5},
        {c: '加法', l: 1, q: '1+4 = ?', as: [3, 4, 5, 6], t: 5},
        {c: '加法', l: 1, q: '2+4 = ?', as: [3, 4, 5, 6], t: 6},
        {c: '加法', l: 1, q: '5+3 = ?', as: [7, 8, 9, 10], t: 8},
        {c: '加法', l: 2, q: '8+3 = ?', as: [10, 11, 12, 13], t: 11},
        {c: '加法', l: 2, q: '4+9 = ?', as: [10, 11, 12, 13], t: 13},
        {c: '加法', l: 2, q: '5+7 = ?', as: [10, 11, 12, 13], t: 12},
        {c: '加法', l: 3, q: '11+7 = ?', as: [18, 19, 20, 21], t: 18},
        {c: '加法', l: 3, q: '13+6 = ?', as: [18, 19, 20, 21], t: 19},
        {c: '加法', l: 3, q: '9+11 = ?', as: [18, 19, 20, 21], t: 20}
      ]
    }
  },
  methods: {
    reset () {
      this.myQ = this.quizs[Math.floor(Math.random() * this.quizs.length)]
      this.win = false
      this.wrong = false
      this.myA = undefined
      this.$forceUpdate()
    },
    check (a, b) {
      console.log(a)
      console.log(b)
      if (a === b) {
        this.win = true
        this.wrong = false
      } else {
        this.win = false
        this.wrong = true
      }
      this.$forceUpdate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    margin-top: 150px;
}
</style>
