<template lang="pug">
  .hello
    .ui.container
      //.ui.segment
        p(v-for = "q in quizs", :key = "q.q")
          | {{ q.q }} {{ q.as }} {{q.t}}
      h1(v-if = "err") {{err}}
      div(v-if='myQ.q')
        img.q(v-if = "myQ.img", :src="myQ.img")
        h1.ui.header
          | {{myQ.q}}
          h4.sub.header {{myQ.c}}(等級{{myQ.l}})
        .ui.buttons
          a.ui.huge.orange.button(:class="myA == a ? 'green' : 'gray'", v-for='a in myQ.as', @click='myA = a; check(a, myQ.t)')
            | {{a}}
      h1(v-if='win')
        a(@click='resetO()') 你答對了！按Enter鍵或點這裡繼續...
          img.good(src="../assets/th.jpg")
      h1(v-if='wrong') 不對喔，請再加油！
      hr(v-if="myQ.q")
      div
        .ui.buttons
          a.ui.red.large.basic.button(v-if='myQ.q && myLev > 1', @click='levup(-1)')
            | 降級測驗
          a.ui.green.large.button(v-if='myQ.q', @click='resetO()')
            | 同級測驗
          a.ui.orange.large.basic.button(v-if='myQ.q && myLev < maxLev', @click='levup(1)')
            | 升級測驗
      hr(v-if="myQ.q")
      div
        h3 選擇單元
        .ui.buttons
          a.ui.large.button(:class="myC == c ? 'green' : 'gray'", v-for='c in myCs', @click='setC(c)')
            | {{c}}
          a.ui.large.blue.button(@click='reset()')
            | 隨機

</template>

<script>

export default {
  name: 'Quiz',
  data () {
    return {
      err: null,
      myQ: {q: ''},
      myA: undefined,
      win: false,
      wrong: false,
      myC: undefined,
      myLev: 1,
      maxLev: 3,
      quizs: [],
      myQuizs: [],
      myCs: ['加法', '減法', '乘法', '除法', '正負數', '圓與角']
    }
  },
  methods: {
    setC (c) {
      this.myC = c
      this.resetO()
    },
    reset () {
      this.myLev = 1
      this.myC = this.myCs[Math.floor(Math.random() * this.myCs.length)]
      this.resetO()
    },
    keyH (event) {
      if (event.keyCode === 13) {
        this.resetO()
      }
    },
    resetO () {
      const lastQ = this.myQ || {q: ''}
      var lev = this.myLev
      var c = this.myC
      this.maxLev = this.quizs.filter((o) => { return o.c === c }).map((o) => { return o.l }).sort((a, b) => { return b - a })[0]

      if (lev > this.maxLev) {
        lev = this.maxLev
      }
      this.myQuizs = this.quizs.filter((o) => { return o.l === lev && o.c === c })
      while (lastQ.q === this.myQ.q) {
        this.myQ = this.myQuizs[Math.floor(Math.random() * this.myQuizs.length)]
      }
      this.win = false
      this.wrong = false
      this.myA = undefined
      this.$forceUpdate()
    },
    levup (n) {
      this.myLev += n
      this.resetO()
    },
    check (a, b) {
      if (a === Number(b)) {
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
    var vm = this
    for (let i = 0; i < this.myCs.length; i++) {
      var d = 1
      let c = this.myCs[i]
      this.$http.get('/static/' + c + '.md').then(response => {
        let list = response.data.split('\n')
        let lev = -1
        for (let k = 0; k < list.length; k++) {
          let line = list[k]
          let qa = line.split(/[?？]\s+/)
          if (qa.length === 1) {
            lev++
          } else {
            qa[0] = qa[0].replace(/!\[如圖\]\((.*png)(.*)\)/, '如圖')
            let obj = {
              c: c,
              l: lev,
              q: qa[0],
              as: [],
              t: qa[1],
              img: RegExp.$1
            }
            let r = Math.floor(Math.random() * 4)
            d = parseInt(qa[2])
            if (!d || d === 0 || isNaN(d)) {
              d = 1
            }
            for (let a = parseInt(qa[1]) - r * d; a < qa[1] - r * d + 4 * d; a += d) {
              obj.as.push(a)
            }
            vm.quizs.push(obj)
          }
        }
      })
    }
    /* this.$http.get('/static/quizs.json').then(response => {
      if (typeof response.data !== 'object') { this.err = 'error: 資料格式錯誤' }
      this.quizs = response.data
    }) */
    window.addEventListener('keyup', this.keyH)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyH)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img.q {
  width: 300px;
}

.hello {

}
.good {
  height: 2em;
}
</style>
