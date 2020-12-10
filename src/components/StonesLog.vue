<template lang="pug">
  .river
    .ui.input
      input#find(type='text', v-model='s', placeholder='依關鍵字或年級搜詢', autofocus='')
    .stone(v-bind:class="{ checked: my.indexOf('_' + u.n + '_') > -1 }", v-for='u in units', v-bind:style="{top: u.g * 50 + 200 + 'px', left: u.left * 20 + 'vw' }", v-show='!s || u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)')
      a(@click = "op(u.url, u.n, u.pro)", target='_blank')
        .ui.teal.tag.label(v-show="u.pro") pro
      a(@click='check(u)')
        | {{ u.n }}
    iframe(src='https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true', width='400', height='1775', frameborder='0', marginheight='0', marginwidth='0') Loading...
</template>

<script>
export default {
  name: 'StonesLog',
  props: ['units'],
  data () {
    return {
      s: '',
      my: ''
    }
  },
  methods: {
    op (url, name, pro) {
      this.$gtag.query('event', 'view' + name, {
        name: name,
        url: url,
        pro: pro
      })
      if (!pro) {
        window.open(url)
      } else {
        if (window.confirm('贊助會員專區-您願意成為贊助會員嗎？')) {
          this.$gtag.query('event', 'donate' + name, {
            name: name,
            url: url,
            pro: pro
          })
          window.alert('請填表註冊，完成手續後，發e-mail至: bestian@gmail.com申請免費教材，謝謝!')
          setTimeout(() => { window.open('https://sites.google.com/view/autoalearn/%E9%97%9C%E6%96%BC%E6%9C%AC%E6%9C%83/%E6%88%90%E7%82%BA%E8%B4%8A%E5%8A%A9%E6%9C%83%E5%93%A1') }, 500)
        } else {
          this.$gtag.query('event', 'not_donate' + name, {
            name: name,
            url: url,
            pro: pro
          })
        }
      }
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
      this.$router.push('/log/' + this.my)
    }
  },
  mounted () {
    this.my = '_' + this.$route.params.my
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.river {
  position: relative;
  top: 0;
  left: 0;
  height: 500vh;
  width: 100vw;
  background-color: black;
}

.stone {
  font-size: 15px;
  position: absolute;
  padding: 1vw;
  width: 15vw;
  border-radius: 15px;
  background-color: white;
  border: 3px gray ridge;
}

.stone:hover {
  z-index: 999;
}

.stone.checked {
  background-color: #9f9;
  border: 3px gold ridge;
}

.ui.input {
  position: absolute;
  top: 10px;
  left: 33vw;
  width: 300px !important;
  z-index: 999;
}

#find {
  width: 250px !important;
}

iframe {
  position: absolute;
  top: 300vmin;
  left: 15vw;
}

</style>
