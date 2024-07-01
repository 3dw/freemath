<template lang="pug">
  .hello
    .ui.container
      .ui.two.doubling.stackable.cards
        .ui.card
          router-link.item(to='/grid' exact='')
            .image
              img(src = "../assets/方格紙產生器.png")
            | {{ sify('方格紙產生器') }}
          .description
           | {{ sify('生成百數表、乘法表等，還可以隨機挖洞') }}
        .ui.card
          router-link.item(to='/card' exact='')
            .image
              img(src = "../assets/閃卡.png")
            | {{ sify('閃卡') }}
          .description {{ sify('自動產生算式和答案' )}}
        .ui.card
          router-link.item(to='/log/_' exact='')
            .image
              img(src = "../assets/摸石頭.png")
            | {{ sify('摸石頭') }}
          .description
           | {{ sify('以摸石頭的介面做學習記錄') }}
        .ui.card
          router-link.item(to='/table' exact='')
            .image
              img(src = "../assets/教材列表.png")
            | {{ sify('教材列表') }}
          .description
           | {{ sify('將教材排列整齊，易於查詢') }}
        .ui.card
          router-link.item(to='/play12' exact='')
            .image
              img(src = "../assets/湊12.png")
            | {{ sify('湊12') }}
          .description
           | {{ sify('四張牌，加減乘除湊12，可以和別人連線一起解謎') }}
        .ui.card
          router-link.item(to='/quiz' exact='')
            .image
              img(src = "../assets/quiz.png")
            | {{ sify('小測驗') }}
          .description
           | {{ sify('隨機題庫小測驗') }}
        .ui.card
          a.item(href = "https://github.com/bestian/mathquiz", target="_blank")
            .image
              img(src = "../assets/mathquiz.jpg")
            | {{ sify('隨機題目生成器') }}
          .description
           | {{ sify('隨機題目生成器，以Haskell編寫') }}
</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: 'Outer',
  props: ['si'],
  data () {
    return {
    }
  },
  methods: {
    sify (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    }
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


.ui.two.doubling.stackable.cards
  .description {
    padding: 1em 1em;
  }

.ui.two.doubling.stackable.cards
  .ui.card .image {
    display: flex !important;
    width: 100%;
    margin: 1em 0;
    justify-content: center;
    align-items: center;
}

</style>
