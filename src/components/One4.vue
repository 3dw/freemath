<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('四、繞道法--渡過心理障礙') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('『『明修棧道，暗渡陳倉』--成語') }}

            p {{ sify('前面提到了倒溯、前推兩種整理知識體系的方法，還有如何用具體經驗建立數學感。') }}
            p {{ sify('這三種方法，在指導不排拒數學的小孩時，已經很夠用了。') }}
            br
            p {{ sify('不過呢，對於排拒數學的小孩，還不夠。他往往一看到sin、cos或是聽到『小數除法』就馬上腦袋打結，變得一片空白，無法運作。') }}
            br
            p {{ sify('這種情況完全是心理障礙。這個心理障礙應該被瞭解、被尊重。
            p {{ sify('就像被狗咬過的人會怕狗、被虎頭蜂螫過的人會怕蜂一樣。學數學的過程中，曾遇過巨大的挫折或羞辱的人，當然會怕數學。') }}
            br
            p {{ sify('恐懼會使人無法正常反應，原本會的都想不起來、簡單的都無法理解。') }}
            p {{ sify('因此，與其花大力去攻他害怕的、舊的主題，還不如先著力於新的主題。') }}
            p {{ sify('在新的主題上，重新建立成就感，可以慢慢消解掉對數學的恐懼，讓腦袋能夠轉動。
            br
            p {{ sify('只要新的主題和舊的主題相關，這種成功經驗就可以過渡。
            p {{ sify('比方說，如果小孩怕分數，又沒學過小數，就可以先不管分數，直接教小數。') }}
            p {{ sify('因為小數可以透過尺上的刻度來教，對懂得十進位的小孩，非常自然，所以不難學會。') }}
            br
            p {{ sify('等到學會小數的概念後，再來學他所怕的分數，也就不那麼難了。') }}
            p {{ sify('因為小數是十等分、百等分、千等分；分數只是換成二等分、五等分之類的罷了。') }}
            br
            p {{ sify('像0.3就是3/10、0.16就是16/100、0.5就是5/10、也是1/2。') }}
            p {{ sify('有小數概念和刻度尺（數線），要理解分數自然事半功倍。') }}
            br
            p {{ sify('我也試過不使用『除法』這個名字和相關的符號，直接用『平均分配』、『64人，3人一排，能排幾排？剩幾人？』之類的問題，讓怕除法的小孩願意去思考除法。') }}
            br
            p {{ sify('心理障礙很微妙。每個小孩情況不同，有時候把舊的主題換個名字、暫時不使用符號、編入遊戲之中，換湯不換藥，也就能避開心理障礙了。') }}
            br
            p {{ sify('數學的知識體系是網狀的，不是一直線向上。大部份的知識環節間，並沒有絕對的『先備-後續』關係。') }}
            p {{ sify('因此，不必太執著於『幾年級』的範圍。') }}
            p {{ sify('只要是小孩不怕的、有興趣的、能理解的就好，課本把它編在幾年級並不重要。') }}
            br
            p {{ sify('面對心理障礙時，這種『先著力於新主題，再回頭補舊主題』的策略，我稱它為『繞道法』。') }}
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
  name: '繞道法--渡過心理障礙',
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
