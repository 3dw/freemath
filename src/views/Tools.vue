<template lang="pug">
  .hello
    .ui.container
      .ui.bulleted.list
        .ui.item
          router-link(to='/trace' exact='')
            i.sort.amount.ui.icon
            | {{ sify('倒溯與前推') }}
          .description
           | {{ sify('以倒溯法和前推法，協助教學者，找到合適的教材') }}
        .ui.item
          router-link(to='/ai' exact='')
            i.question.icon
            | {{ sify('AI家教') }}
          .description
           | {{ sify('問AI任何數學問題') }}
        .ui.item
          router-link(to='/climbing' exact='')
            i.chart.line.icon
            | {{ sify('數學診療室') }}
          .description
           | {{ sify('以倒溯法協助學習者，找出數學學習的盲點') }}
        .ui.item
          router-link(to='/grid' exact='')
            i.copy.icon
            | {{ sify('方格紙產生器') }}
          .description
           | {{ sify('生成百數表、乘法表等，還可以隨機挖洞') }}
        .ui.item
          router-link(to='/card' exact='')
            i.external.square.alternate.icon
            | {{ sify('閃卡') }}
          .description {{ sify('自動產生算式和答案' )}}
        .ui.item
          router-link(to='/play12' exact='')
            i.gamepad.icon
            | {{ sify('湊12') }}
          .description
           | {{ sify('四張牌，加減乘除湊12，可以和別人連線一起解謎') }}
        .ui.item
          router-link(to='/coins' exact='')
            i.circle.icon
            | {{ sify('硬幣排列') }}
          .description
           | {{ sify('拖拽硬幣進行排列，支援多種面額') }}
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
  text-align: left;
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

.description {
  margin-left: 1em;
  font-size: .8em !important;
}

</style>
