<template lang="pug">
  .hello
    h1.ui.header {{ sify('自由數學')}}
    .ui.segment.container.left.aligned
      h3.ui.header {{ sify('版本更新公告')}}
        div(v-for="(c, idx) in changelogs", :key="idx")
          router-link.sub.header(v-if="c.r", :to="c.r") {{c.text}}
          a.sub.header(v-else-if="c.h", :href="c.h") {{c.text}}
          span.sub.header(v-else) {{c.text}}
</template>

<script>
import {sify} from 'chinese-conv'

export default {
  name: 'Home',
  props: ['units', 'share', 'si', 'changelogs'],
  components: { },
  data () {
    return {
      showMaterials: false,
      s: '',
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
    }
  }
}
</script>

<style scoped>
.ui.header {
  margin-top: 1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 2rem;
  color: #333;
}

.hello {
  text-align: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.ui.segment {
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 2em;
}

.ui.segment.container.left.aligned {
  max-width: 800px;
  margin: 0 auto;
}

a.sub.header {
  color: #1e70bf !important;
  text-decoration: underline;
  cursor: pointer;
}

span.sub.header {
  color: #555;
}

.router-link-active {
  font-weight: bold;
}

</style>
