<template>
  <div class="hello">
    <div class = "ui container">
      <div class="ui input">
        <input id="find" type="text" v-model="s" placeholder="以關鍵字或年級查詢" autofocus="">
      </div>
      <div class="ui stackable grid">
        <div class="ui row">
          <div class="ui ten wide column">
            <table class="ui celled striped table">
              <tr><th colspan="4">             
                <h4>
                  請先參考
                  <a href = "https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>
                </h4>
              </th></tr>
              <tr><th colspan="4">
                自學教材
              </th></tr>
              <tr><th>單元</th><th>狀態</th><th>編輯進程<br/>（歡迎    
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
    </div> <!-- container END -->
    <div class="fb-comments no-print" data-href="http://math.alearn.org.tw" data-numposts="5"></div>
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
        '2015.05<a href="https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing" target="_blank">數學學習診斷是什麼？</a>上線了！',
        '2019.05<a href="https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing" target="_blank">給家長的教學引導</a>上線了！',
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
