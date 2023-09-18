<template lang="pug">
  .hello
    h1.ui.header {{ sify('自由數學')}}
    .ui.segment.container.center.aligned
      h3.ui.header {{ sify('版本更新公告')}}
        .sub.header(v-for="(c, idx) in changelogs", :key="idx") {{c}}

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

.column {
  text-align: left;
}

.ui.button.group {
  background-color: #c9ffc9;
}

a img {
  /* filter: grayscale(100%); */
  margin: 0 3px;
}

.floated.right {
  float: right;
}

.tiny {
  width: 200px;
}

.rel-left {
  position: relative;
  left: 15vw;
  width: 60vw !important;
}

</style>
