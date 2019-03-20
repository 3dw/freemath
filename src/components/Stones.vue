<template>
  <div class="hello">
    <div class="ui input">
      <input id="find" type="text" v-model="s" placeholder="輸入關鍵字或年級" autofocus="">
    </div>
    <div class = "stone" v-bind:class = "{ checked: my.indexOf('_' + u.n) > -1 }" v-for="u in units" v-bind:style = "{top: u.g * 50 + 200 + 'px', left: u.left * 20 + 'vw' }" v-show="!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)">
      <a :href = "u.url" target="_blank"><img :src="'https://www.google.com/s2/favicons?domain='+u.url" /></a>
      <a @click="check(u)" @dblclick="goto(u)">
      {{ u.n }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stones',
  props: ['units'],
  data () {
    return {
      s: '',
      my: ''
    }
  },
  methods: {
    goto (u) {
      window.open(u.url)
    },
    check (u) {
      if (this.my.indexOf('_' + u.n) === -1) {
        this.my = this.my + ',' + '_' + u.n
      } else {
        this.my = this.my.replace(',' + '_' + u.n, '')
        this.my = this.my.replace('_' + u.n, '')
      }
      this.my = this.my.replace('_,', '')
      this.my = this.my.replace('_undefined', '')
      this.$router.push('/stones/' + this.my)
    }
  },
  mounted () {
    this.my = '_' + this.$route.params.my
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: absolute;
  top: 0;
  left: 0;
  height: 500vh;
  width: 100vw;
  background-color: black;
}

.stone {
  font-size: 15px;
  position: absolute;
  padding: 1vw;
  width: 15vw;
  border-radius: 15px;
  border: 3px gold ridge;
  background-color: white; 
}

.stone:hover {
  z-index: 999;
}

.stone.checked {
  background-color: #9f9;
}

.ui input {
  position: fixed;
  top: 100px;
  left: 45vw;
  z-index: 999;
}

</style>
