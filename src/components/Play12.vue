<template lang="jade">
  .hello
    .ui.segment.container
      a(@click="change()")
        h1 加減乘除湊 {{ max[0]['.value'] == 6 ? 12 : 24 }}
    .ui.segment.container
      .ui.horizontal.list
        .item
          h1(:class = "(max[0]['.value'] == 6 && myNum[0]['.value'] == 12) || (max[0]['.value'] == 9 && myNum[0]['.value'] == 24) ? 'good' : 'bad' ")
            a(v-if = "myNum[0]['.value']" @click="makeCard()") 目前數字： {{ myNum[0]['.value'] }}
            span(v-else) 先按一個數字開始
    .ui.four.cards()
      .ui.card(v-for = "(c, $index) in cards" v-show = "unused[$index]['.value']")
        a.ui.top.left.attached.label(v-show = "myNum[0]['.value'] != 0" @click = "use($index, c['.value'], '+')") +{{c['.value']}}
        a.ui.top.right.attached.label(v-show = "myNum[0]['.value'] != 0" @click = "use($index, c['.value'], '-')") -{{c['.value']}}
        a.ui.bottom.left.attached.label(v-show = "myNum[0]['.value'] != 0" @click = "use($index, c['.value'], '*')") ×{{c['.value']}}
        a.ui.bottom.right.attached.label(v-show = "myNum[0]['.value'] != 0" @click = "use($index, c['.value'], '/')") ÷{{c['.value']}}
        a(v-if = "myNum[0]['.value'] == 0" @click = "use($index, c['.value'])")
          h1 {{c['.value']}}
        span(v-else)
          h1 {{c['.value']}}
    .ui.segment.container
      a.ui.green.button(@click="rand(max[0]['.value'])")
        h2 再來!
    br
    br
    br
</template>

<script>

import {db} from '../firebase'

export default {
  name: 'play12',
  data () {
    return {
    }
  },
  firebase: {
    cards: {
      source: db.ref('cards'),
      cancelCallback (err) {
        console.error(err)
      }
    },
    max: {
      source: db.ref('max'),
      cancelCallback (err) {
        console.error(err)
      }
    },
    myNum: {
      source: db.ref('myNum'),
      cancelCallback (err) {
        console.error(err)
      }
    },
    unused: {
      source: db.ref('unused'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  methods: {
    rand: function (max) {
      var list = []
      for (var i = 0; i < this.cards.length; i++) {
        var r = Math.floor(Math.random() * max) + 1
        list[i] = r
      }
      db.ref('cards/').update((list))
      db.ref('myNum/').update([0])
      db.ref('unused/').update([true, true, true, true])
      this.$forceUpdate()
    },
    change: function () {
      if (this.max[0]['.value'] === 6) {
        db.ref('max/').update([9])
      } else {
        db.ref('max/').update([6])
      }
    },
    makeCard: function () {
      var idx = this.unused.indexOf(false)
      var v = this.myNum[0]['.value']
      db.ref('myNum/').update(0)
      var list = this.cards.map(function (o) { return o['.value'] })
      list[idx] = v
      db.ref('cards/').update((list))
    },
    use: function (i, n, op) {
      if (!op) {
        db.ref('myNum/').update([n])
      } else {
        if (op === '+') { db.ref('myNum/').update([this.myNum[0]['.value'] + n]) }
        if (op === '-') { db.ref('myNum/').update([this.myNum[0]['.value'] - n]) }
        if (op === '*') { db.ref('myNum/').update([this.myNum[0]['.value'] * n]) }
        if (op === '/') { db.ref('myNum/').update([this.myNum[0]['.value'] / n]) }
      }

      var list = this.unused.map(function (o) { return o['.value'] })
      list[i] = false
      db.ref('unused/').update((list))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  margin-top: 100px;
}

a {
  color: #35495E;
}

.label {
  font-size: 1.5em;
}

h1 {
  font-size: 4em !important;
}

.card {
  height: 50vh;
  justify-content: center;
}

.good {
  color: green;
  background-color: pink;
}

</style>
