<template>
  <div class="hello">
    <h1>您可人讓自由數學更好</h1>
    <div class="ui grid">
      <div class="two column doubling row">
        <div class="column">
          <div class="ui segment">
            <h2>出錢</h2>
            <h3>為什麼要捐錢？</h3>
            <p>支持研發公益開放教材的老師</p>
            <h3>捐錢有什麼用？</h3>
            <p></p>
            <h3>如何捐錢？</h3>
            <p>
                點選<a class="item" href="http://map.alearn.org.tw/donate.html#/gift" target="_blank">
                    <i class="gift icon" />樂捐支持
                 </a>
             </p>
            <h3>會有正式的收據嗎？</h3>
            <p>會的，會有正式的收據，可供抵稅。</p>
          </div>
        </div>
        <div class="column">
          <div class="ui segment container">
            <h2>出力</h2>
            <h3>為什麼要編開放教材？</h3>
            <p></p>
            <h3>如何開始？</h3>
            <p>您可以先選擇首頁中的草稿單元，點入即可開始編輯。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'donate',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
