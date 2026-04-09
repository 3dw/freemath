<template lang="pug">
h3.ui.header#changelogs {{ sify('版本更新公告')}}
  div(v-for="(c, idx) in changelogs.slice(0, 3)", :key="idx")
    router-link.sub.header(v-if="c.r", :to="c.r") {{c.text}}
    a.sub.header(v-else-if="c.h", :href="c.h", target="_blank", rel="noopener noreferrer") {{c.text}}
    span.sub.header(v-else) {{c.text}}
</template>

<script>
import {sify} from 'chinese-conv'

export default {
  name: 'Changelog',
  props: ['si', 'changelogs'],
  data () {
    return {
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
  },
}
</script>

<style scoped>

#changelogs a {
  color: #0093ff !important;
}

#changelogs .sub.header {
  text-align: left;
}

</style>
