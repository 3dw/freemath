<template lang="pug">
.sub.header#main-tip
  a(@click="prevTip")
    i.chevron.left.icon
  .filler
  .tip
    span(:key="randomTip" v-html="sify(randomTip)")
  .filler
  a(@click="nextTip")
    i.chevron.right.icon
</template>


<script>
import { sify } from 'chinese-conv'

export default {
  name: 'Tips',
  props: ['si'],
  data() {
    return {
      tips: [
        '學習數學，在於秩序。',
        '每日15分鐘，或每日1頁。力久則入。',
        '當孩子卡關，要倒溯「先備知識」。',
        '資優生更需要練習基本功。',
        '教材是死的，教學是活的。',
        '有練習，也要有玩耍。',
        '桌上遊戲和紙牌都是很好的數學活動',
        '各種有秩序的手工藝都和數學相關',
        '廚房是很好的數學教室',
        '進入Google文件點選「列印」即可印出紙本',
        '也可輸出成PDF檔至便利商店列印',
        '按「切換維基百科」鈕可以將各單元連結到百科',
        '按「倒溯與前推」可以將各單元連結到先備和後續知識單元',
        '參考<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/" target="_blank" rel="noopener norefferer">給家長的教學引導</a>',
        '參考<a href="https://www.youtube.com/watch?v=Hnmtv4TKBtc&t=254s" target="_blank" rel="noopener norefferer">數理思維與設計思維</a>'
      ],
      randomTip: ''
    }
  },
  mounted() {
    this.interval = setInterval(this.nextTip, 5000) // 設置定時器
  },
  beforeDestroy() {
    clearInterval(this.interval) // 清除定時器
  },
  methods: {
    sify(t) {
      return this.si ? sify(t) : t
    },
    getRandomTip() {
      const randomIndex = Math.floor(Math.random() * this.tips.length)
      this.randomTip = this.tips[randomIndex]
    },
    prevTip() {
      let currentIndex = this.tips.indexOf(this.randomTip)
      currentIndex = (currentIndex - 1 + this.tips.length) % this.tips.length
      this.randomTip = this.tips[currentIndex]
    },
    nextTip() {
      let currentIndex = this.tips.indexOf(this.randomTip)
      currentIndex = (currentIndex + 1) % this.tips.length
      this.randomTip = this.tips[currentIndex]
    }
  },
  created() {
    this.getRandomTip()
  }
}
</script>

<style scoped>
#main-tip {
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 580px;
  margin: 0 auto;
}

a {
  display: inline;
}

.tip {
  flex-grow: 1;
  overflow: hidden; /* 隱藏超出範圍的內容 */
  position: relative;
  white-space: nowrap; /* 防止文字換行 */
}

.tip span {
  display: inline-block;
  padding-left: 100%; /* 起始位置在右側 */
  animation: marquee 10s linear forwards; /* 播放一次，持續5秒 */
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.filler {
  flex-grow: 1;
}
</style>
