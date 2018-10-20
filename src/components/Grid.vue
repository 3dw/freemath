<template>
  <div class="hello">
    <br class="fat-only"/>
    <h1 class="ui center aligned header no-print">方格紙產生器</h1>
    <div class="ui vertical segment">
      <div class="ui center aligned header no-print">
        <select v-model = "type" autofocus="true" style ="font-size:120%">
            <option value = "1_1_10,1_1_10">空白表</option>
            <option value = "0_10_90,1_1_10,+">百數表</option>
    <!--        <option value = "0_10_90,0_1_9,+">百數表*</option>-->
            <option value = "0_1_10,0_1_10,+">加法表</option>
    <!--    <option value = "10_1_20,1_1_10,-">減法表</option>
            <option value = "1_1_5,1_1_5,*">五五乘法表</option>
            <option value = "1_1_7,1_1_7,*">七七乘法表</option> -->
            <option value = "1_1_9,1_1_9,*">九九乘法表</option>
            <option value = "1_1_12,1_1_12,*">十二乘法表</option>
        </select>
        <a class="ui green button" @click="randHide(countRC(type,0), countRC(type,1))">隨機挖洞</a>

        <div class="ui">
          <table border="8">
            <tr v-for = "r in countRC(type,0)">
              <td v-for = "c in countRC(type,1)" v-bind:style= "{width: wh+'cm', height: wh + 'cm'}">
                <a class = "black" @click = "noHide(r, c)">
                 <span v-bind:class="{invisible: hide[r+'_'+c]}">{{ op(type,r,c) }}</span>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
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
    noHide: function (r, c) {
      this.hide[r + '_' + c] = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
</style>
