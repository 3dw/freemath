<template>
  <div class="hello">
    <h1>自由數學-高相容性的數學教材集錦</h1>
    <div class = "ui container">
      <div class="ui input">
        <input id="find" type="text" v-model="s" placeholder="輸入關鍵字或年級" autofocus="">
      </div>
      <table class="ui celled striped table">
        <tr><th colspan="2">
          自學教材
        </th>
        <tr><th>單元</th><th>年級</th></tr>
        <tr class="item" v-for="(u, index) in units" v-show="!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)">
          <td>
            <a target="_blank" :href="'https://3dw.github.io/mathprint/'+u.n">{{ u.n }}</a>
          </td>
          <td>            
            <a target="_blank" :href="'https://3dw.github.io/mathprint/'+u.n"><i class="print icon"></i><span>{{ u.g }}~{{ u.G }}年級</span></a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      s: '',
      units: [
        {n: '分數.doc', g: 3, G: 5, wiki: ''},
        {n: '分數到小數.doc', g: 5, G: 6, wiki: '小數'},
        {n: '數線.doc', g: 4, G: 7, wiki: ''},
        {n: '時間的計算.doc', g: 4, G: 5, wiki: ''},
        {n: '四則運算總複習.doc', g: 5, G: 7, wiki: ''},
        {n: '因數與倍數.doc', g: 5, G: 7, wiki: ''},
        {n: '一元一次方程式.doc', g: 7, G: 8, wiki: '方程式'},
        {n: '一元二次方程式.doc', g: 8, G: 9, wiki: ''},
        {n: '勾股定理.doc', g: 8, G: 9, wiki: ''},
        {n: '不等式.doc', g: 7, G: 8, wiki: ''},
        {n: '二元一次方程式.doc', g: 7, G: 8, wiki: ''},
        {n: '二次函數.doc', g: 9, G: 10, wiki: '二次函數'},
        {n: '代數入門.doc', g: 4, G: 6, wiki: '代數入門'},
        {n: '全等形.doc', g: 8, G: 9, wiki: ''},
        {n: '三角形的心.doc', g: 8, G: 9, wiki: ''},
        {n: '函數圖形.doc', g: 7, G: 8, wiki: '函數'},
        {n: '多項式.doc', g: 9, G: 10, wiki: '多項式'},
        {n: '幾何證明.doc', g: 8, G: 9, wiki: '證明'},
        {n: '圓與角.doc', g: 8, G: 9, wiki: '圓'},
        {n: '尺規作圖.doc', g: 8, G: 9, wiki: ''},
        {n: '幾何代數_乘法公式.doc', g: 7, G: 8, wiki: ''},
        {n: '指數與對數.doc', g: 10, G: 11, wiki: ''},
        {n: '指數與科學記號.doc', g: 7, G: 8, wiki: ''},
        {n: '數列與級數.doc', g: 8, G: 9, wiki: ''},
        {n: '根式運算.doc', g: 8, G: 9, wiki: ''},
        {n: '機率與統計.doc', g: 9, G: 11, wiki: ''},
        {n: '正負分數.doc', g: 7, G: 7, wiki: '有理數'},
        {n: '正負數.doc', g: 6, G: 7, wiki: ''},
        {n: '比與比值.doc', g: 7, G: 8, wiki: '比值'},
        {n: '直角座標.doc', g: 7, G: 8, wiki: '座標'},
        {n: '相似三角形.doc', g: 8, G: 10, wiki: ''},
        {n: '面積的估算.doc', g: 3, G: 5, wiki: ''},
        {n: '體積與容積.doc', g: 5, G: 6, wiki: ''}
      ]
    }
  },
  mounted () {
    this.units.sort(function (a, b) { return a.g - b.g })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
