<template lang="pug">
  .hello
    br
    h1.ui.center.aligned.header.noPrint 方格紙
    .ui.vertical.segment
      .ui.center.aligned.header.noPrint
        select(v-model='type', autofocus='true', style='font-size:120%')
          option(value='1_1_10,1_1_10') 空白表
          option(value='0_10_90,1_1_10,+') 百數表
          // <option value = "0_10_90,0_1_9,+">百數表*</option>
          option(value='0_1_10,0_1_10,+') 加法表
          //
            <option value = "10_1_20,1_1_10,-">減法表</option>
            <option value = "1_1_5,1_1_5,*">五五乘法表</option>
            <option value = "1_1_7,1_1_7,*">七七乘法表</option>
          option(value='1_1_9,1_1_9,*') 九九乘法表
          option(value='1_1_12,1_1_12,*') 十二乘法表
        .ui.button.group
          a.ui.green.button(@click='randHide(countRC(type,0), countRC(type,1))') 隨機挖洞
          button.ui.teal.button(onclick='window.print()') 友善列印
          // input(type="checkbox" v-model="pretty")
          // span &nbsp;&nbsp;&nbsp;特效
      div
        .ui
          table(border='8')
            tbody
              tr(v-for='r in countRC(type,0)')
                td(v-for='c in countRC(type,1)', v-bind:style="{width: wh+'cm', height: wh + 'cm'}", :class="{pretty: pretty}")
                  a.black(@click='toggleHide(r, c)')
                    span(v-bind:class="{invisible: hide[r+'_'+c]}") {{ op(type,r,c) }}
                      // img.tiny(v-if="pretty", src="../assets/grass.png", alt="grass", :style="{height: rndH(), width: rndH()}")

</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
      pretty: false,
      type: '0_10_90,1_1_10,+',
      wh: 1.6,
      hide: {}
    }
  },
  methods: {
    countRC: function (ty, k) {
      var ansL = []
      var rT = ty.split(',')[k]
      var s = rT.split('_')
      for (var i = parseInt(s[0]); i <= parseInt(s[2]); i += parseInt(s[1])) {
        ansL.push(i)
      }
      return ansL
    },
    op: function (ty, r, c) {
      var o = ty.split(',')[2]
      if (!o) return ''
      if (o === '*') { return r * c }
      if (o === '+') { return r + c }
      if (o === '-') { return r - c }
    },
    randHide: function (list1, list2) {
      var ans = {}
      var holes = (list1.length * list2.length) * 3 / 4
      for (var i = 0; i < holes; i++) {
        var r = list1[Math.floor(Math.random() * list1.length)]
        var c = list2[Math.floor(Math.random() * list2.length)]
        ans[r + '_' + c] = true
      }
      if (Object.keys(this.hide).length === 0) {
        this.hide = ans
      } else {
        this.hide = {}
      }
    },
    toggleHide: function (r, c) {
      if (!this.hide[r + '_' + c]) {
        this.hide[r + '_' + c] = false
      }
      this.hide[r + '_' + c] = !this.hide[r + '_' + c]
      this.$forceUpdate()
    },
    rndH () {
      return Math.floor(Math.random() * 28 + 6) + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* print */
  @media print {
    body {
      background-color: #ffffff;
/*      width: 210mm; */
    }
    .noPrint, .noPrint *{
      display: none !important;
    }
    .invisPrint {
      opacity:0;
      filter:alpha(opacity=0); /* For IE8 and earlier */ 
    }

    table {
      margin-top: 30px;
    }
  }
  /*   */
  sub, sup {
    font-size: 60%;
  }

  table {
    border-collapse:collapse;
    max-width: 210mm;
    margin-left: auto;
    margin-right: auto;
  } 

  td {
    text-align: center;
    vertical-align: middle;
    font-size: 150%;
  }

  #crossPoint {
    transition: all .3s;
  }

  #crossPoint:hover {
    transform: scale(3);
  }

  #setting {
    margin-top: auto;
  }

  .ui.simple.dropdown.item > .menu {
    transition: opacity 0.8s;
    -webkit-transition: opacity 0.8s;
  }

  input {
    margin:2px;
  }

  input[type="number"], input[type="text"] {
    margin-left: 5px;
  }

  .breadcrumb {
    position: relative;
    left: 10px;
  }

  #show {
    white-space: pre;
    color: grey;
  }

  .black {
    color: black;
  }

  .pretty {
    background-color: #6F3B00;
  }

  .pretty a.black {
    color: #5F2B00;
    display: inline-block;
    border-top: 2px solid gray;
    border-radius: 20px;
  }

  .tiny {
    width: 1.2em;
  }
</style>
