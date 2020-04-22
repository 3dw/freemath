<template lang="pug">
  .hello
    .ui.container
      .ui.two.stackable.cards
        .ui.card
          router-link.item(to='/card' exact='')
            .image
              img(src = "../assets/閃卡.png")
            | 閃卡
          .description 自動產生算式和答案
        .ui.card
          router-link.item(to='/grid' exact='')
            .image
              img(src = "../assets/方格紙產生器.png")
            | 方格紙產生器
          .description
           | 生成百數表、乘法表等，還可以隨機挖洞
        .ui.card
          router-link.item(to='/log/_' exact='')
            .image
              img(src = "../assets/摸石頭.png")
            | 摸石頭
          .description
           | 以摸石頭的介面做學習記錄
        .ui.card
          router-link.item(to='/table' exact='')
            .image
              img(src = "../assets/教材列表.png")
            | 教材列表
          .description
           | 將教材排列整齊，易於查詢
        .ui.card
          router-link.item(to='/play12' exact='')
            .image
              img(src = "../assets/湊12.png")
            | 湊12
          .description
           | 四張牌，加減乘除湊12，可以和別人連線一起解謎
        .ui.card
          router-link.item(to='/quiz' exact='')
            | 小測驗
          .description
           | 隨機題庫小測驗
</template>

<script>

export default {
  name: 'Outer',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  margin-top: 100px;
}

.item {
  font-size: 2em;
  margin: .5em;
}

.card {
  min-height: 200px !important;
  justify-content: center;
  align-items: center;
}

img {
  height: 200px;
}

.image {
  margin: .5em;
}

a {
  position: relative;
  top: 0;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

a:hover {
  position: relative;
  top: -5px;
}

</style>
