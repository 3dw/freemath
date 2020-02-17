<template>
  <div class="hello">
    <br/>
    <h1>攀岩式學習地圖</h1>
    <div class="ui left aligned segment container no-print">
      <h3 class="ui header">如何使用：</h3>
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
        <div class="inline fields">
          <label>選擇年段：</label>
          <div class="field" v-for="r in ranges">
            <div class="ui radio checkbox">
              <input type="radio" name="year"v-bind:value="r" v-model = "myRange">
              <label class="clickable" @click = "myRange = r">{{r.t}}</label>
            </div>
          </div>
          <div class="field">
            <button class = "ui large green button" id = "doPrint" @click = "printUrl(myRange.t,'.pdf')"> 友善列印
            </button>
          </div>
        </div>
      </div>
    </div><!-- Segment END -->

    <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
    <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>

   <!-- <ul class = "print">
      <li v-for = "(i, index) in [1,2,3,4,0,5]">
        <a :href="'/static/maps/'+myRange.t+'/p'+i+'.jpg'" target="_blank">
          <img :src ="'/static/maps/'+myRange.t+'/p'+i+'.jpg'" style="max-width:75vw" alt = ""/>
        </a>
      <div class="divider"></div></li>
    </ul>   -->
  </div>
</template>

<script>

import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  name: 'maps',
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      index: undefined,
      myRange: {t: '小學數學地圖', p: 6},
      ranges: [
        {t: '小學數學地圖', p: 6},
        {t: '國中數學地圖', p: 6},
        {t: '高中數學地圖', p: 6}
      ],
      images: [
        '/static/maps/小學數學地圖/p0.jpg',
        '/static/maps/小學數學地圖/p1.jpg',
        '/static/maps/小學數學地圖/p2.jpg',
        '/static/maps/小學數學地圖/p3.jpg',
        '/static/maps/小學數學地圖/p4.jpg',
        '/static/maps/小學數學地圖/p5.jpg',
        '/static/maps/國中數學地圖/p0.jpg',
        '/static/maps/國中數學地圖/p1.jpg',
        '/static/maps/國中數學地圖/p2.jpg',
        '/static/maps/國中數學地圖/p3.jpg',
        '/static/maps/國中數學地圖/p4.jpg',
        '/static/maps/國中數學地圖/p5.jpg',
        '/static/maps/高中數學地圖/p0.jpg',
        '/static/maps/高中數學地圖/p1.jpg',
        '/static/maps/高中數學地圖/p2.jpg',
        '/static/maps/高中數學地圖/p3.jpg',
        '/static/maps/高中數學地圖/p4.jpg',
        '/static/maps/高中數學地圖/p5.jpg'
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

.image {
  cursor: pointer;
  width: 16%
}

</style>
