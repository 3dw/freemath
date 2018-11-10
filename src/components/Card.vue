<template>
  <div class="hello">
    <br/> 
    <h1>閃卡</h1>    
    <h3>按ENTER鍵開始</h3>
    <div class="ui form container no-print">
      <div class="field">
        <div class="ui labeled input">
          <div class="ui label">上限</div>
          <input id="r" type="number" v-model="range" step = "5" autofocus="">
        </div>
      </div>
      <label>選擇算法：</label>
      <div class="field" v-for="o in ops">
        <div class="ui radio checkbox">
          <input type="radio" name="year"v-bind:value="o.v" v-model = "op">
          <label class="clickable" @click = "op = o.v">{{o.t}}</label>
        </div>
      </div>
    </div>    
    
    <div class="ui centered card clickable" v-show="!flip" @click="flipCard()">
      <h1 class="ui header" v-if = "op == '+'">{{ n1 }} + {{ n2 }}</h1>
      <h1 class="ui header" v-if = "op == '-'">{{ n1 }} - {{ n2 }}</h1>
      <h1 class="ui header" v-if = "op == '*'">{{ n1 }} × {{ n2 }}</h1>
    </div>   
    <div class="ui centered card clickable" v-show="flip" @click="flipCard()">
      <h1 class="ui blue header" v-if = "op == '+'">{{ n1 + n2 }}</h1>
      <h1 class="ui blue header"  v-if = "op == '-'">{{ n1 - n2 }}</h1>
      <h1 class="ui blue header"  v-if = "op == '*'">{{ n1 * n2 }}</h1>
    </div>     
  </div>
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
      this.n1 = Math.floor(Math.random() * this.range)
      this.n2 = Math.floor(Math.random() * this.range)
    }
  },
  mounted () {
    this.reset()
    window.addEventListener('keydown', this.flipCard)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
}

.card {
  height: 50vh;
  justify-content: center;
}

</style>
