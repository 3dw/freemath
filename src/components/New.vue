<template lang="pug">
  .hello
    h1.ui.header 歡迎
      .ui.segment.container.center.aligned
        .ui.button.group
          router-link.ui.huge.green.button(to="/hello") 查詢教材
          router-link.ui.huge.orange.button(to="/faq") 常見問題
</template>

<script>

export default {
  name: 'new',
  props: [],
  components: { },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.hello {
  text-align: center;
}

</style>
