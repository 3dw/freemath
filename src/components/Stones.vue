<template>
  <div class="hello">
    <div class="ui input">
      <input id="find" type="text" v-model="s" placeholder="輸入關鍵字或年級" autofocus="">
    </div>
    <a class="stone" v-bind:class = "{ checked: u.checked }" v-for="u in units" v-bind:style = "{top: u.g * 50 + 200 + 'px', left: u.left * 20 + 'vw' }" v-show="!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)" :href="u.url" target="_blank">
      <img :src="'https://www.google.com/s2/favicons?domain='+u.url" />
      {{ u.n }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'stones',
  props: ['units'],
  data () {
    return {
      s: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: absolute;
  top: 0;
  left: 0;
  height: 120vh;
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

.ui input {
  position: fixed;
  top: 100px;
  left: 45vw;
  z-index: 999;
}

</style>
