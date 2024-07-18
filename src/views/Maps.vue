<template lang="pug">
  .hello
    .ui.container.segment
      br
      .ui.left.aligned.segment.container.no-print
        h1 攀岩式學習地圖
        h3.ui.header 如何使用：
        .ui.large.ordered.list
          .item 選擇適合年段的地圖下載印出
          .item 用筆圈出己經會的單元
          .item 用筆圈出不太會的單元(可打問號)
          router-link.item(to='/trace' exact='')
            i.sort.amount.icon
            | 下載相關教材
          .item
            | 遇到問題可上
            a.item(href='https://www.facebook.com/groups/156709241062806/' target='_blank')
              i.facebook.icon
              | 自學數學團提問

        .ui.divider

        .ui.grid.no-print
          label 選擇年段：
          br.thin-only
          .ui.stackable.row
            .four.wide.column(v-for='(r, l) in ranges' :key="'range' + l")
              .ui.radio.checkbox
                input(type='radio' name='year' v-bind:value='r' v-model='myRange')
                label.clickable(@click='myRange = r') {{ r.t }}
          .ui.row.text-center
            button.ui.large.green.button#doPrint(@click='printUrl(myRange.t,".pdf")')
              | 友善列印

      ul.print
        li(v-for='i in [1,2,3,4,0,5]' :key="'print' + i")
          a(:href="'/static/maps/' + myRange.t + '/p' + i + '.jpg'" target='_blank')
            img(:src="'/static/maps/' + myRange.t + '/p' + i + '.jpg'" style='max-width:75vw' alt='')
          .divider
</template>

<script>
export default {
  name: 'maps',
  data() {
    return {
      index: undefined,
      myRange: { t: '小學數學地圖', p: 6 },
      ranges: [
        { t: '小學數學地圖', p: 6 },
        { t: '國中數學地圖', p: 6 },
        { t: '高中數學地圖', p: 6 }
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
    printUrl: function(title, tail) {
      window.open('/static/maps/' + title + tail, '_blank')
    }
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

.image {
  cursor: pointer;
  width: 16%;
}

.ui.container.segment {
  background-color: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  padding: 2em;
}

.ui.header {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  margin-bottom: 0.5em;
}

.ui.large.ordered.list .item {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.ui.radio.checkbox label {
  font-size: 1.1em;
  cursor: pointer;
}

.ui.button {
  background-color: #21ba45;
  color: white;
  font-size: 1.2em;
}

.ui.divider {
  margin: 2em 0;
}

.print img {
  max-width: 75vw;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.print .divider {
  margin-top: 1em;
}
</style>
