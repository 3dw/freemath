<template lang="pug">
.hello
  #ad
    a(href="https://hack.bestian.tw", target="_blank", rel="noopener noreferrer")
      img.ad(src="/ad-be.jpg" :alt="sify('本站由Bestian製作，歡迎學習架網站')")
      | {{ sify('本站由Bestian製作，歡迎學習架網站') }}
</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: 'Ad',
  props: ['si'],
  data() {
    return { };
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#ad {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: rgba(255,255,255,0.8);
  border-radius: 5px;
  padding: .5em .5em;
  font-size: 16px;
  transition: all 0.5s ease;
}

#ad:hover {
  font-size: 20px;
}

.ad {
  width: 3em;
}

</style>
