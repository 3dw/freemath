<template>
  <div class="hello">
    <br/>
    <h1>您可以讓自由數學更好</h1>
    <div class="ui grid">
      <div class="two column doubling row">
        <div class="column">
          <div class="ui segment container">
            <h2><i class="gift icon"/>出錢</h2>
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
                請點選<a class="item" href="http://map.alearn.org.tw/#/doner/gift" target="_blank">
                    <i class="gift icon" />樂捐支持
                 </a>，內有詳細的說明。
             </p>
            <h3>會有正式的收據嗎？</h3>
            <p>會的，這是<a href = "www.alearn.org.tw" target="_blank">社團法人自主學習促進會</a>的專案，會有正式的收據，可供抵稅。</p>
            <h3>一次捐多少錢好呢？</h3>
            <p>量力而為，你可以用$NT1000當參考值。</p>
          </div>
        </div>
        <div class="column">
          <div class="ui segment container">
            <h2><i class="edit icon"/>出力</h2>
            <h3>為什麼要編開放教材？</h3>
            <p>當初寫這份教材，是因為市面上找不到合適的自學教材，<b>一般教科書太嚴謹、太生硬，很難讓人上手自學，而參考書又只是條列重點後，就是一堆例題。</b></p>
            <h3>分享給朋友？</h3>
            <p>您可以幫忙分享給朋友，用一鍵即可<iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmath.alearn.org.tw&layout=button_count&size=small&mobile_iframe=false&appId=485195848253155&width=77&height=20" width="77" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></p>
            <h3>提問與校誤？</h3>
            <p>您可以從您或孩子正在寫的單元開始，直接在GOOGLE文件上留言提問。</p>
            <h3>參與編輯</h3>
            <p>您可以先選擇<router-link class = 'item ' to='/' exact=''><i class="home icon" />首頁</router-link>中的草稿單元，點入即可開始編輯。</p>
            <h3>我有自行研發的教材想釋出</h3>
            <p>
              <div class = "ui list">
                <div class="item">請先上傳到GOOGLE雲端硬碟
                </div>
                <div class="item">邀請bestian@gmail.com加入協作者</div>
                <div class="item">在邀請信上簡介您的教材（如適合的年級）</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="ui segment">
      <a href="mailto:bestian@gmail.com"><i class ="mail icon"/>有其他問題嗎？歡迎寫信給宗浩</a>
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
<style scoped>
p {
  text-align: center;
}
</style>
