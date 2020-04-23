<template lang="pug">
  .hello
    .ui.container
      h1(v-if = "err") {{err}}
      div(v-if='myQ')
        h1.ui.header
          | {{myQ.q}}
        h4.sub.header {{myQ.c}}(等級{{myQ.l}})
        .ui.buttons
          a.ui.huge.button(:class="myA == a ? 'green' : 'gray'", v-for='a in myQ.as', @click='myA = a; check(a, myQ.t)')
            | {{a}}
      h1(v-if='win') 你答對了！
        img.good(src="../assets/th.jpg")
      h1(v-if='wrong') 不對喔，請再加油！
      hr(v-if="myQ")
      div
        .ui.buttons
          a.ui.teal.huge.button(v-if='myQ', @click='resetO()')
            | 同級測驗
          a.ui.orange.huge.button(v-if='myQ && myLev < maxLev', @click='levup()')
            | 升級測驗
      hr(v-if="myQ")
      div
        h3 選擇單元
        .ui.buttons
          a.ui.huge.button(:class="myC == c ? 'green' : 'gray'", v-for='c in myCs', @click='setC(c)')
            | {{c}}
          a.ui.huge.blue.button(@click='reset()')
            | 隨機

</template>

<script>

export default {
  name: 'Quiz',
  data () {
    return {
      err: null,
      myQ: undefined,
      myA: undefined,
      win: false,
      wrong: false,
      myC: undefined,
      myLev: 1,
      maxLev: 3,
      quizs: [],
      myQuizs: [],
      myCs: ['加法', '減法', '乘法', '除法', '正負數']
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
      this.myQuizs = this.quizs.filter((o) => { return o.l === lev && o.c === c })
      this.maxLev = this.quizs.filter((o) => { return o.c === c }).map((o) => { return o.l }).sort((a, b) => { return b - a })[0]
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
    this.$http.get('/static/quizs.json').then(response => {
      if (typeof response.data !== 'object') { this.err = 'error: 資料格式錯誤' }
      this.quizs = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {

}
.good {
  height: 2em;
}
</style>
