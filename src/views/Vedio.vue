<template lang="pug">
  .hello
    ul.ui.divided.big.list
      .item
        | 可參考
        a(href='https://docs.google.com/document/d/14j0lEEZH5A1FNum7L6p9U1ETWx_0JTyasahIi9DLe3w/edit', target='_blank')
          | 給家長的教學引導
      .item
        | 可參考
        a(href='https://docs.google.com/document/d/14KB9cukNH3pF3ZYNGG79w8WMD77EYb7dxGEQ7vzxeGc/edit?usp=sharing', target='_blank')
          | 數學學習診斷是什麼？
      .item
        iframe(width='80%', height='300', src='https://www.youtube.com/embed/4lmydQfv6B4', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
</template>

<script>
export default {
  name: 'vedio',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  margin-top: 85px;
}
</style>
