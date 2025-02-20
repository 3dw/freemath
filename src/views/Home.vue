<template lang="pug">
.hello
  h1.ui.header {{ sify('自由數學 - 開源教材教法')}}
    Tips(:si="si")
  .ui.divider
  
  iframe#podcast(width="100%" height="340",
    src="https://www.youtube.com/embed/BTB5DdKOIHw?si=As0xp6f4dlw&list=PLebzuoh5ZI3LrVduRDqLcxCxlkruyDL27" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
  
  .ui.segment.container.center.aligned#changelog-container
    changelog(:changelogs = "changelogs")
  
  .ui.grid.container
    .ui.row
      .column.center.aligned
        h4.black {{ sify('本站所有教材皆以CC-BY-SA授權分享')}} 
        br
        img.tiny(src="../assets/cc-by-sa.png")
        h1 
        a.big.link(@click="show1 = !show1", title="請按此")     
          h1 {{ sify('給家長：一對一系列')}}
            i.ui.chevron.up.icon(v-if="show1")
            i.ui.chevron.down.icon(v-else)
        
    .ui.three.column.stackable.row#arts(v-show="show1")
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
        h1 {{ sify('給同學：開放教材')}}
    .ui.stackable.row
      .five.wide.column.center.aligned
        .ui.toggle.checkbox
          input(type="checkbox", v-model="useWiki")
          label 切換維基百科
      .five.wide.column.center.aligned
        .ui.toggle.checkbox
          input(type="checkbox", v-model="useAge")
          label 年齡查詢
            span(v-show="useAge") ：
        .ui.icon.input.shadow(v-show="useAge")
          input.prompt(type="number", v-model="age", min = "3" max ="18" step="1" :placeholder="sify('3歲~18歲')")
          i.search.icon
      .six.wide.column.center.aligned
        .ui.icon.input.shadow
          input.prompt(v-model="s" type="text", :placeholder="sify('關鍵字查詢')")
          i.search.icon
      br
  #main-cards-container.ui.doubling.four.cards.container
    .ui.card.main-card(v-for="(u, idx) in lazyShow(units, showMaterials, s, useAge, age, useWiki)" :key="idx")
      a(@click = "op(u.url, u.n, u.pro, u.wiki)" target="_blank" rel="noopener noreferrer")
        img.gray-scale(:src="'https://www.google.com/s2/favicons?domain='+u.url", :alt="sify(u.n)", v-if="!useWiki")
        img.gray-scale(src="https://www.google.com/s2/favicons?domain=https://zh.wikipedia.org", :alt="sify(u.n)", v-else)  
        //i.download.icon
        span(v-if="!useWiki") {{ sify(u.n) }}
        span(v-else) {{sify(u.wiki)}}
        br.thin-only
        span.floated.right.gray.bold.des(v-show="!useWiki") {{ countGrade(u.g, u.G) }}
        // .ui.teal.label(v-show="u.pro") pro
        br(v-if="u.d")
        span.gray.des(v-if="u.d") {{ sify(u.d) }}
    .column.main-card(v-if="!showMaterials && !s && !useAge && !useWiki")
      button.ui.large.green.button(@click="showMaterials = true; useAge = false") 按此看更多
        i.ui.chevron.right.icon

  .ui.segment.container.center.aligned
    h3.ui.header {{ sify('支持自由數學') }}
    p {{ sify('自由數學致力於提供優質的開源數學教材，您的支持能幫助我們持續發展') }}
    p {{ sify('捐款支持自由數學，共同推廣數學教育！') }}
    .ui.buttons
      a.ui.green.button(href="https://www.alearn.org.tw/#donate-online")
        i.ui.money.icon
        | {{ sify('線上捐款') }}
    p.small.text.gray {{ sify('您的捐款將用於教材研發與網站維護') }}
</template>

<script>

import {sify} from 'chinese-conv'
import Tips from '@/components/Home_Tips.vue'
import Changelog from '@/components/Home_Changelog.vue'

export default {
  name: 'Home',
  props: ['units', 'share', 'si', 'changelogs'],
  components: {
    Tips,
    Changelog
  },
  data () {
    return {
      showMaterials: true,
      s: '',
      useWiki: false,
      useAge: false,
      age: 9,
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
    lazyShow(units, showMaterials, s, useAge, age, useWiki) {
      if (showMaterials || s || useAge || useWiki) {
        return units.filter((o) => {
          return this.showOrNot(o, s, useAge, age, useWiki)
        })
      } else {
        return units.slice(0, 28)
      }
    },
    op (url, name, pro, wiki) {
      this.$gtag.query('event', 'view' + name, {
        name: name,
        url: url,
        pro: pro
      })
      if (!this.useWiki) {
        window.open(url)
      } else {
        window.open('https://zh.wikipedia.org/wiki/' + wiki)
      }
      // if (!pro || this.share) {
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
    showOrNot(u, s, useAge, age, useWiki) {
      var ans = true
      if (useAge) {
        console.log('age')
        console.log(age - 6)
        console.log(u.g)
        console.log(u.G)
        console.log(age - 6 < u.g || age - 6 > u.G)
        if (age - 6 < u.g || age - 6 > u.G) {
          ans = false
        }
      }
      if (s && u.n.indexOf(s) == -1) {
        ans = false
      }
      if (useWiki && !u.wiki) {
        ans = false
      }
      return ans
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
<style scoped>
.ui.header {
  font-size: 1.5em;
  margin-top: 1em;
}

.hello {
  text-align: center;
  height: 100vh;
  width: 100vw;
  padding: 1em 0;
}

.ui.segment {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 1.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#main-cards-container {
  min-width: 360px;
  max-width: 1140px;
  margin: 0 auto;
}

.main-card {
  padding: .4em !important;
  text-align: left;
  margin-top: 1em;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.main-card a {
  font-size: 1.2rem;
  color: #007bff;
}

.main-card a .des {
  font-size: 0.9em;
  color: #6c757d;
}

.main-card img.gray-scale {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.column {
  text-align: left;
}

.ui.button.group {
  background-color: #f8f9fa;
}

a img {
  width: 18px;
  margin: 0 3px;
}

a.sub.header {
  color: #007bff;
}

.floated.right {
  float: right;
}

.tiny {
  width: 180px;
}

#podcast {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9; /* 保持影片比例 */
  margin: 0 auto;
}


#podcast, #changelog-container {
  max-width: 460px !important; /* 設定最大寬度並對齊 */
}

.ui.toggle.checkbox label {
  font-size: 0.9em;
}

.ui.icon.input.shadow input {
  font-size: 0.9em;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#arts .column {
  font-size: 1.1rem;
}
</style>