<template lang="pug">
  .chats
    sui-header(size="large") {{ msg }}
    .ui.left.aligned.segment.container
      .ui.comments
        h3.ui.dividing.header 歡迎留言
        .comment(v-for="c in chats" :key="c.time")
          a.avatar
            img(src="../assets/logo.png")
          .content
            a.author(:href="'mailto:' + c.email", target="_blank")   {{ c.n }} 說：
            .text {{ c.t }}
              .metadata
                span.date {{ parseTime(c.time) }}
      .ui.form
        .two.fields
          .required.field
            label 您的大名:
            input(type='text' v-model="myName")
          .required.field
            label Email:
            input(type='email' v-model="myEmail")
          .required.field
            label 請留言:
            input(type='text' v-model="myText" placeholder="您想說什麼？")
        .ui.submit.button(@click="submit(myName, myEmail, myText)") 留言
      br
      br

</template>
<script>

export default {
  name: 'Chat',
  props: ['likes', 'chats'],
  data () {
    return {
      msg: '留言版',
      'myName': '訪客',
      'myEmail': '',
      'myText': ''
    }
  },
  methods: {
    submit: function (n, email, t) {
      this.myName = '訪客'
      this.myEmail = ''
      this.myText = ''
      this.$emit('submit', n, email, t)
    },
    parseTime: function (t) {
      return (new Date(t)).toLocaleDateString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
