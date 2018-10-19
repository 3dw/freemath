<template>
  <div class="hello">
    <h1>學習地圖</h1>
    <div class="ui segment container no-print">
      <h1 class="ui header">如何使用：</h1>
      <div class="ui large ordered list">
        <div class="item">
          選擇適合年段的地圖下載印出
        </div>
        <div class="item">
          用筆圈出己經會的單元
        </div>
        <div class="item">
          用筆圈出不太會的單元(可打問號)
        </div>
        <router-link class = 'item ' to='/' exact=''>
          <i class="home icon" />回首頁下載相關教材
        </router-link>
        <div class="item">
          遇到問題可上
          <a class="item" href="https://www.facebook.com/groups/156709241062806/" target="_blank">
            <i class="facebook icon" />自學數學團
          </a>提問
        </div>
      </div>
      <div class="ui form no-print">
        <div class="field">
          <select id = "Range" class="map" name="Range" v-model="myRange">
            <option v-for="r in ranges" v-bind:value="r">{{r.t}}</option>
          </select>
          <button class = "ui large green button" id = "doPrint" @click = "printUrl(myRange.t,'.pdf')"> 友善列印
          </button>
        </div>
      </div>
    </div><!-- Segment END -->
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
