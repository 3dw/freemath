<template lang="pug">
  .hello
    .ui.segment.container
      h2(v-if = "play12.max[0] == 6") ~~加減乘除湊 12~~
      a.ui.yellow.button(v-else, @click="changeCards()") 改成湊 12
      h2(v-if = "play12.max[0] == 9") ~~加減乘除湊 24~~
      a.ui.yellow.button(v-else, @click="changeCards()") 改成湊 24
    .ui.segment.container
      .ui.horizontal.list
        .item
          h2(:class = "(play12.max[0] == 6 && play12.myNum[0] == 12) || (play12.max[0] == 9 && play12.myNum[0] == 24) ? 'good' : 'bad' ")
            a(v-if = "play12.myNum[0]" @click="makeCard()") 目前數字：
              .ui.yellow.huge.button {{ play12.myNum[0] }}
            span(v-else) 先按一個數字開始
    .ui.container
      .ui.four.cards
        .ui.card(v-for = "(c, $index) in play12.cards" :class="$index % 2 == 0 ? 'orange' : 'yellow'")
          .ui.vertical.buttons(v-if = "play12.myNum[0] != 0 && play12.unused[$index]")
              a.ui.huge.orange.button(@click = "useC($index, c, '+')") +{{c}}
              a.ui.huge.yellow.button(@click = "useC($index, c, '-')") -{{c}}
              a.ui.huge.orange.button(@click = "useC($index, c, '*')") ×{{c}}
              a.ui.huge.yellow.button(v-show = "play12.myNum[0] != 0" @click = "use($index, c, '/')") ÷{{c}}
          a(v-if = "play12.myNum[0] == 0" @click = "useC($index, c)")
            h1 {{c}}
    .ui.segment.container(v-if = "play12")
      a.ui.yellow.button(@click="rand(play12.max[0])")
        h2 再來!
    // .ui.segment.container
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

export default {
  name: 'play12',
  props: ['play12'],
  data () {
    return {
    }
  },
  methods: {
    rand: function (max) {
      this.$emit('rand', max)
    },
    changeCards: function () {
      this.$emit('changeCards')
    },
    makeCard: function () {
      this.$emit('makeCard')
    },
    useC: function (i, n, op) {
      this.$emit('useC', i, n, op)
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
