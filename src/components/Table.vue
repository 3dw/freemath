<template lang="pug">
  .hello
    .ui.container
      .ui.input
        input#find(type='text', v-model='s', placeholder='以關鍵字或年級查詢', autofocus='')
      .ui.stackable.grid
        .ui.row
          .ui.ten.wide.column
            table.ui.celled.striped.table
              tbody
                tr
                  th(colspan='4')
                    h4
                      | 請先參考
                      a(href='https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit?usp=sharing', target='_blank') 給家長的教學引導
                tr
                  th(colspan='4')
                    | 自學教材
                tr
                  th 單元
                  th 狀態
                  th
                    | 編輯進程
                tr.item(v-for='(u, index) in units', v-show='!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)')
                  td
                    a(target='_blank', @click = "op(u.url, u.n, u.pro)")
                      img(:src="'https://www.google.com/s2/favicons?domain='+u.url")
                      | {{ u.n }}(
                      span(v-show='u.g <= 0 && u.G <=0') 學齡前
                      span(v-show='u.g <= 0 && u.G > 0') 學齡前~{{ u.G }}年級
                      span(v-show='u.g > 0 && u.G > 0') {{ u.g }}~{{ u.G }}年級
                      | )
                      .ui.teal.tag.label(v-show="u.pro") pro
                  td
                    a(target='_blank', @click = "op(u.url, u.n, u.pro)")
                      span(v-show='u.edit')
                        i.edit.icon
                        | 草稿(歡迎共筆)
                      span(v-show='!u.edit')
                        i.comments.icon
                        | 完稿(歡迎留言)
                  td
                    a(target='_blank', @click = "op(u.url, u.n, u.pro)" )
                      // {{(u.p || (u.edit && 50) || 100) + '%'}}
                      sui-progress(:state="u.edit ? 'warning' : 'success'", :percent='u.p || (u.edit && 50) || 100', :label="(u.p || (u.edit && 50) || 100) + '%'")
          .ui.six.wide.column
            iframe(src='https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true', width='320', height='1775', frameborder='0', marginheight='0', marginwidth='0') Loading...
    // container END
    .fb-comments.no-print(data-href='http://math.alearn.org.tw', data-numposts='5')

</template>

<script>
export default {
  name: 'hello',
  props: ['units', 'share'],
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
  },
  methods: {
    op (url, name, pro) {
      this.$gtag.query('event', 'view' + name, {
        name: name,
        url: url,
        pro: pro
      })
      if (!pro || this.share) {
        window.open(url)
      } else {
        if (window.confirm('會員專區-您可以按臉書分享單次解鎖，或加入會員。您願意成為贊助會員嗎？')) {
          this.$gtag.query('event', 'donate' + name, {
            name: name,
            url: url,
            pro: pro
          })
          window.alert('請填表註冊，完全手續後，發e-mail至: bestian@gmail.com申請免費教材，謝謝!')
          setTimeout(() => { window.open('https://sites.google.com/view/autoalearn/%E9%97%9C%E6%96%BC%E6%9C%AC%E6%9C%83/%E6%88%90%E7%82%BA%E8%B4%8A%E5%8A%A9%E6%9C%83%E5%93%A1') }, 500)
        } else {
          this.$gtag.query('event', 'not_donate' + name, {
            name: name,
            url: url,
            pro: pro
          })
          window.alert('請按臉書分享單次解鎖')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
