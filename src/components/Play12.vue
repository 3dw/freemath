<template lang="jade">
  .hello
    .ui.segment.container
      h2(v-if = "max[0]['.value'] == 6") ~~加減乘除湊 12~~
      a.ui.yellow.button(v-else, @click="change()") 改成湊 12
      h2(v-if = "max[0]['.value'] == 9") ~~加減乘除湊 24~~
      a.ui.yellow.button(v-else, @click="change()") 改成湊 24
    .ui.segment.container
      .ui.horizontal.list
        .item
          h2(:class = "(max[0]['.value'] == 6 && myNum[0]['.value'] == 12) || (max[0]['.value'] == 9 && myNum[0]['.value'] == 24) ? 'good' : 'bad' ")
            a(v-if = "myNum[0]['.value']" @click="makeCard()") 目前數字：
              .ui.yellow.huge.button {{ myNum[0]['.value'] }}
            span(v-else) 先按一個數字開始
    .ui.container
      .ui.four.cards
        .ui.card(v-for = "(c, $index) in cards" v-show = "unused[$index]['.value']", :class="$index % 2 == 0 ? 'orange' : 'yellow'")
          .ui.vertical.buttons(v-if = "myNum[0]['.value'] != 0")
              a.ui.huge.orange.button(@click = "use($index, c['.value'], '+')") +{{c['.value']}}
              a.ui.huge.yellow.button(@click = "use($index, c['.value'], '-')") -{{c['.value']}}
              a.ui.huge.orange.button(@click = "use($index, c['.value'], '*')") ×{{c['.value']}}
              a.ui.huge.yellow.button(v-show = "myNum[0]['.value'] != 0" @click = "use($index, c['.value'], '/')") ÷{{c['.value']}}
          a(v-if = "myNum[0]['.value'] == 0" @click = "use($index, c['.value'])")
            h1 {{c['.value']}}
    .ui.segment.container
      a.ui.yellow.button(@click="rand(max[0]['.value'])")
        h2 再來!
    .ui.segment.container
      h3 湊12手機App
      .ui.buttons
        a.ui.green.button(href="https://play.google.com/store/apps/details?id=tw.bestian.play12", target="_blank")
          i.google.play.icon
          | Google Play下載
        a.ui.orange.button(href="https://apps.apple.com/us/app/湊12/id1467667119?l=zh&ls=1", target="_blank")
          i.app.store.icon
          | App Store下載
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
      var idx = this.unused.map((o) => o['.value']).indexOf(false)
      var v = this.myNum[0]['.value']
      db.ref('myNum/').update([0])
      var list = this.cards.map(function (o) { return o['.value'] })
      list[idx] = v
      db.ref('cards/').update((list))

      list = this.unused.map(function (o) { return o['.value'] })
      list[idx] = true
      db.ref('unused/').update((list))
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
  justify-content: center;
}

.card.orange {
  background-color: #fe9 !important;    
}

.card.yellow {
  background-color: #ff9 !important;
}

.good {
  color: green;
  background-color: pink;
  padding: .5em;
  border-radius: 15px;
}

.button {
  color: black !important;
}

</style>
