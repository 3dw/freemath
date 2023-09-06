<template lang="pug">
  .hello
    h1.ui.header {{ sify('自由數學')}}
      .sub.header
        span {{ sify('學習數學，在於秩序。')}}
        br.thin-only.one-line-only
        span {{ sify('擺脫幻象與迷惑，每日10分鐘，讓思想自由。')}}
    .ui.divider
    .ui.segment.container.center.aligned
      .ui.large.buttons.fat-only
        a.ui.green.button(href="https://github.com/bestian/freemath/wiki" rel="noopener noreferrer")
          i.blind.icon
          | {{ sify('新手上路')}}
        router-link.ui.blue.button(to="/faq", @click="trackButton('faq', 1); goto('faq')", rel="noopener noreferrer")
          i.question.icon
          | {{ sify('常見問題')}}
        a.ui.red.button(href="https://github.com/bestian/freemath/issues" rel="noopener noreferrer")
          i.bell.icon
          | {{ sify('回報問題')}}
        a.ui.purple.button(href="https://github.com/bestian/freemath/" rel="noopener noreferrer")
          i.adjust.icon
          | {{ sify('參與貢獻')}}
      .ui.vertical.large.buttons.thin-only
        a.ui.green.button(href="https://github.com/bestian/freemath/wiki" rel="noopener noreferrer")
          i.blind.icon
          | {{ sify('新手上路')}}
        router-link.ui.huge.blue.button(to="/faq", rel="noopener noreferrer")
          i.question.icon
          | {{ sify('常見問題')}}
        a.ui.red.button(href="https://github.com/bestian/freemath/issues", rel="noopener noreferrer")
          i.bell.icon
          | {{ sify('回報問題')}}
        a.ui.purple.button(href="https://github.com/bestian/freemath/", rel="noopener noreferrer")
          i.adjust.icon
          | {{ sify('參與貢獻')}}
      // .ui.divider
      // .ui.buttons.fat-only
        a.ui.huge.green.button(href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011", target="_blank", @click="trackButton('elemantary', 5)", rel="noopener noreferrer")
          i.user.icon
          | {{ sify('小學數學')}}
        a.ui.huge.teal.button(href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit", target="_blank", @click="trackButton('junior', 5)", rel="noopener noreferrer")
          i.users.icon
          | {{ sify('國中數學')}}
      // .ui.vertical.buttons.thin-only
        a.ui.huge.green.button(href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011", target="_blank", @click="trackButton('elemantary', 5)", rel="noopener noreferrer")
          i.user.icon
          | {{ sify('小學數學')}}
        a.ui.huge.teal.button(href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit", target="_blank", @click="trackButton('junior', 5)", rel="noopener noreferrer")
          i.users.icon
          | {{ sify('國中數學')}}
    .ui.grid.container
      .ui.row
        .column.center.aligned
          h1 
          a.big.link(@click="show1 = !show1", title="請按此")     
            h1 {{ sify('一對一系列')}}
             i.ui.chevron.down.icon
          
      .ui.three.column.stackable.row(v-show="show1")
        .column
          router-link(to = "/one1") 
           i.users.icon
           | {{ sify('一、倒溯法')}}
        .column
          router-link(to = "/one2") 
           i.users.icon
           |{{ sify('二、前推法')}}
        .column
          router-link(to = "/one3") 
           i.users.icon
           |{{ sify('三、具體經驗')}}
        .column
          router-link(to = "/one4") 
           i.users.icon
           |{{ sify('四、繞道法--渡過心理障礙')}}
        .column
          router-link(to = "/one5") 
           i.users.icon
           |{{ sify('五、主客易位法')}}
        .column
          router-link(to = "/one6") 
           i.users.icon
           |{{ sify('六、面對錯誤')}}
        .column
          router-link(to = "/one7") 
           i.users.icon
           |{{ sify('七、適度的練習')}}
        .column
          router-link(to = "/one8") 
           i.users.icon
           |{{ sify('八、互為主體、交互佈題法')}}
        .column
          router-link(to = "/one9") 
           i.users.icon
           |{{ sify('數學學習診斷是什麼？')}}
    br
    br
    .ui.grid.container
      .ui.row
        .column.center.aligned
          a.big.link(@click="scrollDown(200); showMaterials = !showMaterials", title="按此切換顯示")     
            h1 {{ sify('開放教材')}}
             i.ui.chevron.down.icon(v-if="!showMaterials")
             i.ui.chevron.up.icon(v-else)
          h3 {{ sify('本站所有教材皆以CC-BY-SA授權分享')}}
          br
          img.tiny(src="../assets/cc-by-sa.png")
      .ui.row 
        .column.center.aligned
          .ui.icon.input.rel-left.shadow
            input.prompt(v-model="s" type="text", :placeholder="sify('關鍵字查詢')")
            i.search.icon
        br
      .ui.four.column.doubling.row
        .column#col(v-for="u in lazyShow(units, showMaterials, s)", v-show="u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)")
          a(@click = "op(u.url, u.n, u.pro)" target="_blank" rel="noopener noreferrer")
            img(:src="'https://www.google.com/s2/favicons?domain='+u.url" :alt="sify(u.n)")
            i.download.icon
            | {{ sify(u.n) }}
            br.thin-only
            span.floated.right.gray {{ countGrade(u.g, u.G) }}
            // .ui.teal.label(v-show="u.pro") pro
            br(v-if="u.d")
            span.gray(v-if="u.d") -{{ sify(u.d) }}
      .ui.row.flex.flex-center(v-if="!showMaterials && !s", @click="showMaterials = true")
        .ui.large.green.button 按此看更多
          i.ui.chevron.right.icon

    
    // iframe(src="https://docs.google.com/forms/d/e/1FAIpQLSfH1kiD9W2IEekfC_nCEFtIjLsJTPiw8nDzIPAmOiUkbwIx8A/viewform?embedded=true", width="640" height="1371", frameborder="0", marginheight="0", marginwidth="0") 載入中…
    
    // MAKE A NEW FORM

</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: 'Home',
  props: ['units', 'share', 'si'],
  components: { },
  data () {
    return {
      showMaterials: false,
      s: '',
      show1: true
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
    // Array => Bool => String => Array 
    lazyShow(units, showMaterials, s) {
      if (showMaterials || s) {
        return units
      } else {
        return units.slice(0,10)
      }
    },
    op (url, name, pro) {
      this.$gtag.query('event', 'view' + name, {
        name: name,
        url: url,
        pro: pro
      })
      // if (!pro || this.share) {
        window.open(url)
      /* } else {
        if (window.confirm('會員專區-您可以加入會員。您願意成為贊助會員嗎？')) {
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
        }
      } */
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
    },
    scrollDown (n) {
      window.scrollTo(0, n)
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

.floated.right {
  float: right;
}

.tiny {
  width: 200px;
}

.rel-left {
  position: relative;
  left: 15vw;
  width: 60vw !important;
}

</style>
