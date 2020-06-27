<template lang="pug">
  .hello
    h1.ui.header 歡迎
    .ui.divider
    .ui.segment.container.center.aligned
      .ui.button.group
        a.ui.huge.green.button(@click="trackButton('search', 1); goto('hello')")
          i.search.icon
          | 查詢教材
        a.ui.huge.orange.button(to="/faq", @click="trackButton('faq', 1); goto('faq')")
          i.question.icon
          | 常見問題
      .ui.divider
      .ui.button.group
        a.ui.huge.purple.button(href="https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=drive_web&ouid=109123650148645242011", target="_blank", @click="trackButton('elemantary', 5)")
          i.user.icon
          | 小學數學
        a.ui.huge.teal.button(href="https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit", target="_blank", @click="trackButton('junior', 5)")
          i.users.icon
          | 國中數學
</template>

<script>

export default {
  name: '首頁',
  props: [],
  components: { },
  data () {
    return {
    }
  },
  methods: {
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

.hello {
  text-align: center;
  height: 100vh;
  background-image: url(/static/img/bg-img.jpeg);
  background-repeat: repeat;
}

.ui.segment {
  background-color: #c9ffc9;
}

.ui.button.group {
  background-color: #c9ffc9;
}

</style>
