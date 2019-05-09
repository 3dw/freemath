<template lang="jade">
  .hello
    .ui.bulleted.list
      router-link.item(to='/card' exact='')
        i.file.outline.icon
        | 閃卡
      router-link.item(to='/grid' exact='')
        i.expand.icon
        | 方格紙產生器
      router-link.item(to='/stones' exact='')
        i.map.icon
        | 摸石頭
      router-link.item(to='/play12' exact='')
        i.random.icon
        | 湊12
</template>

<script>

export default {
  name: 'Outer',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  margin-top: 100px;
}

.item {
  font-size: 3em;
}

</style>
