<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('二、前推法') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('『牽一髮，動全身』--成語') }}

            p {{ sify('上節談到先備知識。') }}
            p {{ sify('如果A是B的先備知識，我們可以說B是A的後續知識。') }}
            p {{ sify('當一個知識環節有漏洞時，它的後續知識必然也不紮實。') }}
            br
            p {{ sify('比方說，三角函數是畢式定理的後續知識。') }}
            p {{ sify('如果小孩對什麼是畢氏定理、如何推導都不清楚，那麼他在三角函數方面的知識，肯定結構鬆散，難以應用。') }}
            br
            p {{ sify('『小學的乘法也是如此。如果連加法都不能掌握，自然難以掌握乘法。') }}
            p {{ sify('『這樣的小孩，就算會背九九乘法表，也只是死記下來的，因為他不瞭解乘法表裡面的數學結構。') }}
            br
            p {{ sify('『這不能怪小孩，因為他也不知道自己哪裡有漏洞、哪個環節不紮實。') }}
            p {{ sify('『因此，才需要協助。') }}
            br
            p {{ sify('『如果在教學過程中，用倒溯法找到了一個根本的漏洞A，也教會了小孩。那麼馬上可以知道，A的後續B、C、D，就是接下來的目標。') }}
            br
            p {{ sify('『因為原本不懂A，所以他的B、C、D一定都是漏洞。') }}
            p {{ sify('『打鐵趁熱，在剛剛明白A的情況下，他在一貫的脈絡下，接著去學B、C、D，肯定事半功倍。') }}
            p {{ sify('而且學習後續知識的過程，也是在複習先備知識A。') }}
            br
            p {{ sify('舉例而言，如果長方形的面積公式原理是漏洞，那麼補完它後，平行四邊形、三角形和梯形的面積公式原理，就是接下來的目標。') }}
            br
            p {{ sify('同理，如果配方法是漏洞，那麼補完它後，一元二次方程式的公式解就是接下來的目標。') }}
            br
            p {{ sify('其實，追蹤後續知識的方法，對需要延伸的小孩，也很有用。') }}
            p {{ sify('資優與程度較高的小孩，常會覺得課內的東西太簡單、太無聊，沒法子填飽他的胃口。') }}
            p {{ sify('如果像一些所謂的『資優班』那樣，在同樣的小範圍中，出一堆鑽牛角尖、刁難人的題目，無疑是抹殺他們的才智。') }}
            br
            p {{ sify('追蹤後續知識，可以找到他實際的程度，避免在已經會的東西上打轉。我們可以一直前推到超出範圍，不受限於課本，接觸更深更廣的題材。這樣他們才會對學習數學，有真正的興趣和成就感。') }}
            br
            p {{ sify('上節的『倒溯法』是從不會的地方開始，由前往後，追蹤先備知識。') }}
            br
            p {{ sify('從會了的地方開始，由後往前，追蹤後續知識的方法，我稱為『前推法』。') }}
            br
            h3 {{ sify('學習地圖與前推法') }}
            p {{ sify('那麼，我們要如何得知一個單元需要的後績知識呢？如果我們自己很熟悉該單元，當然這是不難的，我們從我們的記憶庫中去查詢即可得知。') }}
            br
            p {{ sify('但是，如果不是這麼熟的話，一些輔助的工具就可以幫助我們查找後績知識。') }}
            br
            p {{ sify('例如，自由數學裡的學習地圖，就是一個實用的工具。') }}
            h3 {{ sify('練習') }}
            ol.ui.ordered.list
              li.item {{ sify('請查找「分數」的後績知識') }}
              li.item {{ sify('請查找「因數與倍數」的後績知識') }}
              li.item {{ sify('請查找「正負數」的後績知識') }}
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
  name: '前推法',
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
