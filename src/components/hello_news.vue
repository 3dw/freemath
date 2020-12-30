<template lang="pug">
  .hello
    .ui.grid.container
      .ui.two.column.stackble.row
        .ui.left.aligned.segment.column
          h3.ui.header 最新消息：
          .ui.large.bulleted.list
            .item(v-for='n in news.slice(0, 3)')
              span(v-html="sify(n)")
        .ui.left.aligned.segment.column
          h3.ui.header {{sify('如何使用：') }}
          .ui.large.ordered.list
            //.item
              | 參考
              a(href='https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit', target='_blank')
                | 給家長的教學引導
            router-link.item(to='/maps')
              | {{sify('使用〈學習地圖〉') }}
            .item
              | {{sify('選擇單元進入教材，自學練功') }}
            .item
              | {{sify('卡關時可上') }}
              a(href='https://www.facebook.com/groups/156709241062806/', target='_blank')
                i.facebook.icon
                | {{sify('自學數學團') }}
              | {{sify('提問') }}
            .item
              | {{sify('亦可參考') }}
              a(href='https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing', target='_blank')
                | {{sify('數學學習診斷是什麼？') }}

</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: 'news',
  props: ['si'],
  methods: {
    sify (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    }
  },
  data () {
    return {
      news: [
        '2020.07.介面翻新',
        '2020.01.<a href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit?usp=sharing" target="_blank">國中數學觀念精華</a>教材編創完成',
        '2020.01.<a href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=sharing" target="_blank">小學數學觀念精華</a>教材編創完成',
        '2020.01.<a href="https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing" target="_blank">一元二次方程式教材加入黃金比例簡介</a>',
        '2019.11.<a href="https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing" target="_blank">除法</a>教材編創完成',
        '2019.06.<a href="http://math.alearn.org.tw/#/play12" target="_blank">湊12的手機App版</a>上線了！',
        '2019.05.<a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">數學學習診斷是什麼？</a>上線了！',
        '2019.05.<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>上線了！',
        '2018.10.自由數學更新版上線，歡迎使用、協作、樂捐支持！',
        '2018.10.新功能：您可以直接在教材頁面上留言提問與校誤',
        '2018.10.全部教材搬上<a href="https://drive.google.com/drive/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE雲端硬碟</a>, 改為GOOGLE DOC']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">

a {
  color: #33f !important;
}

</style>
