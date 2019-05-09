<template lang="jade">
  .hello
    .ui.segment.container
      a(@click="change()")
        h1 加減乘除湊 {{ max[0]['.value'] == 6 ? 12 : 24 }}
    .ui.four.cards
      a.ui.card(v-for = "c in cards", @click="rand(max[0]['.value'])")
        h1 {{c['.value']}}
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
      // Optional, allows you to handle any errors.
      cancelCallback (err) {
        console.error(err)
      }
    },
    max: {
      source: db.ref('max'),
      // Optional, allows you to handle any errors.
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
    },
    change: function () {
      if (this.max[0]['.value'] === 6) {
        db.ref('max/').update([9])
      } else {
        db.ref('max/').update([6])
      }
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

h1 {
  font-size: 4em !important;
}

.card {
  height: 50vh;
  justify-content: center;
}

</style>
