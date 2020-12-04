<template lang="pug">
  .hello
    h1.ui.header 歡迎使用自由數學
    .ui.divider
    .ui.segment.container.center.aligned
      .ui.buttons
        a.ui.huge.orange.button(@click="trackButton('search', 1); goto('hello')")
          i.search.icon
          | 查詢教材
        a.ui.huge.blue.button(to="/faq", @click="trackButton('faq', 1); goto('faq')")
          i.question.icon
          | 常見問題
      .ui.divider
      .ui.buttons
        a.ui.huge.green.button(href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011", target="_blank", @click="trackButton('elemantary', 5)")
          i.user.icon
          | 小學數學
        a.ui.huge.teal.button(href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit", target="_blank", @click="trackButton('junior', 5)")
          i.users.icon
          | 國中數學
    .ui.form.container
      .ui.input
        input(v-model="s", v-autofocus="", placeholder="以關鍵字或年級查詢")
    br
    .ui.grid.container
      .four.column.doubling.row
        .column#col(v-for="u in units", v-show="u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)")
          a(@click = "op(u.url, u.n)" target="_blank")
            img(:src="'https://www.google.com/s2/favicons?domain='+u.url")
            | {{ u.n }} 
            br.thin-only
            span.gray {{ countGrade(u.g, u.G) }} 
    
    iframe(src='https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true', width='400', height='1775', frameborder='0', marginheight='0', marginwidth='0') Loading...
</template>

<script>

export default {
  name: '首頁',
  props: ['units'],
  components: { },
  data () {
    return {
      s: ''
    }
  },
  methods: {
    op (url, name) {
      this.$gtag.query('event', 'view', {
        name: name,
        url: url
      })
      window.open(url)
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

.ui.button.group {
  background-color: #c9ffc9;
}

a img {
  filter: grayscale(100%);
  margin: 0 3px;
}

</style>
