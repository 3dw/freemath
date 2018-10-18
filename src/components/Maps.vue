<template>
  <div class="hello">
    <h1>學習地圖</h1>
    <select  size="1" id = "Range" class="map" name="Range" v-model="myRange">
      <option v-for="r in ranges" v-bind:value="r">{{r.t}}</option>
    </select>
    <button id = "doPrint" class = "map" @click = "printUrl(myRange.t,'.pdf')"> 友善列印 </button>
    <ul class = "print">
      <li v-for = "(i, index) in [1,2,3,4,0,5]">
      <a :href="'/static/maps/'+myRange.t+'/p'+i+'.jpg'" target="_blank">
        <img :src ="'/static/maps/'+myRange.t+'/p'+i+'.jpg'" style="max-width:75vw" alt = ""/>
      </a>
      <div class="divider"></div></li>
    </ul>  
  </div>
</template>

<script>
export default {
  name: 'maps',
  data () {
    return {
      myRange: {t: '小學數學地圖', p: 6},
      ranges: [
        {t: '小學數學地圖', p: 6},
        {t: '國中數學地圖', p: 6},
        {t: '高中數學地圖', p: 6}
      ]
    }
  },
  methods: {
    printUrl: function (title, tail) {
      window.open(
        '/static/maps/' + title + tail,
        '_blank'
      )
    }
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
</style>
