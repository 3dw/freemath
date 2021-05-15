<template lang="pug">
  .hello
    h1.ui.header {{ sify('歡迎使用自由數學')}}
    .ui.divider
    .ui.segment.container.center.aligned
      .ui.buttons.fat-only
        a.ui.huge.blue.button(to="/faq", @click="trackButton('faq', 1); goto('faq')", rel="noopener noreferrer")
          i.question.icon
          | {{ sify('常見問題')}}
      .ui.vertical.buttons.thin-only
        a.ui.huge.orange.button(@click="trackButton('search', 1); goto('hello')", rel="noopener noreferrer")
          i.search.icon
          | {{ sify('查詢教材')}}
        a.ui.huge.blue.button(to="/faq", @click="trackButton('faq', 1); goto('faq')", rel="noopener noreferrer")
          i.question.icon
          | {{ sify('常見問題')}}
      .ui.divider
      .ui.buttons.fat-only
        a.ui.huge.green.button(href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011", target="_blank", @click="trackButton('elemantary', 5)", rel="noopener noreferrer")
          i.user.icon
          | {{ sify('小學數學')}}
        a.ui.huge.teal.button(href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit", target="_blank", @click="trackButton('junior', 5)", rel="noopener noreferrer")
          i.users.icon
          | {{ sify('國中數學')}}
      .ui.vertical.buttons.thin-only
        a.ui.huge.green.button(href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011", target="_blank", @click="trackButton('elemantary', 5)", rel="noopener noreferrer")
          i.user.icon
          | {{ sify('小學數學')}}
        a.ui.huge.teal.button(href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit", target="_blank", @click="trackButton('junior', 5)", rel="noopener noreferrer")
          i.users.icon
          | {{ sify('國中數學')}}
    .ui.grid.container
      .ui.row
        .column.center.aligned
          h1 一對一系列
      .ui.three.column.doubling.row
        .column
          router-link(to = "/one1") {{ sify('一、倒溯法')}}
        .column
          router-link(to = "/one2") {{ sify('二、前推法')}}
        .column
          router-link(to = "/one3") {{ sify('三、具體經驗')}}
        .column
          router-link(to = "/one4") {{ sify('四、繞道法--渡過心理障礙')}}
        .column
          router-link(to = "/one5") {{ sify('五、主客易位法')}}
        .column
          router-link(to = "/one6") {{ sify('六、面對錯誤')}}
        .column
          router-link(to = "/one7") {{ sify('七、適度的練習')}}
        .column
          router-link(to = "/one8") {{ sify('八、互為主體、交互佈題法')}}
        .column
          router-link(to = "/one9") {{ sify('數學學習診斷是什麼？')}}
    br
    .ui.form.container
      .ui.input
        input(id = "s" v-model="s", v-autofocus="", :placeholder="sify('以關鍵字或年級查詢')")
        label(for = "s") _
    br
    br
    .ui.grid.container
      .ui.row
        .column.center.aligned
          h1 開放教材
      .four.column.doubling.row
        .column#col(v-for="u in units", v-show="u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)")
          a(@click = "op(u.url, u.n, u.pro)" target="_blank" rel="noopener noreferrer")
            img(:src="'https://www.google.com/s2/favicons?domain='+u.url" :alt="sify(u.n)")
            | {{ sify(u.n) }}
            br.thin-only
            span.gray {{ countGrade(u.g, u.G) }}
            .ui.teal.tag.label(v-show="u.pro") pro
    
    iframe(src='https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true', width='400', height='1775', frameborder='0', marginheight='0', marginwidth='0' title="Form") Loading...
</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: '首頁',
  props: ['units', 'share', 'si'],
  components: { },
  data () {
    return {
      s: '',
    }
  },
  methods: {
    sify (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
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
          this.$gtag.event('action', {
            event_category: 'donate' + name,
            event_action:  'donate' + name,
            event_label:  'donate' + name,
            value: 50
          })
          window.alert('請填表註冊，完全手續後，發e-mail至: bestian@gmail.com申請免費教材，謝謝!')
          setTimeout(() => { window.open('https://sites.google.com/view/autoalearn/%E9%97%9C%E6%96%BC%E6%9C%AC%E6%9C%83/%E6%88%90%E7%82%BA%E8%B4%8A%E5%8A%A9%E6%9C%83%E5%93%A1') }, 500)
        } else {
          this.$gtag.event('action', {
            event_category: 'not_donate' + name,
            event_action:  'not_donate' + name,
            event_label:  'not_donate' + name,
            value: 0
          })
          if (window.confirm('您願意在臉書分享自由數學，以單次解鎖教材嗎？')) {
              this.$gtag.event('action', {
                event_category: 'share' + name,
                event_action:  'share' + name,
                event_label:  'share' + name,
                value: 30
              })
              this.$emit('shared')
              window.open('https://www.facebook.com/sharer/sharer.php?u=https://math.alearn.org.tw')
          } else {
            //
          }
        }
      }
    },
    countGrade (g, G) {
      var min = g
      if (g <= 0) {
        min = '學前'
      }
      var ans = G + '年級'
      if (G <= 0) {
        ans = '學前'
      }
      if (ans === min) {
        return ans
      } else {
        ans = min + '~' + ans
      }
      return ans
    },
    trackButton (t, v) {
      this.$gtag.event('action', {
        event_category: t,
        event_action: t,
        event_label: t,
        value: v
      })
    },
    goto (h) {
      this.$router.push(h)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">

.ui.header {
  margin-top: 1em;
}

.hello {
  text-align: center;
  height: 100vh;
  /* background-image: url(/static/img/bg-img.jpeg);
  background-repeat: repeat; */
}

.ui.segment {
  background-color: #c9ffc9;
}

.column#col {
  text-align: left;
  margin: 1em 0;
}

.column {
  text-align: left;
}

.ui.button.group {
  background-color: #c9ffc9;
}

a img {
  filter: grayscale(100%);
  margin: 0 3px;
}

</style>
