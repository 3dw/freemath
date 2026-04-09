<template lang="pug">
  .hello
    br
    h2 閃卡
    h3 （按任意鍵翻牌）
    .ui.form.container.no-print
      .inline.fields
        .field
          .ui.labeled.input
            .ui.label 數字下限
            input#r(type='number' v-model='min' step='5')
        .field
          .ui.labeled.input
            .ui.label 數字上限
            input#r(type='number' v-model='range' step='5' autofocus='')
      .inline.fields
        label 選擇算法：
        .field(v-for='o in ops')
          .ui.radio.checkbox
            input(type='radio' name='year' v-bind:value='o.v' v-model='op')
            label.clickable(@click='op = o.v') {{o.t}}
    .ui.centered.red.card.clickable(v-if='!flip' @click='flipCard()')
      h1.ui.header(v-if="op == '+'") {{ n1 }} + {{ n2 }} = ?
      h1.ui.header(v-if="op == '-'") {{ n1 }} - {{ n2 }} = ?
      h1.ui.header(v-if="op == '*'") {{ n1 }} &times; {{ n2 }} = ?
    .ui.centered.orange.fliped.card.clickable(v-else='' @click='flipCard()')
      h1.ui.blue.header(v-if="op == '+'") {{ n1 + n2 }}
      h1.ui.blue.header(v-if="op == '-'") {{ n1 - n2 }}
      h1.ui.blue.header(v-if="op == '*'") {{ n1 * n2 }}
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      flip: false,
      op: '+',
      ops: [
        {v: '+', t: '+'},
        {v: '-', t: '-'},
        {v: '*', t: '×'}
      ],
      n1: 0,
      n2: 0,
      min: 0,
      range: 10
    }
  },
  methods: {
    flipCard: function () {
      if (this.flip) {
        this.reset()
        this.flip = false
      } else {
        this.flip = true
      }
    },
    reset: function () {
      this.n1 = Math.floor(Math.random() * (this.range - this.min)) + Number(this.min)
      this.n2 = Math.floor(Math.random() * (this.range - this.min)) + Number(this.min)
    }
  },
  mounted () {
    this.reset()
    window.addEventListener('keyup', this.flipCard)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyH)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

h1 {
  font-size: 4em !important;
  margin-left: 0.5em !important;
}

.card {
  height: 50vh;
  justify-content: center;
}

.card.orange {
  background-color: #fc9 !important;
}

.card.red {
  background-color: #fcc !important;
}

.card.fliped .header {
  font-size: 10em !important;
}

</style>
