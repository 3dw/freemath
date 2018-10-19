<template>
  <div class="hello">
    <h1>自由數學<span class="fat-only">-高相容性的數學教材集錦</span></h1>
    <h3>最新消息: {{news[0]}}</h3>
    <div class="ui segment container no-print">
      <h1 class="ui header">如何使用：</h1>
      <div class="ui large ordered list">
        <div class="item">
          選擇單元下載教材
        </div>
        <div class="item">
          自學練功
        </div>
        <div class="item">
          遇到問題可上
          <a class="item" href="https://www.facebook.com/groups/156709241062806/" target="_blank">
            <i class="facebook icon" />自學數學團
          </a>提問
        </div>
      </div>
    </div><!-- Segment END -->
    <div class = "ui container">
      <div class="ui input">
        <input id="find" type="text" v-model="s" placeholder="輸入關鍵字或年級" autofocus="">
      </div>
      <table class="ui celled striped table">
        <tr><th colspan="2">
          自學教材
        </th>
        <tr><th>單元</th><th>年級</th><th>進度</th></tr>
        <tr class="item" v-for="(u, index) in units" v-show="!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)">
          <td>
            <a target="_blank" :href="u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')">{{ u.n }}</a>
          </td>
          <td>            
            <a target="_blank" :href="u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')">
              <span>{{ u.g }}~{{ u.G }}年級</span></a>
          </td>
          <td>            
            <a target="_blank" :href="u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')">
              <span v-show="u.edit"><i class="edit icon"></i>草稿協作中(歡迎共筆)</span>
              <span v-show="!u.edit"><i class="print icon"></i>完稿</span>
            </a>
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
      news: ['2018.10.全部教材搬上GOOGLE雲端硬碟, 改為GOOGLE DOC'],
      units: [
        {n: '分數', g: 3, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1c1ufnqICyQy0UcsZTqpkIBpBkCPDyQQsH1CB1Bj84_g/edit?usp=sharing'},
        {n: '面積的估算', g: 3, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1LLNZQY4JSUc_pZ4K2LPHRA0pnJCfRdPE8Oqxejk29hI/edit?usp=sharing'},
        {n: '數線', g: 4, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1zZIt-DV6TRzENoDAFX3B-_EPISEGL91KCXd7JIofOx0/edit?usp=sharing'},
        {n: '時間的計算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1JL9UD-98xEmqcOnKNCdXML_btUNbAY2J_1FL_DV8awQ/edit?usp=sharing'},
        {n: '體積與容積', g: 5, G: 6, wiki: '', url: 'https://docs.google.com/document/d/1YDhE2j3YfOvlIbQxry-EKBz7LxeQiVt7mM-eCcwL-nE/edit?usp=sharing'},
        {n: '代數入門', g: 4, G: 6, wiki: '代數入門', url: 'https://docs.google.com/document/d/1LVcw277KiS3CHgle0b-LG5uMA6NN2HO6y_0rLZPvQe8/edit?usp=sharing'},
        {n: '分數到小數', g: 5, G: 6, wiki: '小數', url: 'https://docs.google.com/document/d/1xr9bhw0qcsio0R3FU9gUOIjW8Ir2mQpAh0fjJh4cnu0/edit?usp=sharing'},
        {n: '物理量與單位換算', g: 5, G: 6, url: 'https://docs.google.com/document/d/12R1oi-Jia84mYixQBys83TIiM_eMCJfNzQLtXgrLLis/edit', edit: true},
        {n: '四則運算總複習', g: 5, G: 7, wiki: '', url: 'https://docs.google.com/document/d/11-ouXYWYIfawLMPGOSkXtC_AclO2A6SBHryXfr3NKng/edit?usp=sharing'},
        {n: '因數與倍數', g: 5, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1RcZy2CN6HSP-wsXb1g61A-Sq0QWjwY3TCJVRWTq3fTQ/edit?usp=sharing'},
        {n: '正負數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1Agtn1WeZ1QELg3wDHAibw4q2IDyEHU3X1pwj0qaKA-Q/edit?usp=sharing'},
        {n: '國中數學自學指南', g: 7, G: 9, url: 'https://docs.google.com/document/d/1FvN7AO-CuDDy5zdfnJrYNvGy3YkjM0m0b72HAz49VFw/edit?usp=sharing', edit: true},
        {n: '正負分數', g: 7, G: 7, wiki: '有理數', url: 'https://docs.google.com/document/d/1tD4_6l1spXg7p6M7bRBb8wNwIJcCSfQIPh_LNu-rfjE/edit?usp=sharing'},
        {n: '比與比值', g: 7, G: 8, wiki: '比值', url: 'https://docs.google.com/document/d/1jzeGGHqUmgEWZDvywl4xXUNoVPzUoTa_w1J0JzoUk8o/edit?usp=sharing'},
        {n: '一元一次方程式', g: 7, G: 8, wiki: '方程式', url: 'https://docs.google.com/document/d/1GLAu6BaheHxIGMqUVmz4CfgHJEVJxrP-cc_SaJI3jow/edit?usp=sharing'},
        {n: '不等式', g: 7, G: 8, wiki: 'https://docs.google.com/document/d/1KjWUKOMWFHBqlnx6NfZHWb_T8EeMA2GJsvZMmZA5C7k/edit?usp=sharing'},
        {n: '指數與科學記號', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1j5tdf0TirLjFHTLIcWy4lgSe1oIFh7NshM6GDHCOduE/edit?usp=sharing'},
        {n: '二元一次方程式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1v80VUYFsiW5V_jEOwPdOAHya5V75XQRzvRfbwnwpPLI/edit?usp=sharing'},
        {n: '直角座標', g: 7, G: 8, wiki: '座標', url: 'https://docs.google.com/document/d/1ghJHjgS5YUNBjjfkpyQtAX0Njx9npQnzIj-4--_11tw/edit?usp=sharing'},
        {n: '函數圖形', g: 7, G: 8, wiki: '函數', url: 'https://docs.google.com/document/d/163OdWL9EwW4LxRTHIIzpVCnohcg4f3vpebXe2nfFT8E/edit?usp=sharing'},
        {n: '一元二次方程式', g: 8, G: 9, wiki: 'https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing'},
        {n: '幾何代數_乘法公式', g: 7, G: 8, wiki: 'https://docs.google.com/document/d/1kjy84i-d_j_pnEp8bXqjkL8zQN6fDZ6kHpZCfY_lqHY/edit?usp=sharing'},
        {n: '勾股定理', g: 8, G: 9, wiki: 'https://docs.google.com/document/d/1rPovRRDJ_JBPpQ-MVasmb3s1tXdDcZKGCKLc0TW5fCI/edit?usp=sharing'},
        {n: '全等形', g: 8, G: 9, wiki: 'https://docs.google.com/document/d/1oPIdcpSMcYED93EK8pTIwLbqg6tRZz0RyQXKp5HtkI8/edit?usp=sharing'},
        {n: '三角形的心', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1G3oG30oKd--F8t-IH2KKhEthAawf2e0C6SEGDbs2yP8/edit?usp=sharing'},
        {n: '二次函數', g: 9, G: 10, wiki: '二次函數', url: 'https://docs.google.com/document/d/14WG9W2YWzH8t-8BjDBOEcOoJCXErI1qx1tz9geLKY3Q/edit?usp=sharing'},
        {n: '多項式', g: 9, G: 10, wiki: '多項式', url: 'https://docs.google.com/document/d/1wFxpNIhsG2GyA-WLfrtlbqUxrnCKdVnDZ4HjsSw2vVI/edit?usp=sharing'},
        {n: '幾何證明', g: 8, G: 9, wiki: '證明', url: 'https://docs.google.com/document/d/13clfEdnC5OZ3fp-NOWqO5HSOAEHMwxJN7BpKM1qkz7g/edit?usp=sharing'},
        {n: '圓與角', g: 8, G: 9, wiki: '圓', url: 'https://docs.google.com/document/d/1PShmOOnanz_iykeu9MEpjISHTMLXmBEMsR9otBYOlj4/edit?usp=sharing'},
        {n: '相似三角形', g: 8, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1bLdm7nF8N4-JeyP0ODdVNUK1oos1OYiYCPnVkgoBhso/edit?usp=sharing'},
        {n: '尺規作圖', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1n3BiAVTJXojaYzwV7RjosJinobehwgJQ5IvZNeCAjnY/edit?usp=sharing'},
        {n: '數列與級數', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1PSA7GuKDr2MFHbnzHgBduq-YwGykAzL866EB_yXZuk8/edit?usp=sharing'},
        {n: '根式運算', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/10oB3rrEhC0yvLlilr8vjAu-Q9LuS6IzRLea4flzYNAo/edit?usp=sharing'},
        {n: '機率與統計', g: 9, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1L2gtHUKAe-pANjFS6XE1fAHVYvjgs20MLOFY3ElYYfM/edit?usp=sharing'},
        {n: '指數與對數', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1NqKwWmTtMcFS8B5zYrVsqoJhY7Jh6YaiAwhnpONGzug/edit?usp=sharing'}
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
