<template>
  <div class="hello">
    <br/> 
    <h1>閃卡</h1>    
    <div class="ui labeled input">
      <div class="ui label">上限</div>
      <input id="r" type="number" v-model="range" step = "5" autofocus="">
    </div>
    <div class="ui centered card clickable" v-show="!flip" @click="flipCard()">
      <h1 class="ui header">{{ n1 }} + {{ n2 }}</h1>
    </div>   
    <div class="ui centered card clickable" v-show="flip" @click="flipCard()">
      <h1 class="ui blue header">{{ n1 + n2 }}</h1>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      flip: false,
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
