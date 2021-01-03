<template lang="pug">
  #app
    vue-headful(:title="$route.name +'@自由數學'")
    .ui.top.menu.no-print.thin-only
      router-link.item(to='/' exact='')
        i.home.icon
      router-link.item(to='/maps' exact='')
        i.map.icon
      router-link.item(to='/tools' exact='')
        i.angle.double.down.icon
      router-link.item(to='/outer' exact='')
        i.user.add.icon
      a.item(@click = "share=true; trackButton('share', 1)", :href="'https://www.facebook.com/sharer/sharer.php?u=http://math.alearn.org.tw'", target="_blank", rel="noopener noreferrer")
        i.facebook.icon
    .ui.top.labeled.icon.menu.no-print.fat-only
      router-link.item(to='/', exact='', name="home")
        i.home.icon
        | {{ sify('首頁') }}
      router-link.item(to='/maps', exact='', name="maps")
        i.map.icon
        | {{ sify('學習地圖') }}
      //router-link.item(to='/quiz', exact='')
        i.question.icon
        | 小測驗
      router-link.item(to='/tools', exact='', name="tools")
        i.angle.double.down.icon
        | {{ sify('小工具') }}
      router-link.item(to='/outer', exact='', name="outer")
        i.user.add.icon
        | {{ sify('外部資源') }}
      .right.menu
        //router-link.item(to='/vedio', exact='')
          i.play.icon
          | 導覽
        router-link.item(to='/intro', exact='', name="intro")
          i.book.icon
          | {{ sify('編創源起') }}
        // router-link.item(to='/faq' exact='')
          i.question.icon
          | 常見問題
        // router-link.item(to='/donate' exact='')
          i.gift.icon
          | 出錢出力
        // router-link.item(to='/chat' exact='')
          i.chat.icon
          | 留言板
        a.item(v-if = "!si", @click="si = true", name="sify")
          i.edit.icon
          | {{ sify('簡体') }}
        a.item(v-else, @click="si = false", name="tify")
          i.edit.icon
          | {{ sify('正體') }}
        a.item(href = "https://www.github.com/bestian/freemath",target="_blank", name="Source", rel="noopener noreferrer")
          i.github.icon
          | {{ sify('原始碼') }}
        a.item(@click = "share=true; trackButton('share', 1)", :href="'https://www.facebook.com/sharer/sharer.php?u=http://math.alearn.org.tw'", target="_blank", rel="noopener noreferrer", name="Share") 
          i.facebook.icon
          | {{ sify('臉書分享') }}
    main#main
      router-view(:si="si", :units='units', :play12="play12", :share = "share", :chats = "chats", @submit = "submit", @rand="rand", @changeCards = "changeCards", @makeCard = "makeCard", @useC="useC")
      // router-link#logo(to='/')
        img(src='./assets/logo.png')
      ad(:si="si")
</template>

<script>

import { play12Ref, chatsRef } from './firebase/db'
import Ad from './components/Ad-Be.vue'
import {sify} from 'chinese-conv'

export default {
  name: 'app',
  components: { Ad },
  data () {
    return {
      si: false,
      share: false,
      play12: undefined,
      chats: undefined,
      units: [
        {n: '分類', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/11FQ7urzmBNkfD8yeGPCw2PEq_1cqqpDRf-mDFCjQ5l0/edit?usp=sharing', edit: true, p: 80, left: 2},
        {n: '誰比較多', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/1afPtB_fNvTb2J58gWLlwAbtkXTdG589wquaq9vzJfZE/edit?usp=sharing', edit: true, p: 80, left: 3},
        {n: '認識數字', g: -1, G: -1, url: 'https://docs.google.com/drawings/d/1AH1j0rQzsNsVUW4Papgq4vAVZgEIDiQCREXVD9LbsgM/edit?usp=sharing', edit: true, p: 80, left: 0},
        {n: '數氣球', g: -1, G: -1, url: 'https://scratch.mit.edu/studios/1895336/', left: 1},
        {n: '加法', g: 0, G: 2, url: 'https://docs.google.com/document/d/18xrId9-15sm5VCdFY5cHZtygNRvKu6ZOi1XFY_k-2mw/edit?usp=sharing', edit: true, p: 50, left: 0},
        {n: '湊十釣魚', g: 0, G: 2, url: 'https://bestian.github.io/fishing-10/', edit: false, p: 100, left: 1},
        {n: '減法', g: 1, G: 2, url: 'https://docs.google.com/document/d/1xrxA_OfzcXkIgMInwXTXy3FAEkkDy4NRTUOkvFnvDMk/edit?usp=sharing', edit: true, p: 50, left: 1},
        {n: '百數表', g: 1, G: 3, url: 'https://drive.google.com/file/d/0B-3AeNXITt7ZeElLZXdxczF2TTVud0VTLXg2eFhMT2htT2FN/view', left: 2},
        {n: '認識十進位', g: 1, G: 2, url: 'https://docs.google.com/drawings/d/1jS6GPgAOGorEcSHUlJaHYYB6RB43l9v5JzxPlWwDbPY/edit?usp=sharing', edit: true, p: 20, left: 0},
        {n: '乘法A~D', g: 2, G: 4, url: 'https://docs.google.com/document/d/15YqUGEehxC63GfYXMrihKvbT_w93nx-H4m0ZuFkpbjo/edit?usp=sharing', edit: true, p: 90, left: 0},
        {n: '乘法E~F', g: 2, G: 5, url: 'https://docs.google.com/document/d/1zUE7ROOqhaIALC3k0rimZPv8Fo1lf8-gYORG1Wr6eXg/edit?usp=sharing', edit: true, p: 90, left: 1, pro: true},
        {n: '除法', g: 2, G: 5, url: 'https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing', edit: true, p: 90, left: 2},
        {n: '除法直式的意涵', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=RvP7ICoxRGs', left: 0},
        {n: '除法直式精熟', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=o73K7oUH_-4', left: 1},
        {n: '餘量的處理', g: 3, G: 5, url: 'https://www.youtube.com/watch?v=falQiyDLL50', left: 2},
        {n: '倍數著色', g: 3, G: 5, url: 'https://bestian.github.io/color-math/', left: 3},
        {n: '分數', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1c1ufnqICyQy0UcsZTqpkIBpBkCPDyQQsH1CB1Bj84_g/edit?usp=sharing', left: 0},
        {n: '面積的估算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1LLNZQY4JSUc_pZ4K2LPHRA0pnJCfRdPE8Oqxejk29hI/edit?usp=sharing', left: 1},
        {n: '數線', g: 4, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1zZIt-DV6TRzENoDAFX3B-_EPISEGL91KCXd7JIofOx0/edit?usp=sharing', left: 2},
        {n: '時間的計算', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1fjnXcv0yHUCObK3_yRxLtrrDjBKIv_DSqEb_xkswiF8/edit?usp=sharing', edit: true, p: 90, left: 3},
        {n: '體積與容積', g: 5, G: 6, wiki: '', url: 'https://docs.google.com/document/d/1YDhE2j3YfOvlIbQxry-EKBz7LxeQiVt7mM-eCcwL-nE/edit?usp=sharing', left: 0, pro: true},
        {n: '代數入門', g: 5, G: 6, wiki: '代數入門', url: 'https://docs.google.com/document/d/1LVcw277KiS3CHgle0b-LG5uMA6NN2HO6y_0rLZPvQe8/edit?usp=sharing', left: 1},
        {n: '分數到小數', g: 5, G: 6, wiki: '小數', url: 'https://docs.google.com/document/d/1xr9bhw0qcsio0R3FU9gUOIjW8Ir2mQpAh0fjJh4cnu0/edit?usp=sharing', left: 2, pro: true},
        {n: '物理量與單位換算', g: 5, G: 6, url: 'https://docs.google.com/document/d/12R1oi-Jia84mYixQBys83TIiM_eMCJfNzQLtXgrLLis/edit', edit: true, p: 30, left: 3, pro: true},
        {n: '四則運算總複習', g: 5, G: 7, wiki: '', url: 'https://docs.google.com/document/d/11-ouXYWYIfawLMPGOSkXtC_AclO2A6SBHryXfr3NKng/edit?usp=sharing', left: 4},
        {n: '因數與倍數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1RcZy2CN6HSP-wsXb1g61A-Sq0QWjwY3TCJVRWTq3fTQ/edit?usp=sharing', left: 0, pro: true},
        {n: '正負數', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1Agtn1WeZ1QELg3wDHAibw4q2IDyEHU3X1pwj0qaKA-Q/edit?usp=sharing', left: 1},
        {n: '比與比值', g: 6, G: 8, wiki: '比值', url: 'https://docs.google.com/document/d/1jzeGGHqUmgEWZDvywl4xXUNoVPzUoTa_w1J0JzoUk8o/edit?usp=sharing', left: 2},
        {n: '小學數學觀念精華', g: 6, G: 9, url: 'https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=sharing', p: 100, left: 3, pro: true},
        {n: '正負分數', g: 7, G: 7, wiki: '有理數', url: 'https://docs.google.com/document/d/1tD4_6l1spXg7p6M7bRBb8wNwIJcCSfQIPh_LNu-rfjE/edit?usp=sharing', left: 0, pro: true},
        {n: '一元一次方程式', g: 7, G: 8, wiki: '方程式', url: 'https://docs.google.com/document/d/1GLAu6BaheHxIGMqUVmz4CfgHJEVJxrP-cc_SaJI3jow/edit?usp=sharing', left: 0.5},
        {n: '不等式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1KjWUKOMWFHBqlnx6NfZHWb_T8EeMA2GJsvZMmZA5C7k/edit?usp=sharing', left: 1},
        {n: '指數與科學記號', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1j5tdf0TirLjFHTLIcWy4lgSe1oIFh7NshM6GDHCOduE/edit?usp=sharing', left: 1.5, pro: true},
        {n: '二元一次方程式', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1v80VUYFsiW5V_jEOwPdOAHya5V75XQRzvRfbwnwpPLI/edit?usp=sharing', left: 2, pro: true},
        {n: '直角座標', g: 7, G: 8, wiki: '座標', url: 'https://docs.google.com/document/d/1ghJHjgS5YUNBjjfkpyQtAX0Njx9npQnzIj-4--_11tw/edit?usp=sharing', left: 2.5},
        {n: '函數圖形', g: 7, G: 8, wiki: '函數', url: 'https://docs.google.com/document/d/163OdWL9EwW4LxRTHIIzpVCnohcg4f3vpebXe2nfFT8E/edit?usp=sharing', left: 3, pro: true},
        {n: '一元二次方程式', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing', left: 0, pro: true},
        {n: '幾何代數_乘法公式', g: 8, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1kjy84i-d_j_pnEp8bXqjkL8zQN6fDZ6kHpZCfY_lqHY/edit?usp=sharing', left: 0.5},
        {n: '勾股定理', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1rPovRRDJ_JBPpQ-MVasmb3s1tXdDcZKGCKLc0TW5fCI/edit?usp=sharing', left: 1, pro: true},
        {n: '根式運算', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/10oB3rrEhC0yvLlilr8vjAu-Q9LuS6IzRLea4flzYNAo/edit?usp=sharing', left: 1.5, pro: true},
        {n: '幾何證明', g: 8, G: 9, wiki: '證明', url: 'https://docs.google.com/document/d/13clfEdnC5OZ3fp-NOWqO5HSOAEHMwxJN7BpKM1qkz7g/edit?usp=sharing', left: 2},
        {n: '全等形', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1oPIdcpSMcYED93EK8pTIwLbqg6tRZz0RyQXKp5HtkI8/edit?usp=sharing', left: 2.5, pro: true},
        {n: '尺規作圖', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1n3BiAVTJXojaYzwV7RjosJinobehwgJQ5IvZNeCAjnY/edit?usp=sharing', left: 3, pro: true},
        {n: '數列與級數', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1PSA7GuKDr2MFHbnzHgBduq-YwGykAzL866EB_yXZuk8/edit?usp=sharing', left: 0},
        {n: '多項式', g: 9, G: 10, wiki: '多項式', url: 'https://docs.google.com/document/d/1wFxpNIhsG2GyA-WLfrtlbqUxrnCKdVnDZ4HjsSw2vVI/edit?usp=sharing', left: 1, pro: true},
        {n: '機率與統計', g: 9, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1L2gtHUKAe-pANjFS6XE1fAHVYvjgs20MLOFY3ElYYfM/edit?usp=sharing', left: 1, pro: true},
        {n: '二次函數', g: 9, G: 10, wiki: '二次函數', url: 'https://docs.google.com/document/d/14WG9W2YWzH8t-8BjDBOEcOoJCXErI1qx1tz9geLKY3Q/edit?usp=sharing', left: 1.5, pro: true},
        {n: '圓與角', g: 9, G: 9, wiki: '圓', url: 'https://docs.google.com/document/d/1PShmOOnanz_iykeu9MEpjISHTMLXmBEMsR9otBYOlj4/edit?usp=sharing', left: 2},
        {n: '三角形的心', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1G3oG30oKd--F8t-IH2KKhEthAawf2e0C6SEGDbs2yP8/edit?usp=sharing', left: 2.5, pro: true},
        {n: '相似三角形', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1bLdm7nF8N4-JeyP0ODdVNUK1oos1OYiYCPnVkgoBhso/edit?usp=sharing', left: 3, pro: true},
        {n: '球體的體積', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1nSZuUmEuVyqwBQJIv61zQ_vxLm15GfmcmLSaBVHCtDc/edit#', edit: true, p: 10, left: 4, pro: true},
        {n: '指數與對數', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1NqKwWmTtMcFS8B5zYrVsqoJhY7Jh6YaiAwhnpONGzug/edit?usp=sharing', left: 1},
        {n: '極座標', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1nSckL7Ge66iC9XHd7tp0VMmLiDdtT78SFKZmTiSYlEw/edit?usp=sharing', edit: true, p: 80, left: 2, pro: true},
        {n: '國中數學觀念精華', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit?usp=sharing', p: 80, left: 3, pro: true},
        {n: '三角函數', g: 11, G: 12, wiki: '', url: 'https://docs.google.com/document/d/1W1ZhNi-rbMmB8im9RTJRPfjtw1a6EJSgo3An4d11Dl0/edit?usp=sharing', edit: true, p: 50, left: 3, pro: true},
        {n: '實無限與微分', g: 12, G: 12, url: 'https://docs.google.com/document/d/1W-lzb6HtaYWLU1S2ypVwmxP6jckXSe7n4oRxJiL52gw/edit?usp=sharing', edit: true, p: 80, left: 1, pro: true},
        {n: '實無限與積分', g: 12, G: 12, url: 'https://docs.google.com/document/d/1rWVyaTU31Wy4NFvwCtDpTlmEmNCRwqL4YOTpLHhfyi0/edit?usp=sharing', edit: true, p: 50, left: 2, pro: true}
      ]
    }
  },
  firebase: {
    play12: play12Ref,
    chats: chatsRef
  },
  methods: {
    sify (t) {
      if (this.si) {
        return sify(t)
      } else {
        return t
      }
    },
    trackButton (t, v) {
      this.$gtag.event('action', {
        event_category: t,
        event_action: t,
        event_label: t,
        value: v
      })
    },
    submit: function (n, email, t) {
      var o = {
        n: n,
        email: email,
        t: t,
        time: (new Date()).getTime()
      }
      if (t) {
        this.$firebaseRefs.chats.push(o)
        window.alert('留言已送出')
      } else {
        window.alert('請輸入留言')
      }
    },
    rand: function (max) {
      var list = []
      for (var i = 0; i < this.play12.cards.length; i++) {
        var r = Math.floor(Math.random() * max) + 1
        list[i] = r
      }
      play12Ref.child('cards').update((list))
      play12Ref.child('myNum').update({0: 0})
      play12Ref.child('unused').update([true, true, true, true])
      this.$forceUpdate()
    },
    changeCards: function () {
      console.log(play12Ref)
      if (this.play12.max[0] === 6) {
        play12Ref.child('max').update({
          0: 9
        })
      } else {
        play12Ref.child('max').update({
          0: 6
        })
      }
    },
    makeCard: function () {
      var idx = this.play12.unused.map((o) => o).indexOf(false)
      var v = this.play12.myNum[0]
      play12Ref.child('myNum').update({0: 0})
      var list = this.play12.cards.map(function (o) { return o })
      list[idx] = v
      play12Ref.child('cards').update((list))

      list = this.unused.map(function (o) { return o })
      list[idx] = true
      play12Ref.child('unused').update((list))
    },
    useC: function (i, n, op) {
      console.log(n)
      var ans = this.play12.myNum[0]
      if (!op) {
        play12Ref.child('myNum').update({ 0: n })
      } else {
        if (op === '+') { play12Ref.child('myNum').update({0: ans + n}) }
        if (op === '-') { play12Ref.child('myNum').update({0: ans - n}) }
        if (op === '*') { play12Ref.child('myNum').update({0: ans * n}) }
        if (op === '/') { play12Ref.child('myNum').update({0: ans / n}) }
      }

      var list = this.play12.unused.map(function (o) { return o })
      list[i] = false
      play12Ref.child('unused').update((list))
    }
  },
  mounted () {
    if (navigator.language === 'zh-cn' || navigator.language === 'zh-CN' || navigator.userLanguage === 'zh-cn') {
      this.si = true
    }
    this.units.sort(function (a, b) { return a.g - b.g })
  },
  watch: {
    $route (to, from) {
      console.log(from.path)
      console.log(to.path)
      this.$gtag.event('action', {
        event_category: 'navigate',
        event_action: 'from:' + from.path + ' to:' + to.path,
        event_label: 'from:' + from.path + ' to:' + to.path,
        value: 'from:' + from.path + ' to:' + to.path
      })
    }
  }
}
</script>


<style>

html, body {
  padding-top: 0
}

.fade-leave {  }

.fade-leave-active {
  opacity: 0;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei',
                'Microsoft YaHei',
                'STHeiti',
                'Apple LiGothic Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.print-only {
  visibility: hidden !important;
  display: none !important;
}

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
  .print-only {
    visibility: visible !important;
    display: block !important;
  }
  img, div, .card, .column {
    page-break-inside: avoid !important;
  }
}

#logo {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999999;
  background-color: transparent !important;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

#logo:hover {
  right: 1em;
}

#logo img {
  width: 10vw;
}

.menu .item {
  justify-content: center;
}

.ui.menu {
  margin-top: 0 !important;
}

a, button, .clickable {
  cursor: pointer !important;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.router-link-active {
  background-color: #ccf !important;
}

.invisible {
  color: transparent !important;
}

p {
    text-align: left;
    line-height: 1.6;
    font-size: 18px;
}

.gray {
  color: gray
}

</style>
