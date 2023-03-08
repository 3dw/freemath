<template lang="pug">
  .hello
    br.fat-only
    h1 {{ sify('登入') }}
    h3 {{ sify('自主學習促進會會員和贊助會員可登入下載會員專區教材') }}
    .ui.form.container
      .ui.two.fields
        .field
          .ui.labeled.input
            .ui.label Email
            input(type="e-mail", placeholder="e-mail", v-model="mail")
        .fieid
          .ui.labeled.input
            .ui.label 手機號碼
            input(type="text", placeholder="手機號碼", v-model="phone", @keyup.enter="login()")
      br
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
      phone: null
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
      this.$emit('login', this.mail, this.phone)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .field {
    text-align: left;
    padding: 0 !important;
  }

  .ui.input {
    max-width: 350px;
    min-width: 280px;
  }

  input {

  }
</style>
