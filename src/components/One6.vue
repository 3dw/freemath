<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('六、面對錯誤') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('『人非聖賢，熟能無過？知過能改，善莫大焉。』--諺語') }}

            p {{ sify('很多父母老師，遇到小孩犯錯就把他罵得一塌胡塗。但是，能夠讓他瞭解並且改正，才是根本。') }}
            br
            p {{ sify('在糾正偏差行為的部份，有時罵是有用的，但在知識的學習上，罵從來就是沒有用的。沒有人能夠透過罵的方式，教會孩子數學。') }}
            p {{ sify('既然在知識上，罵沒有用，那要如何面對小孩的計算錯誤呢？') }}
            br
            p {{ sify('數學常見的解題錯誤大至可分為三類，包含閱讀錯誤、計算錯誤、觀念錯誤。') }}
            br
            p {{ sify('前幾篇介紹的方法，對觀念錯誤相當有效。本篇探討如何面對閱讀和計算錯誤。') }}
            br
            p {{ sify('「閱讀錯誤」是指誤解問題、或無法把問題用數學式表達，造成的錯誤。') }}
            p {{ sify('如果題目要算8的立方根，但是寫的人看成8的平方根，當然後面都會錯。這跟觀念與計算都無關。') }}
            br
            p {{ sify('如果小孩常犯閱讀錯誤，應該加強的是閱讀能力、改善書寫習慣，把式子寫整齊一點不要東一塊西一塊。家長和老師也要留意孩子是否有神經生理上的閱讀障礙，是否需要特教領域的支持。') }}
            br
            p {{ sify('有些小孩雖然看得懂題目的敘述，卻不知道怎麼把它畫成易懂的圖表、寫成好算的式子，這就需要一些示範和演練，來增進「轉譯」的能力。無論是看不懂題意，或是轉譯的困難，其實都是語文的範圍。') }}
            br
            p {{ sify('數學的語言，就像外語一樣，有它的文法和習慣。把中文轉譯成英文，和把中文轉譯成數學符號，是類似的過程。') }} 
            br
            p {{ sify('當小孩對抽象符號不太能掌握時，學著用圖形、表格當中介，相當有益。我在大學學習抽象的數學時，也還是靠輔助圖形來幫助自己理解。') }}
            br
            p {{ sify('接下來讓我們來看「計算錯誤」。') }}
            br
            p {{ sify('「計算錯誤」通常被當作粗心大意，似乎只要小心點、多練習就會好。') }}
            br
            p {{ sify('在小學高年級和國中，許多小孩觀念還不錯，卻因計算錯誤而被家長、老師過度指責，造成不必要的挫折感，打擊自信，相當可惜。') }}
            br
            p {{ sify('其實對大部份的小孩來說，計算完美無瑕是不可能的。這種要求也不合理。') }}
            br
            p {{ sify('合理的要求是：錯誤率不要太高，而且自己有辦法找出錯誤。') }}
            br
            p {{ sify('應該讓小孩養成留下計算過程的習慣。 如果他有用算式、輔助圖來解題，就應該保留這些過程，不要一算出答案就把它們擦掉。計算過程不必非常美觀，但是至少要讓他自己能看懂。') }}
            br
            p {{ sify('為什麼要建立留下記錄的習慣呢？不是為了不犯錯，是為了能除錯。只要小孩還有學習動力，除錯法就比直接訂正好。') }}
            br
            p {{ sify('當小孩計算出錯時，別忘了先肯定他的觀念正確。') }}
            br
            p {{ sify('再來，不要指出錯在哪裡，只要告訴他說這題有算錯，請他自己找出來訂正。') }}
            p {{ sify('只要計算過程清楚，通常小孩都可以自己找到錯處，自己訂正。 真的不行時，再講出錯在哪裡也不遲。除錯的能力，也是一種自我檢視的能力。') }}
            br
            p {{ sify('對小孩而言，學習如何記錄、如何除錯，比去為「永不出錯」拼命，更人性、也更有意義，不是嗎？') }}
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
  name: '面對錯誤',
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
