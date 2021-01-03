<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('八、互為主體、交互佈題法') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('「道甚易知，甚易行。」 -- 老子《道德經》') }}

            p {{ sify('在反客為主法當中，我們看過由學生扮演老師，對學習者自我組織、自我檢查的幫助。') }}
            br
            p {{ sify('但是，如果學生的知識，根本就缺乏組織，這種方法就跑不起來了。') }}
            p {{ sify('怎麼辦呢？我們必需示範如何組織。') }}
            br
            p {{ sify('但是，學生的專注力和理解力，也不一定撐得住長期間的示範。怎麼辦呢？') }}
            p {{ sify('在互動現場，我體悟的方法是，交互進行。') }}
            br
            p {{ sify('交互佈題的方法，說穿了真的很簡單，就是輪流出問題，你出一題給我做，我出一題給你做。') }}
            br
            p {{ sify('教學的要訣在於，在當解題者的時候，一定要把自己的想法講清楚，並且把解想過程具象化，用棋子、假錢等道具排出來。這就是思路的示範。您是在解題，也是在示範怎樣解題。') }}
            br
            p {{ sify('學生站在出題者的立場，他會經歷組織和創造，也會專注觀察你的作法。') }}
            br
            p {{ sify('等到下一題輪流之後，你所佈的問題，他就會試著以新觀察到的策略來處理。有可能走偏或卡住，需要一些介入支持，但是再轉一兩次，可能就熟悉而不必介入和指點，能自己解決了。') }}
            br
            p {{ sify('那時，再輪到您來佈題時，就可再增加一點變化。增加一點點就好。') }}
            br
            p {{ sify('像 x + 2 = 6、x + 3 = 10、x + 9 = 15...這樣都是「加」的問題，變換一點點的話，可能是變成 x - 4 = 3、x - 2 = 7、x - 9 = 8...這樣都是「減」的問題。輪幾輪再變成「乘」「除」之類。') }}
            br
            p {{ sify('或是說，像用棋子排乘法的活動，練習操作上的湊十，也可以在個位乘個位的地方，轉個幾輪，再進到個位乘十位。') }}
            br
            p {{ sify('這個轉的速度要多快還是多細緻，完全是看學習者掌握新概念和新方法的實際情況。如果是很快的孩子，這個輪轉的進階速度可以很快；如果是比較需要耐心陪伴的孩子，那麼就要轉慢一點。') }}
            br
            p {{ sify('交互佈題法，在轉的過程，基調是一種反客為主式的前推。') }}
            p {{ sify('轉到新概念發現若學生先備知識不足，即席去補足它時，就是一種面對錯誤式的倒溯。') }}
            p {{ sify('往下一圈轉的判斷，是來自評估適度的練習。') }}
            p {{ sify('在佈題時採用的具體操作活動，是為了累積具體經驗。') }}
            br
            p {{ sify('整個過程在心理上的作法，因為打破了「單向講述」「老師出題學習解題」「考試評分」這些讓人產生心理壓力的關係設定，所以具有繞開心理障礙的繞道功效。') }}
            br
            p {{ sify('我們可以說，互動八法當中，互為主體、交互佈題法是最簡單的。') }}
            br
            p {{ sify('「你出一題給我做，我出一題給你做。」這誰都會。') }}
            br
            p {{ sify('但是要運轉愈來愈得好，就需要所有其他七法的基礎，以及實際的一手經驗。') }}
            br
            p {{ sify('經驗的部份，我不能替您累積，祝您在互動的經驗中，愈來愈自在歡喜。') }}
    .ui.grid.container
      .three.column.doubling.row
        .column
          router-link(to = "/one1") {{ sify('一、倒溯法')}}
        .column
          router-link(to = "/one2") {{ sify('二、前推法')}}
        .column
          router-link(to = "/one3") {{ sify('三、具體經驗')}}
        .column
          router-link(to = "/one4") {{ sify('四、繞道法--渡過心理障礙')}}
        .column
          router-link(to = "/one5") {{ sify('五、主客易位法')}}
        .column
          router-link(to = "/one6") {{ sify('六、面對錯誤')}}
        .column
          router-link(to = "/one7") {{ sify('七、適度的練習')}}
        .column
          router-link(to = "/one8") {{ sify('八、互為主體、交互佈題法')}}
        .column
          router-link(to = "/one9") {{ sify('數學學習診斷是什麼？')}}

</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: '互為主體、交互佈題法',
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
.column {
  text-align: left;
}
</style>
