<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('五、主客易位法') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('『人都願意改變，只是不喜歡被改變』--西諺') }}

            p {{ sify('前面提到了倒溯、前推、具體經驗和繞道法。') }}
            p {{ sify('本節介紹一種和倒溯、前推相關，但是更強力的方法。這也是我最喜歡的方法。') }}
            br
            p {{ sify('在複習一整學期、一整年甚至三年的範圍時，小孩往往會不知從何下手。') }}
            p {{ sify('很多人寫了一大堆題目，把自己弄得頭昏眼花，效果還是很有限，為什麼呢？') }}
            br
            p {{ sify('其實，在寫題目之前，有更基本的工夫，就是把觀念整理清楚。') }}
            p {{ sify('這就像是蓋房子要先打地基。地基不穩，再怎麼蓋，很快也就垮壞了。') }}
            br
            p {{ sify('要整理觀念的話，在每個章節寫一兩題，不會的地方查課本，徹底弄懂，也就夠了。在整理觀念的階段，過度操練絕對有害無益。大量練習只有在觀念清楚之後才有好處。') }}
            br
            p {{ sify('如果小孩的表達能力還不錯，下面的複習方法相當有益：') }}
            br
            p {{ sify('方法就是反客為主，不是我去教他，而是他來教我。我常說『把我當成不會的人』。') }}
            br
            p {{ sify('比方說，有一次幫朋友複習國中三年的範圍，我就請他帶著課本，把我當成不會的人來教。') }}
            p {{ sify('過程中，每當我覺得邏輯怪怪的、聽不懂，就會提出來問。如果他說不出個所以然，代表這部份觀念不清，是個漏洞。') }}
            p {{ sify('一發現漏洞所在，我就針對它來講解。講解完了，再回頭扮演『學生』的角色，聽他講述。') }}
            br
            p {{ sify('其實，只要小孩能清楚解釋的概念，他自己一定就是會的。') }}
            p {{ sify('反之，無法解釋的部份，一定就是知識系統的漏洞。') }}
            br
            p {{ sify('這就像要清一條河的水道，就讓水自己去流，遇到卡住的地方再去清理即可。') }}
            p {{ sify('當小孩發現自己解釋不出來時，也會比較虛心向學、認真聽講。') }}
            p {{ sify('不然，無論幫他複習什麼，他可能都會說：我學過了！我已經會了！') }}
            br
            p {{ sify('這個清水道的過程有幾個優點：') }}
            br
            p {{ sify('第一，它很有效率。') }}
            p {{ sify('第二，雙方的角色完全是合作的，而不是對立的。') }}
            p {{ sify('第三，小孩在過程中會培養自己組織知識、檢視知識和表達的能力。') }}
            p {{ sify('第四，大人就算自己完全不懂，還是可以用這種方法，幫小孩複習，自己也順便學一點數學。') }}
            br
            p {{ sify('最後，當小孩解釋不出來時，千萬不要罵他笨。') }}
            p {{ sify('這個方法是在找他需要補強之處，所以有很多解釋不出來的地方是應該的。') }}
            p {{ sify('大人應該慶幸：我終於瞭解，他在這麼基礎的地方也需要幫忙。') }}
            br
            p {{ sify('這種方法我十分喜歡。') }}
            p {{ sify('不只作為教學技巧，它也是我常用的學習方法。') }}
            p {{ sify('向別人講解的過程中，可以溫故知新。往往學到最多的，是教的人。') }}
            p {{ sify('讓小孩扮演『教』的角色，徹底複習觀念的技巧，我稱它為『主客易位法』。') }}
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
  name: '五、主客易位法',
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
