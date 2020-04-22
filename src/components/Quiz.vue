<template lang="pug">
  .hello
    .ui.container
      div(v-if='myQ')
        h1.ui.header
          | {{myQ.q}}
        h4.sub.header {{myQ.c}}(等級{{myQ.l}})
        .ui.buttons
          a.ui.huge.button(:class="myA == a ? 'green' : 'gray'", v-for='a in myQ.as', @click='myA = a; check(a, myQ.t)')
            | {{a}}
      h1(v-if='win') 你答對了！
      h1(v-if='wrong') 不對喔，請再加油！
      hr
      div
        .ui.buttons
          a.ui.teal.huge.button(v-if='myQ', @click='resetO()')
            | 同級測驗
          a.ui.orange.huge.button(v-if='myQ && myLev < 3', @click='levup()')
            | 升級測驗
      hr
      div
        h3 選擇單元
        .ui.buttons
          a.ui.huge.button(:class="myC == c ? 'green' : 'gray'", v-for='c in myCs', @click='setC(c)')
            | {{c}}
          a.ui.huge.button(@click='reset()')
            | 隨機

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
      myC: undefined,
      myLev: 1,
      quizs: [
        {c: '加法', l: 1, q: '2+3 = ?', as: [3, 4, 5, 6], t: 5},
        {c: '加法', l: 1, q: '1+4 = ?', as: [3, 4, 5, 6], t: 5},
        {c: '加法', l: 1, q: '2+4 = ?', as: [3, 4, 5, 6], t: 6},
        {c: '加法', l: 1, q: '5+3 = ?', as: [7, 8, 9, 10], t: 8},
        {c: '加法', l: 2, q: '8+3 = ?', as: [10, 11, 12, 13], t: 11},
        {c: '加法', l: 2, q: '4+9 = ?', as: [10, 11, 12, 13], t: 13},
        {c: '加法', l: 2, q: '5+7 = ?', as: [10, 11, 12, 13], t: 12},
        {c: '加法', l: 3, q: '21+37 = ?', as: [58, 59, 60, 61], t: 58},
        {c: '加法', l: 3, q: '13+28 = ?', as: [38, 39, 40, 41], t: 41},
        {c: '加法', l: 3, q: '19+21 = ?', as: [38, 39, 40, 41], t: 40},
        {c: '減法', l: 1, q: '3-2 = ?', as: [1, 2, 3, 4], t: 1},
        {c: '減法', l: 1, q: '4-1 = ?', as: [1, 2, 3, 4], t: 3},
        {c: '減法', l: 1, q: '4-2 = ?', as: [1, 2, 3, 4], t: 2},
        {c: '減法', l: 1, q: '5-3 = ?', as: [1, 2, 3, 4], t: 2},
        {c: '減法', l: 2, q: '18-3 = ?', as: [12, 13, 14, 15], t: 15},
        {c: '減法', l: 2, q: '14-9 = ?', as: [2, 3, 4, 5], t: 5},
        {c: '減法', l: 2, q: '15-7 = ?', as: [7, 8, 9, 10], t: 8},
        {c: '減法', l: 3, q: '37-21 = ?', as: [15, 16, 17, 18], t: 16},
        {c: '減法', l: 3, q: '28-13 = ?', as: [14, 15, 16, 17], t: 15},
        {c: '減法', l: 3, q: '21-19 = ?', as: [1, 2, 3, 4], t: 2},
        {c: '乘法', l: 1, q: '3×2 = ?', as: [3, 4, 5, 6], t: 6},
        {c: '乘法', l: 1, q: '4×3 = ?', as: [11, 12, 13, 14], t: 12},
        {c: '乘法', l: 1, q: '5×2 = ?', as: [10, 11, 12, 13], t: 10},
        {c: '乘法', l: 1, q: '5×3 = ?', as: [14, 15, 16, 17], t: 15},
        {c: '乘法', l: 2, q: '8×3 = ?', as: [22, 23, 24, 25], t: 24},
        {c: '乘法', l: 2, q: '4×9 = ?', as: [34, 35, 36, 37], t: 36},
        {c: '乘法', l: 2, q: '4×8 = ?', as: [29, 30, 31, 32], t: 32},
        {c: '乘法', l: 2, q: '6×7 = ?', as: [40, 41, 42, 43], t: 42},
        {c: '乘法', l: 3, q: '17×2 = ?', as: [33, 34, 35, 36], t: 34},
        {c: '乘法', l: 3, q: '28×3 = ?', as: [53, 54, 55, 56], t: 54},
        {c: '乘法', l: 3, q: '21×9 = ?', as: [189, 190, 191, 192], t: 189},
        {c: '除法', l: 1, q: '有15顆糖,平均分配給三個人,每人可得幾顆呢?', as: [3, 4, 5, 6], t: 5}
      ],
      myQuizs: [],
      myCs: ['加法', '減法', '乘法']
    }
  },
  methods: {
    setC (c) {
      this.myC = c
      this.resetO()
    },
    reset () {
      this.myLev = Math.floor(Math.random() * 3) + 1
      this.myC = this.myCs[Math.floor(Math.random() * this.myCs.length)]
      this.resetO()
    },
    resetO () {
      var lev = this.myLev
      var c = this.myC
      this.myQuizs = this.quizs.filter(function (o) { return o.l === lev && o.c === c })
      this.myQ = this.myQuizs[Math.floor(Math.random() * this.myQuizs.length)]
      this.win = false
      this.wrong = false
      this.myA = undefined
      this.$forceUpdate()
    },
    levup () {
      this.myLev++
      this.resetO()
    },
    check (a, b) {
      if (a === b) {
        this.win = true
        this.wrong = false
      } else {
        this.win = false
        this.wrong = true
      }
      this.$forceUpdate()
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    margin-top: 150px;
}
</style>
