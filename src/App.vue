<template>
  <div id="app">
    <div class="ui labeled icon fixed top inverted menu no-print">
      <router-link class = 'item ' to='/' exact=''>
        <i class="home icon" /> 首頁
      </router-link>
      <router-link class = 'item' to='/maps' exact=''>
        <i class="map icon" />學習地圖
      </router-link>
      <router-link class = 'item' to='/tools' exact=''>
        <i class="angle double down icon"></i>
        小工具
      </router-link>
      <router-link class = 'item fat-only' to='/outer' exact=''>
        <i class="user add icon" />外部資源
      </router-link>
      <div class="right menu">        
        <router-link class = 'item fat-only' to='/vedio' exact=''>
          <i class="play icon" />導覽
        </router-link>        
        <router-link class = 'item ' to='/faq' exact=''>
          <i class="comment icon" />常見問題
        </router-link>      
        <router-link class = 'item fat-only' to='/intro' exact=''>
          <i class="book icon" />編創緣起
        </router-link>       
        <router-link class = 'item ' to='/donate' exact=''>
          <i class="gift icon" />出錢出力
        </router-link>
        <div class="item fat-only">
          <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmath.alearn.org.tw&layout=button_count&size=small&appId=485195848253155&width=77&height=20" width="77" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
    <main>
      <router-link to = "/" id="logo">
        <img src="./assets/logo.png">
      </router-link>
      <transition name='fade' mode='out-in'>
        <router-view :units="units"></router-view>
      </transition>
    </main>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      units: [
        {n: '分類', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/11FQ7urzmBNkfD8yeGPCw2PEq_1cqqpDRf-mDFCjQ5l0/edit?usp=sharing', edit: true, p: 80, left: 2},
        {n: '誰比較多', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/1afPtB_fNvTb2J58gWLlwAbtkXTdG589wquaq9vzJfZE/edit?usp=sharing', edit: true, p: 80, left: 3},
        {n: '認識數字', g: -1, G: -1, url: 'https://docs.google.com/drawings/d/1AH1j0rQzsNsVUW4Papgq4vAVZgEIDiQCREXVD9LbsgM/edit?usp=sharing', edit: true, p: 80, left: 0},
        {n: '數氣球', g: -1, G: -1, url: 'https://scratch.mit.edu/studios/1895336/', left: 1},
        {n: '加法', g: 0, G: 2, url: 'https://docs.google.com/document/d/18xrId9-15sm5VCdFY5cHZtygNRvKu6ZOi1XFY_k-2mw/edit?usp=sharing', edit: true, p: 50, left: 0},
        {n: '減法', g: 1, G: 2, url: 'https://docs.google.com/document/d/1xrxA_OfzcXkIgMInwXTXy3FAEkkDy4NRTUOkvFnvDMk/edit?usp=sharing', edit: true, p: 50, left: 1},
        {n: '百數表', g: 1, G: 3, url: 'https://drive.google.com/file/d/0B-3AeNXITt7ZeElLZXdxczF2TTVud0VTLXg2eFhMT2htT2FN/view', left: 2},
        {n: '認識十進位', g: 1, G: 2, url: 'https://docs.google.com/drawings/d/1jS6GPgAOGorEcSHUlJaHYYB6RB43l9v5JzxPlWwDbPY/edit?usp=sharing', edit: true, p: 20, left: 0},
        {n: '乘法A~D', g: 2, G: 4, url: 'https://docs.google.com/document/d/15YqUGEehxC63GfYXMrihKvbT_w93nx-H4m0ZuFkpbjo/edit?usp=sharing', edit: true, p: 90, left: 0},
        {n: '乘法E~F', g: 2, G: 5, url: 'https://docs.google.com/document/d/1zUE7ROOqhaIALC3k0rimZPv8Fo1lf8-gYORG1Wr6eXg/edit?usp=sharing', edit: true, p: 90, left: 1},
        {n: '除法', g: 2, G: 5, url: 'https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing', edit: true, p: 1, left: 2},
        {n: '除法直式的意涵', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=RvP7ICoxRGs', left: 0},
        {n: '除法直式精熟', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=o73K7oUH_-4', left: 1},
        {n: '餘量的處理', g: 3, G: 5, url: 'https://www.youtube.com/watch?v=falQiyDLL50', left: 2},
        {n: '分數', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1c1ufnqICyQy0UcsZTqpkIBpBkCPDyQQsH1CB1Bj84_g/edit?usp=sharing', left: 0},
        {n: '面積的估算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1LLNZQY4JSUc_pZ4K2LPHRA0pnJCfRdPE8Oqxejk29hI/edit?usp=sharing', left: 1},
        {n: '數線', g: 4, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1zZIt-DV6TRzENoDAFX3B-_EPISEGL91KCXd7JIofOx0/edit?usp=sharing', left: 2},
        {n: '時間的計算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1fjnXcv0yHUCObK3_yRxLtrrDjBKIv_DSqEb_xkswiF8/edit?usp=sharing', edit: true, p: 90, left: 3},
        {n: '體積與容積', g: 5, G: 6, wiki: '', url: 'https://docs.google.com/document/d/1YDhE2j3YfOvlIbQxry-EKBz7LxeQiVt7mM-eCcwL-nE/edit?usp=sharing', left: 0},
        {n: '代數入門', g: 5, G: 6, wiki: '代數入門', url: 'https://docs.google.com/document/d/1LVcw277KiS3CHgle0b-LG5uMA6NN2HO6y_0rLZPvQe8/edit?usp=sharing', left: 1},
        {n: '分數到小數', g: 5, G: 6, wiki: '小數', url: 'https://docs.google.com/document/d/1xr9bhw0qcsio0R3FU9gUOIjW8Ir2mQpAh0fjJh4cnu0/edit?usp=sharing', left: 2},
        {n: '物理量與單位換算', g: 5, G: 6, url: 'https://docs.google.com/document/d/12R1oi-Jia84mYixQBys83TIiM_eMCJfNzQLtXgrLLis/edit', edit: true, p: 30, left: 3},
        {n: '四則運算總複習', g: 5, G: 7, wiki: '', url: 'https://docs.google.com/document/d/11-ouXYWYIfawLMPGOSkXtC_AclO2A6SBHryXfr3NKng/edit?usp=sharing', left: 4},
        {n: '因數與倍數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1RcZy2CN6HSP-wsXb1g61A-Sq0QWjwY3TCJVRWTq3fTQ/edit?usp=sharing', left: 0},
        {n: '正負數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1Agtn1WeZ1QELg3wDHAibw4q2IDyEHU3X1pwj0qaKA-Q/edit?usp=sharing', left: 1},
        {n: '比與比值', g: 6, G: 8, wiki: '比值', url: 'https://docs.google.com/document/d/1jzeGGHqUmgEWZDvywl4xXUNoVPzUoTa_w1J0JzoUk8o/edit?usp=sharing', left: 2},
        {n: '國中數學自學指南', g: 6, G: 9, url: 'https://docs.google.com/document/d/1FvN7AO-CuDDy5zdfnJrYNvGy3YkjM0m0b72HAz49VFw/edit?usp=sharing', edit: true, p: 50, left: 2},
        {n: '正負分數', g: 7, G: 7, wiki: '有理數', url: 'https://docs.google.com/document/d/1tD4_6l1spXg7p6M7bRBb8wNwIJcCSfQIPh_LNu-rfjE/edit?usp=sharing', left: 0},
        {n: '一元一次方程式', g: 7, G: 8, wiki: '方程式', url: 'https://docs.google.com/document/d/1GLAu6BaheHxIGMqUVmz4CfgHJEVJxrP-cc_SaJI3jow/edit?usp=sharing', left: 0.5},
        {n: '不等式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1KjWUKOMWFHBqlnx6NfZHWb_T8EeMA2GJsvZMmZA5C7k/edit?usp=sharing', left: 1},
        {n: '指數與科學記號', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1j5tdf0TirLjFHTLIcWy4lgSe1oIFh7NshM6GDHCOduE/edit?usp=sharing', left: 1.5},
        {n: '二元一次方程式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1v80VUYFsiW5V_jEOwPdOAHya5V75XQRzvRfbwnwpPLI/edit?usp=sharing', left: 2},
        {n: '直角座標', g: 7, G: 8, wiki: '座標', url: 'https://docs.google.com/document/d/1ghJHjgS5YUNBjjfkpyQtAX0Njx9npQnzIj-4--_11tw/edit?usp=sharing', left: 2.5},
        {n: '函數圖形', g: 7, G: 8, wiki: '函數', url: 'https://docs.google.com/document/d/163OdWL9EwW4LxRTHIIzpVCnohcg4f3vpebXe2nfFT8E/edit?usp=sharing', left: 3},
        {n: '一元二次方程式', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing', left: 0},
        {n: '幾何代數_乘法公式', g: 8, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1kjy84i-d_j_pnEp8bXqjkL8zQN6fDZ6kHpZCfY_lqHY/edit?usp=sharing', left: 0.5},
        {n: '勾股定理', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1rPovRRDJ_JBPpQ-MVasmb3s1tXdDcZKGCKLc0TW5fCI/edit?usp=sharing', left: 1},
        {n: '根式運算', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/10oB3rrEhC0yvLlilr8vjAu-Q9LuS6IzRLea4flzYNAo/edit?usp=sharing', left: 1.5},
        {n: '幾何證明', g: 8, G: 9, wiki: '證明', url: 'https://docs.google.com/document/d/13clfEdnC5OZ3fp-NOWqO5HSOAEHMwxJN7BpKM1qkz7g/edit?usp=sharing', left: 2},
        {n: '全等形', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1oPIdcpSMcYED93EK8pTIwLbqg6tRZz0RyQXKp5HtkI8/edit?usp=sharing', left: 2.5},
        {n: '尺規作圖', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1n3BiAVTJXojaYzwV7RjosJinobehwgJQ5IvZNeCAjnY/edit?usp=sharing', left: 3},
        {n: '數列與級數', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1PSA7GuKDr2MFHbnzHgBduq-YwGykAzL866EB_yXZuk8/edit?usp=sharing', left: 0},
        {n: '多項式', g: 9, G: 10, wiki: '多項式', url: 'https://docs.google.com/document/d/1wFxpNIhsG2GyA-WLfrtlbqUxrnCKdVnDZ4HjsSw2vVI/edit?usp=sharing', left: 1},
        {n: '機率與統計', g: 9, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1L2gtHUKAe-pANjFS6XE1fAHVYvjgs20MLOFY3ElYYfM/edit?usp=sharing', left: 1},
        {n: '二次函數', g: 9, G: 10, wiki: '二次函數', url: 'https://docs.google.com/document/d/14WG9W2YWzH8t-8BjDBOEcOoJCXErI1qx1tz9geLKY3Q/edit?usp=sharing', left: 1.5},
        {n: '圓與角', g: 9, G: 9, wiki: '圓', url: 'https://docs.google.com/document/d/1PShmOOnanz_iykeu9MEpjISHTMLXmBEMsR9otBYOlj4/edit?usp=sharing', left: 2},
        {n: '三角形的心', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1G3oG30oKd--F8t-IH2KKhEthAawf2e0C6SEGDbs2yP8/edit?usp=sharing', left: 2.5},
        {n: '相似三角形', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1bLdm7nF8N4-JeyP0ODdVNUK1oos1OYiYCPnVkgoBhso/edit?usp=sharing', left: 3},
        {n: '球體的體積', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1nSZuUmEuVyqwBQJIv61zQ_vxLm15GfmcmLSaBVHCtDc/edit#', edit: true, p: 30, left: 4},
        {n: '指數與對數', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1NqKwWmTtMcFS8B5zYrVsqoJhY7Jh6YaiAwhnpONGzug/edit?usp=sharing', left: 1},
        {n: '極座標', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1nSckL7Ge66iC9XHd7tp0VMmLiDdtT78SFKZmTiSYlEw/edit?usp=sharing', edit: true, p: 80, left: 2},
        {n: '三角函數', g: 11, G: 12, wiki: '', url: 'https://docs.google.com/document/d/1W1ZhNi-rbMmB8im9RTJRPfjtw1a6EJSgo3An4d11Dl0/edit?usp=sharing', edit: true, p: 50, left: 3},
        {n: '實無限與微分', g: 12, G: 12, url: 'https://docs.google.com/document/d/1W-lzb6HtaYWLU1S2ypVwmxP6jckXSe7n4oRxJiL52gw/edit?usp=sharing', edit: true, p: 80, left: 1},
        {n: '實無限與積分', g: 12, G: 12, url: 'https://docs.google.com/document/d/1rWVyaTU31Wy4NFvwCtDpTlmEmNCRwqL4YOTpLHhfyi0/edit?usp=sharing', edit: true, p: 50, left: 2}
      ]
    }
  },
  mounted () {
    this.units.sort(function (a, b) { return a.g - b.g })
  }
}
</script>


<style lang="scss">

@mixin keyframes($animation-name) {
    @-webkit-keyframes #{$animation-name} {
        @content;
    }
    @-moz-keyframes #{$animation-name} {
        @content;
    }  
    @-ms-keyframes #{$animation-name} {
        @content;
    }
    @-o-keyframes #{$animation-name} {
        @content;
    }  
    @keyframes #{$animation-name} {
        @content;
    }
}

@mixin animation($str) {
  -webkit-animation: #{$str};
  -moz-animation: #{$str};
  -ms-animation: #{$str};
  -o-animation: #{$str};
  animation: #{$str};      
}

@mixin transition($args...) {
  -webkit-transition: $args;
  -moz-transition: $args;
  -ms-transition: $args;
  -o-transition: $args;
  transition: $args;
}

@mixin transform($transforms) {
     -moz-transform: $transforms;
       -o-transform: $transforms;
      -ms-transform: $transforms;
  -webkit-transform: $transforms;
          transform: $transforms;
}

.fade-leave {  }

.fade-leave-active {
  @include transition(all .3s ease);
  opacity: 0;
}

.fade-enter {
  opacity: 0;
  @include transform(rotateY(45deg));
}

.fade-enter-active {
  @include transition(all .5s ease-in);
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

.print-only {
  visibility: hidden !important;
  display: none !important;
}

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
  .print-only {
    visibility: visible !important;
    display: block !important;
  }
  img, div, .card, .column {
    page-break-inside: avoid !important;
  }
}

#logo {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999999;
  background-color: transparent !important;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

#logo:hover {
  right: 1em;
}

#logo img {
  width: 10vw;
}

.menu .item {
  justify-content: center;
}


a, button, .clickable {
  cursor: pointer !important;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  .button {
    max-width: 100% !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.router-link-active {
  background-color: #ccf !important;
}

.invisible {
  color: transparent !important;
}

p {
    text-align: left;
    line-height: 1.6;
}

</style>
