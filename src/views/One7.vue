<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('七、適度的練習') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('「譬如為山，未成一簣，止，吾止也；譬如平地，雖覆一簣，進，吾往也。」 -- 《論語》') }}

            p {{ sify('「過度操練會折損天才」這句話大家耳熟能詳。但是，朱佳仁老師的名言：「資優生更需要磨練基本功」卻鮮為人知。') }}
            br
            p {{ sify('不只資優生，任何學數學的人，面對反覆的工具操練，多半不覺有趣，只因必要，所以勉而為之。') }}
            p {{ sify('就像籃球選手要投得準，必須經歷反覆定點投籃的練習，比之自由對抗，當然無趣得多。只是大家都知道，唯有練好準頭，在自由對抗時才能充份發揮。') }}
            br
            p {{ sify('數學上，怎樣的操練叫過度？怎樣的操練叫適度呢？') }}
            br
            p {{ sify('首先，在沒有概念的情況下去操練，是有害的。如果根本沒概念，那麼操練的只是機械動作，結果是硬背了計算程序卻不明其意，大大不好。') }}
            br
            p {{ sify('因此，如果遇到沒有概念的練習題，要先把概念學起來，或是邊練邊學，總之不能硬背解題程序。') }}
            br
            p {{ sify('「先備概念不清」是指導者的介入點。如果學生自己沒有察覺，就要介入來幫助他。') }}
            br
            p {{ sify('具體的方式是另外拿一張白紙來解釋概念，確定懂了再回頭寫題目。') }}
            br
            p {{ sify('再者，已經熟練了還反覆操練相同的題型，是有害的。所謂熟練就是不用花很多力氣思考，可以直接依以知的程序流暢解題。到這種程度就該進階了，紙張上的題目數量是參考用，不一定要全寫完。') }}
            br
            p {{ sify('可以使用一個簡單的規則：如果學生覺得自己都會了，就一口氣連寫三題，如果都對，同類型的題目就可以跳過不寫，直接走下個階梯。這種方法可以確定是否真的熟練，也能讓小孩依自己的速度前進，避免過度操練。') }}
            br
            p {{ sify('有的小孩曾被不當地要求「就算會了也要乖乖寫完」，而養成了不利的學習習慣。因此，「已經熟練了」的情況也是指導者的介入點。讓學生知道「連寫三題都對可跳關」的規則，就能幫助他回到自己的速度。（如果不是三題全對表示還不夠熟，要再練幾下）') }}
            br
            p {{ sify('操練是一個從會到熟的過程。如果完全不會，就要先學再練；如果已經熟達，那就應該進到生活應用，或是走下個階梯。只有會而不熟的工具能力，才是需要練習的。') }}
            br
            p {{ sify('教材是死的，教學是活的。一個好的操練課堂，就是把個別教學溶入練習的節奏。學和練要像左右腳那樣，相互搭配向前。') }}
            br
            p {{ sify('在家自學或其他一對一的情境，也是一樣的原則。') }}
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
  name: '適度的練習',
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
