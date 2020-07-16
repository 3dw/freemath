<template lang="pug">
  .hello
    .ui.form.container
      .ui.input
        input(v-model="s", v-autofocus="", placeholder="以關鍵字或年級查詢")
    br
    .ui.grid.container
      .four.column.doubling.row
        .column#col(v-for="u in units", v-show="u.n.indexOf(s) > -1 || (s >= u.g && s <= u.G)")
          a(:href="u.url", target="_blank")
            img(:src="'https://www.google.com/s2/favicons?domain='+u.url")
            | {{ u.n }} 
            br.thin-only
            span.gray {{ countGrade(u.g, u.G) }} 
    iframe(src='https://docs.google.com/forms/d/e/1FAIpQLSeYKTrcBFtsT0QV0NE5oog624LDffR1AQsxB6Gf9lEY9O9LIg/viewform?embedded=true', width='400', height='1775', frameborder='0', marginheight='0', marginwidth='0') Loading...
</template>

<script>
export default {
  name: 'stones',
  props: ['units'],
  data () {
    return {
      s: '',
      my: ''
    }
  },
  methods: {
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
