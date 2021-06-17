<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('登入') }}
    .ui.form.container
      .field
        .ui.input
          input(type="e-mail", placeholder="e-mail", v-model="mail")
      .fieid
        .ui.input
          input(type="password", placeholder="身份證字號", v-model="id")
      .ui.huge.green.button(@click = "login()") {{ sify('登入') }}

</template>

<script>

import {sify} from 'chinese-conv'

export default {
  name: 'intro',
  props: ['si'],
  data () {
    return {
      mail: null,
      id: null
    }
  },
  methods: {
    sify (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    login(){
      this.$emit('login', this.mail, this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
