<template>
  <div class="hello">
    <a class="stone" v-for="u in units" v-bind:style= "{top: u.g * 50 + 200 + 'px', left: u.left * 20 + 'vw' }" :href="u.url" target="_blank">
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  position: relative;
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

</style>
