<template lang="pug">
.sub.header#main-tip
  span
    .tip(v-html="sify(randomTip)")
</template>

<script>
import {sify} from 'chinese-conv'

export default {
  name: 'Tips',
  props: ['si'],
  data () {
    return {
      tips: [
        '學習數學，在於秩序。',
        '每日10分鐘，或是每日寫2頁。力久則入。',
        '當孩子卡關，要倒溯他的「先備知識」。',
        '資優生更需要練習基本功。',
        '教材是死的，教學是活的。',
        '有練習，也要有玩耍。',
        '桌上遊戲和紙牌遊戲都是很好的數學思維活動',
        '各種有秩序的手工藝都和數學相關',
        '廚房是很好的數學教室',
        'Tip: 進入Google文件點選列印即可列印教材，或輸出成PDF檔至便利商店列印',
        'Tip: 按「切換維基百科」鈕可以將各單元連結到百科',
        'Tip: 按「倒溯與前推」可以將各單元連結到先備和後續知識單元',
        '參考<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/" target="_blank" rel="noopener norefferer">給家長的教學引導</a>',
        '參考<a href="https://www.youtube.com/watch?v=Hnmtv4TKBtc&t=254s" target="_blank" rel="noopener norefferer">數理思維與設計思維</a>'
      ],
      randomTip: ''
    }
  },
  methods: {
    sify (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    getRandomTip() {
      const randomIndex = Math.floor(Math.random() * this.tips.length);
      this.randomTip = this.tips[randomIndex];
    }
  },
  created() {
    this.getRandomTip();
  }
}
</script>

<style scoped>

#main-tip {
  color: black;
}

</style>
