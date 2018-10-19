<template>
  <div class="hello">
    <h1>您可人讓自由數學更好</h1>
    <div class="ui grid">
      <div class="two column doubling row">
        <div class="column">
          <div class="ui segment">
            <h2>出錢</h2>
            <h3>為什麼要捐錢？</h3>
            <p>支持研發與維護公益開放教材的老師</p>
            <h3>捐錢有什麼用？</h3>
            <div class="ui ordered list">
                <div class="item">支持研發與維護公益開放教材的老師</div>
                <div class="item">促進新單元的開發</div>
                <div class="item">您可以在捐助的留上備註你希望加速開發的單元</div>
            </div>
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
            <h3>分享</h3>
            <p><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmath.alearn.org.tw&layout=button_count&size=small&mobile_iframe=false&appId=485195848253155&width=77&height=20" width="77" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></p>
            <h3>提問與校誤？</h3>
            <p>您可以從您或孩子正在寫的單元開始，直接在GOOGLE文件上留言提問。</p>
            <h3>參與編輯</h3>
            <p>您可以先選擇首頁中的草稿單元，點入即可開始編輯。</p>
            <h3>我有自行研發的教材想釋出</h3>
            <p>請先上傳到GOOGLE雲端硬碟</p>
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
