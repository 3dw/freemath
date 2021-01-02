<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('一、倒溯法') }}
    .ui.grid
      .one.column.row
        .column
          .ui.segment.container
            h3 {{ sify('『君子務本，本立而道生』--《論語》') }}

            p {{ sify('在教小孩數學的時候，大家都有過這種經驗：講了好幾遍，小孩還是不會。') }}
            p {{ sify('這種情況小孩挫折，大人也挫折。大人這時很容易上情緒，或許會罵小孩笨。') }}
            p {{ sify('我也會遇到挫折，但是不會罵小孩笨。') }}
            br
            p {{ sify('罵小孩笨一點好處都沒有，還不如去想：怎麼讓他學會？') }}
            p {{ sify('為什麼他肯努力卻學不會？為什麼這麼簡單的題目他就是搞不懂？') }}
            p {{ sify('十之八九，答案會是：先備知識有漏洞。') }}
            br
            p {{ sify('數學的知識像一張網子，又像一座多尖頂的塔。有學者用鷹架來比喻，很貼切。') }}
            p {{ sify('每一個知識的環節，都有它的幾個先備知識，而那些先備知識，又有它們各自的先備知識...') }}
            br
            p {{ sify('先備知識不牢，要更上一層樓自然就會困難重重。') }}
            br
            p {{ sify('比方說：要學多位數的乘法（直式），需要哪些先備知識呢？') }}
            br
            p {{ sify('首先，他要懂什麼是乘法、什麼是十進位系統，還要能掌握乘法的分配性（像16乘以5，會等於10乘以5再加上6乘以5），還有乘10、乘100的特殊結果，另外也要會九九乘法表，才能作出完整正確的計算。') }}
            br
            p {{ sify('如果學生學習直式乘法有困難，我會問他先備知識的問題，像是『12乘以100 =?』、『13乘以5  =?』或『你會背九九乘法表嗎？』，逐一去問，來瞭解是哪個環節有漏洞。') }}
            br
            p {{ sify('發現漏洞後，就去教漏洞處的知識。') }}
            br
            p {{ sify('如果經過一些引導，小孩就能懂，那就可以順利把漏洞補上。') }}
            p {{ sify('如果還是不懂，那就重覆前一個步驟，再往回追溯更基礎的先備知識，一直追溯到數數兒都不為過。') }}
            br
            p {{ sify('這個過程同時是診斷也是教學，相當重要。我稱它為『倒溯法』。') }}
            h3 {{ sify('學習地圖與倒溯法') }}
            p {{ sify('那麼，我們要如何得知一個單元需要的所有先備知識呢？如果我們自己很熟悉該單元，當然這是不難的，我們從我們的記憶庫中去查詢即可得知。') }}
            br
            p {{ sify('但是，如果不是這麼熟的話，一些輔助的工具就可以幫助我們查找先備知識。') }}
            br
            p {{ sify('例如，自由數學裡的學習地圖，就是一個實用的工具。') }}
            h3 {{ sify('練習') }}
            ol.ui.ordered.list
              li.item {{ sify('請查找「小數四則」需要的所有先備知識') }}
              li.item {{ sify('請查找「質因數分解」需要的所有先備知識') }}
              li.item {{ sify('請查找「二元一次方程式」需要的所有先備知識') }}
    .ui.grid.container
      .four.column.doubling.row
        .column
          h3
            router-link(to = "/one1") {{ sify('一、倒溯法')}}
        .column
          h3
            router-link(to = "/one2") {{ sify('二、前推法')}}
        .column
          h3
            router-link(to = "/one3") {{ sify('三、具體經驗')}}

</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: '倒溯法',
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
</style>
