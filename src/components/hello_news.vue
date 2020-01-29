<template>
  <div class="hello">
    <div class="ui grid container">
      <div class="ui one column row fat-only">
        <div class="ui segment column">
          <h1>學想問練玩。自主學習。</h1>
        </div>
      </div>
      <div class="ui two column row">
        <div class="ui left aligned segment column">
          <h3 class="ui header">如何使用：</h3>
          <div class="ui large ordered list">
            <div class="item">可參考
              <a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit" target="_blank">
                給家長的教學引導
              </a>
            </div>
            <router-link to="/maps" class="item">
              使用〈學習地圖〉(可列印出紙本)
            </router-link>
            <div class="item">
              選擇單元進入教材
            </div>
            <div class="item">
              自學練功(可列印出紙本)
            </div>
            <div class="item">
              遇到問題可以直接在<a href = "https://drive.google.com/drive/u/0/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE文件</a>上留言提問
            </div>
            <div class="item">卡關時可上
              <a href="https://www.facebook.com/groups/156709241062806/" target="_blank">
                <i class="facebook icon" />自學數學團
              </a>提問
            </div>
            <div class="item">亦可參考
              <a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">
                數學學習診斷是什麼？
              </a>
            </div>
          </div>
        </div><!-- Segment END -->
        <div class="ui left aligned segment column">
          <h3 class="ui header">最新消息：</h3>
          <div class="ui large bulleted list">
            <div class="item" v-for="n in news.slice(0, 5)">
              <span v-html="n"></span>
            </div>
          </div>
        </div><!-- Segment END -->
      </div>
    </div><!-- grid END -->
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      news: [
        '2010.01.<a href="https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing" target="_blank">一元二次方程式教材加入黃金比例簡介</a>',
        '2019.11.<a href="https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing" target="_blank">除法</a>教材編創完成',
        '2019.06.<a href="http://math.alearn.org.tw/#/play12" target="_blank">湊12的手機App版</a>上線了！',
        '2019.05.<a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">數學學習診斷是什麼？</a>上線了！',
        '2019.05.<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>上線了！',
        '2018.10.自由數學更新版上線，歡迎使用、協作、樂捐支持！',
        '2018.10.新功能：您可以直接在教材頁面上留言提問與校誤',
        '2018.10.全部教材搬上<a href="https://drive.google.com/drive/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE雲端硬碟</a>, 改為GOOGLE DOC']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">

a {
  color: #33f !important;
}

</style>
