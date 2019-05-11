<template>
  <div class="hello">
    <br/> 
    <div class="ui grid">
      <div class="ui two column row">
        <div class="ui segment column">
          <h3 class="ui header">最新消息：</h3>
          <div class="ui large bulleted list">
            <div class="item" v-for="n in news.slice(0,3)">
              <span v-html="n"></span>
            </div>
          </div>
        </div>
        <div class="ui segment column">
          <h3 class="ui header">如何使用：</h3>
          <div class="ui large ordered list">
            <div class="item">
              選擇單元進入教材
            </div>
            <div class="item">
              自學練功(可列印出紙本)
            </div>
            <div class="item">
              遇到問題可以直接在GOOGLE文件上留言提問
            </div>
            <div class="item">也可上
              <a href="https://www.facebook.com/groups/156709241062806/" target="_blank">
                <i class="facebook icon" />自學數學團
              </a>提問
            </div>
          </div>
        </div><!-- Segment END -->
      </div>
    </div>
    <div class = "ui container">
      <div class="ui input">
        <input id="find" type="text" v-model="s" placeholder="輸入關鍵字或年級" autofocus="">
      </div>
      <router-link class = 'item' to='/stones' exact=''>
        <i class="map icon" />摸石頭
      </router-link>
      <div class="ui stackable grid">
        <div class="ui ten wide column">
          <table class="ui celled striped table">
            <tr><th colspan="4">
              自學教材
            </th>
            <tr><th>單元</th><th>狀態</th><th>編輯進程（歡迎    
            <router-link class = 'item ' to='/donate' exact=''>
              <i class="gift icon" />出錢出力
            </router-link>）來加速</th></tr>
            <tr class="item" v-for="(u, index) in units" v-show="!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)">
              <td>
                <a target="_blank" :href="u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')">
                  <img :src="'https://www.google.com/s2/favicons?domain='+u.url" />{{ u.n }}(
                  <span v-show="u.g <= 0 && u.G <=0">學齡前</span>
                  <span v-show="u.g <= 0 && u.G > 0">學齡前~{{ u.G }}年級</span>
                  <span v-show="u.g > 0 && u.G > 0">{{ u.g }}~{{ u.G }}年級</span>)</a>
              </td>
              <td>            
                <a target="_blank" :href="u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')">
                  <span v-show="u.edit"><i class="edit icon"></i>草稿(歡迎共筆)</span>
                  <span v-show="!u.edit"><i class="comments icon"></i>完稿(歡迎留言)</span>
                </a>
              </td>
              <td>
                <a target="_blank" :href="u.url || ('https://3dw.github.io/mathprint/'+u.n+'.doc')">
             <!--     {{(u.p || (u.edit && 50) || 100) + '%'}} -->
                  <sui-progress :state="u.edit ? 'warning' : 'success'" :percent="u.p || (u.edit && 50) || 100" :label="(u.p || (u.edit && 50) || 100) + '%'" />
                </a>
              </td>
            </tr>
          </table>
          </div>
          <div class="ui six wide column">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true" width="320" height="1775" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['units'],
  data () {
    return {
      s: '',
      news: [
        '2018.10.自由數學更新版上線，歡迎使用、協作、樂捐支持！',
        '2018.10.新功能：您可以直接在教材頁面上留言提問與校誤',
        '2018.10.全部教材搬上<a href="https://drive.google.com/drive/folders/0B-3AeNXITt7ZaExCaDkxNlZxUXc" target="_blank">GOOGLE雲端硬碟</a>, 改為GOOGLE DOC']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
