<template lang="pug">
  .hello
    .ui.form.container
      .ui.input
        input(v-model="s", v-autofocus="", :placeholder="sify('以關鍵字或年級查詢')")
    br
    .ui.grid.container
      .four.column.doubling.row
        .column#col(v-for="u in units", v-show="u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)")
          a(@click = "op(u.url, u.n, u.pro)" , target="_blank")
            img(:src="'https://www.google.com/s2/favicons?domain='+u.url")
            | {{ sify(u.n) }} 
            br.thin-only
            span.gray {{ countGrade(u.g, u.G) }}
            .ui.teal.tag.label(v-show="u.pro") pro
    iframe(src='https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true', width='400', height='1775', frameborder='0', marginheight='0', marginwidth='0') Loading...
</template>

<script>
import {sify} from 'chinese-conv'

export default {
  name: 'stones',
  props: ['units', 'share', 'si'],
  data () {
    return {
      s: '',
      my: ''
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
    goto (u) {
      window.open(u.url)
    },
    check (u) {
      if (this.my.indexOf('_' + u.n + '_') === -1) {
        this.my = this.my + ',' + '_' + u.n + '_'
      } else {
        this.my = this.my.replace(',' + '_' + u.n + '_', '')
        this.my = this.my.replace('_' + u.n + '_', '')
      }
      this.my = this.my.replace('_undefined', '')
      this.$router.push('/stones/' + this.my)
    }
  },
  mounted () {
    this.my = '_' + this.$route.params.my
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
