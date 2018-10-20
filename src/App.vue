<template>
  <div id="app">
    <div class="ui labeled icon fixed top menu no-print">
      <router-link class = 'item ' to='/' exact=''>
        <i class="home icon" />回首頁
      </router-link>
      <router-link class = 'item ' to='/intro' exact=''>
        <i class="book icon" />編創緣起
      </router-link>
      <router-link class = 'item ' to='/maps' exact=''>
        <i class="map icon" />學習地圖
      </router-link>
      <div class="ui simple dropdown item fat-only">
        <i class="dropdown icon"></i>
        小工具
        <div class="menu">
          <a class="item" href="https://scratch.mit.edu/studios/1895336/" target="_blank">數氣球</a>
          <router-link  class="item" to='/card' exact=''>
            <i class="file outline icon" />閃卡
          </router-link>
          <router-link class = 'item ' to='/grid' exact=''>
            <i class="expand icon" />方格紙產生器
          </router-link>
          <a class="item" href="http://elder.game.tw" target="_blank">認照片遊戲</a>
        </div>
      </div>
      <div class="right menu fat-only">        
        <router-link class = 'item ' to='/faq' exact=''>
          <i class="comment icon" />常見問題
        </router-link>        
        <router-link class = 'item ' to='/donate' exact=''>
          <i class="gift icon" />出錢出力
        </router-link>
      </div>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
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

</style>
