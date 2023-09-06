<template lang="pug">
  #app
    vue-headful(:title="$route.name +'@自由數學'")
    .ui.top.menu.no-print.thin-only
      router-link.item(to='/' exact='')
        i.home.icon
      router-link.item(v-show="!user", to='/login' exact='')
        i.user.icon
      router-link.item(to='/maps' exact='')
        i.map.icon
      router-link.item(to='/tools' exact='')
        i.angle.double.down.icon
      router-link.item(to='/outer' exact='')
        i.user.add.icon
      a.item(href = "https://www.github.com/bestian/freemath",target="_blank", name="Source", rel="noopener noreferrer")
        i.github.icon
    .ui.top.labeled.icon.menu.no-print.fat-only
      router-link.item(to='/', exact='', name="home")
        i.home.icon
        | {{ sify('首頁') }}
      // router-link.item(v-show="!user", to='/login' exact='')
        i.user.icon
        span(v-if="!user") {{ sify('登入') }}
        span(v-else) {{ sify('歡迎') }}
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
    main#main
      router-view(:si="si", :units='units', :play12="play12", :share = "share", :chats = "chats", @submit = "submit", @rand="rand", @changeCards = "changeCards", @makeCard = "makeCard", @useC="useC", @shared = "shared", @login="login")
      // router-link#logo(to='/')
        img(src='./assets/logo.png')
      ad#ad(:si="si")
</template>

<script>

import { play12Ref, chatsRef, usersRef } from './firebase/db'
import Ad from './components/Ad-Be.vue'
import {sify} from 'chinese-conv'

export default {
  name: 'app',
  components: { Ad },
  data () {
    return {
      user: null,
      users: [],
      si: false,
      share: false,
      play12: undefined,
      chats: undefined,
      units: [
        {n: '分類', d:'學習如何將物品與圖形分門別類', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/11FQ7urzmBNkfD8yeGPCw2PEq_1cqqpDRf-mDFCjQ5l0/edit?usp=sharing', edit: true, p: 80, left: 2},
        {n: '誰比較多', d:'從數量的比較培養數感和量感', g: -1, G: -1, url: 'https://docs.google.com/presentation/d/1afPtB_fNvTb2J58gWLlwAbtkXTdG589wquaq9vzJfZE/edit?usp=sharing', edit: true, p: 80, left: 3},
        {n: '認識數字', d:'學習阿拉拍數字', g: -1, G: -1, url: 'https://docs.google.com/drawings/d/1AH1j0rQzsNsVUW4Papgq4vAVZgEIDiQCREXVD9LbsgM/edit?usp=sharing', edit: true, p: 80, left: 0},
        {n: '數氣球', d:'一個數數和加法的練習小遊戲', g: -1, G: -1, url: 'https://scratch.mit.edu/studios/1895336/', left: 1},
        {n: '加法影片', d:'加法教材的導覽影片', g: 0, G:2, url: 'https://www.youtube.com/watch?v=wATHWDkCYN0', edit: false, p:100, left: 0},
        {n: '加法', d:'從頭開始學習加法', g: 0, G: 2, url: 'https://docs.google.com/document/d/18xrId9-15sm5VCdFY5cHZtygNRvKu6ZOi1XFY_k-2mw/edit?usp=sharing', edit: true, p: 50, left: 0},
        {n: '湊十釣魚', d:'練習湊十的小遊戲', g: 0, G: 2, url: 'https://bestian.github.io/fishing-10/', edit: false, p: 100, left: 1},
        {n: '減法影片', d:'減法教材的導覽影片', g: 1, G: 2, url: 'https://www.youtube.com/watch?v=Htzb84EbFzY', edit: false, p: 100, left: 1},
        {n: '減法', d:'從頭開始學習減法', g: 1, G: 2, url: 'https://docs.google.com/document/d/1xrxA_OfzcXkIgMInwXTXy3FAEkkDy4NRTUOkvFnvDMk/edit?usp=sharing', edit: true, p: 50, left: 1},
        {n: '百數表', d:'透過百數表，觀察百以內的數字的秩序', g: 1, G: 3, url: 'https://drive.google.com/file/d/0B-3AeNXITt7ZeElLZXdxczF2TTVud0VTLXg2eFhMT2htT2FN/view', left: 2},
        {n: '認識十進位', d:'學習阿拉拍數字的十進位規律', g: 1, G: 2, url: 'https://docs.google.com/drawings/d/1jS6GPgAOGorEcSHUlJaHYYB6RB43l9v5JzxPlWwDbPY/edit?usp=sharing', edit: true, p: 20, left: 0},
        {n: '乘法影片', d:'乘法教材的導覽影片', g: 2, G: 4, url: 'https://www.youtube.com/watch?v=04oIeiBHaqg', edit: false, p: 100, left: 0},
        {n: '乘法A~D', d:'從頭開始學習乘法', g: 2, G: 4, url: 'https://docs.google.com/document/d/15YqUGEehxC63GfYXMrihKvbT_w93nx-H4m0ZuFkpbjo/edit?usp=sharing', edit: true, p: 90, left: 0},
        {n: '乘法E~F', d:'乘法直式的學習', g: 2, G: 5, url: 'https://docs.google.com/document/d/1zUE7ROOqhaIALC3k0rimZPv8Fo1lf8-gYORG1Wr6eXg/edit?usp=sharing', edit: true, p: 90, left: 1, pro: true},
        {n: '除法', d:'從頭開始學習除法', g: 2, G: 5, url: 'https://docs.google.com/document/d/1uXxQuYTiBDUR5F-bTNXAS3yLma-i9f0yZey5Ck109o4/edit?usp=sharing', edit: true, p: 90, left: 2},
        {n: '除法直式的意涵', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=RvP7ICoxRGs', left: 0},
        {n: '除法直式精熟', g: 3, G: 4, url: 'https://www.youtube.com/watch?v=o73K7oUH_-4', left: 1},
        {n: '餘量的處理', g: 3, G: 5, url: 'https://www.youtube.com/watch?v=falQiyDLL50', left: 2},
        {n: '倍數著色', d:'透過百數表，觀察百以內的數字的倍數圖象秩序', g: 3, G: 5, url: 'https://bestian.github.io/color-math/', left: 3},
        {n: '分數影片', d:'分數教材的導覽影片', g: 4, G: 5, url: 'https://www.youtube.com/watch?v=DHoxJ3sfVLY', left: 0},
        {n: '分數', d:'從頭開始學習分數', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1c1ufnqICyQy0UcsZTqpkIBpBkCPDyQQsH1CB1Bj84_g/edit?usp=sharing', left: 0},
        {n: '面積的估算', d:'學習面積的意義和估計與計算，簡易的圖形面積算法', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1LLNZQY4JSUc_pZ4K2LPHRA0pnJCfRdPE8Oqxejk29hI/edit?usp=sharing', left: 1},
        {n: '數線', d:'學習用數線表示數字', g: 4, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1zZIt-DV6TRzENoDAFX3B-_EPISEGL91KCXd7JIofOx0/edit?usp=sharing', left: 2},
        {n: '時間的計算', d:'學習時間的加減法，以及六十進位制', g: 4, G: 5, wiki: '', url: 'https://docs.google.com/document/d/1fjnXcv0yHUCObK3_yRxLtrrDjBKIv_DSqEb_xkswiF8/edit?usp=sharing', edit: true, p: 90, left: 3},
        {n: '體積與容積', d:'學習體積與容積的相關知識', g: 5, G: 6, wiki: '', url: 'https://docs.google.com/document/d/1YDhE2j3YfOvlIbQxry-EKBz7LxeQiVt7mM-eCcwL-nE/edit?usp=sharing', left: 0, pro: true},
        {n: '代數入門', d:'學習用符號代表數，以及用代數解決數學問題', g: 5, G: 6, wiki: '代數入門', url: 'https://docs.google.com/document/d/1LVcw277KiS3CHgle0b-LG5uMA6NN2HO6y_0rLZPvQe8/edit?usp=sharing', left: 1},
        {n: '分數到小數', d:'從分數延伸學習，建立小數的概念', g: 5, G: 6, wiki: '小數', url: 'https://docs.google.com/document/d/1xr9bhw0qcsio0R3FU9gUOIjW8Ir2mQpAh0fjJh4cnu0/edit?usp=sharing', left: 2, pro: true},
        {n: '物理量與單位換算', d:'從單位換算學習比例', g: 5, G: 6, url: 'https://docs.google.com/document/d/12R1oi-Jia84mYixQBys83TIiM_eMCJfNzQLtXgrLLis/edit', edit: true, p: 30, left: 3, pro: true},
        {n: '四則運算總複習', d:'複習小學的四則運算', g: 5, G: 7, wiki: '', url: 'https://docs.google.com/document/d/11-ouXYWYIfawLMPGOSkXtC_AclO2A6SBHryXfr3NKng/edit?usp=sharing', left: 4},
        {n: '因數與倍數', d:'瞭解因倍數和公因數、公倍數，質因數分解等', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1RcZy2CN6HSP-wsXb1g61A-Sq0QWjwY3TCJVRWTq3fTQ/edit?usp=sharing', left: 0, pro: true},
        {n: '正負數', d:'透過減法，進入負數的領域', g: 6, G: 7, wiki: '', url: 'https://docs.google.com/document/d/1Agtn1WeZ1QELg3wDHAibw4q2IDyEHU3X1pwj0qaKA-Q/edit?usp=sharing', left: 1},
        {n: '比與比值', d:'學習比與比值和相關的應用問題', g: 6, G: 8, wiki: '比值', url: 'https://docs.google.com/document/d/1jzeGGHqUmgEWZDvywl4xXUNoVPzUoTa_w1J0JzoUk8o/edit?usp=sharing', left: 2},
        {n: '小學數學觀念精華', d:'一次複習所有小學的重要單元', g: 6, G: 9, url: 'https://docs.google.com/document/d/1xUDSZPP1lmReEpAOhCXKUEln105MrVjFo05E4FcpMx0/edit?usp=sharing', p: 100, left: 3, pro: true},
        {n: '正負分數', d:'透過減法和除法，進入負分數的領域', g: 7, G: 7, wiki: '有理數', url: 'https://docs.google.com/document/d/1tD4_6l1spXg7p6M7bRBb8wNwIJcCSfQIPh_LNu-rfjE/edit?usp=sharing', left: 0, pro: true},
        {n: '一元一次方程式', d:'學習一元一次方程式的列式和解題', g: 7, G: 8, wiki: '方程式', url: 'https://docs.google.com/document/d/1GLAu6BaheHxIGMqUVmz4CfgHJEVJxrP-cc_SaJI3jow/edit?usp=sharing', left: 0.5},
        {n: '不等式', d:'學習一元一次不等式的列式和解題', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1KjWUKOMWFHBqlnx6NfZHWb_T8EeMA2GJsvZMmZA5C7k/edit?usp=sharing', left: 1},
        {n: '指數與科學記號', d:'學習指數、指數律與科學記號', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1j5tdf0TirLjFHTLIcWy4lgSe1oIFh7NshM6GDHCOduE/edit?usp=sharing', left: 1.5, pro: true},
        {n: '二元一次方程式', d:'學習二元一次方程式的列式和解題', g: 7, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1v80VUYFsiW5V_jEOwPdOAHya5V75XQRzvRfbwnwpPLI/edit?usp=sharing', left: 2, pro: true},
        {n: '直角座標', d:'學習直角座標上的點和線如何表示', g: 7, G: 8, wiki: '座標', url: 'https://docs.google.com/document/d/1ghJHjgS5YUNBjjfkpyQtAX0Njx9npQnzIj-4--_11tw/edit?usp=sharing', left: 2.5},
        {n: '函數圖形', d:'學習直角座標上的函數圖形如何表示', g: 7, G: 8, wiki: '函數', url: 'https://docs.google.com/document/d/163OdWL9EwW4LxRTHIIzpVCnohcg4f3vpebXe2nfFT8E/edit?usp=sharing', left: 3, pro: true},
        {n: '一元二次方程式', d:'學習一元二次方程式的列式和解題', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/16fwpdw89fssKH4rpN5Ihc93zU-YCubBhzDUXs30wKcI/edit?usp=sharing', left: 0, pro: true},
        {n: '幾何代數_乘法公式', d:'學習用圖形解決代數問題，以及主要的乘法公式', g: 8, G: 8, wiki: '', url: 'https://docs.google.com/document/d/1kjy84i-d_j_pnEp8bXqjkL8zQN6fDZ6kHpZCfY_lqHY/edit?usp=sharing', left: 0.5},
        {n: '勾股定理', d:'學習勾股定理及其應用和證明', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1rPovRRDJ_JBPpQ-MVasmb3s1tXdDcZKGCKLc0TW5fCI/edit?usp=sharing', left: 1, pro: true},
        {n: '根式運算', d:'學習根式運算的各種技巧', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/10oB3rrEhC0yvLlilr8vjAu-Q9LuS6IzRLea4flzYNAo/edit?usp=sharing', left: 1.5, pro: true},
        {n: '幾何證明', d:'學習幾何證明的各種技巧', g: 8, G: 9, wiki: '證明', url: 'https://docs.google.com/document/d/13clfEdnC5OZ3fp-NOWqO5HSOAEHMwxJN7BpKM1qkz7g/edit?usp=sharing', left: 2},
        {n: '全等形', d:'學習利用全等形作幾何證明', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1oPIdcpSMcYED93EK8pTIwLbqg6tRZz0RyQXKp5HtkI8/edit?usp=sharing', left: 2.5, pro: true},
        {n: '尺規作圖', d:'學習基本的尺規作圖技巧', g: 8, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1n3BiAVTJXojaYzwV7RjosJinobehwgJQ5IvZNeCAjnY/edit?usp=sharing', left: 3, pro: true},
        {n: '數列與級數', d:'學習等差、等比數列與級數及其公式', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1PSA7GuKDr2MFHbnzHgBduq-YwGykAzL866EB_yXZuk8/edit?usp=sharing', left: 0},
        {n: '多項式', d:'學習基本的多項式運算', g: 9, G: 10, wiki: '多項式', url: 'https://docs.google.com/document/d/1wFxpNIhsG2GyA-WLfrtlbqUxrnCKdVnDZ4HjsSw2vVI/edit?usp=sharing', left: 1, pro: true},
        {n: '機率與統計', d:'學習基本的機率與統計概念', g: 9, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1L2gtHUKAe-pANjFS6XE1fAHVYvjgs20MLOFY3ElYYfM/edit?usp=sharing', left: 1, pro: true},
        {n: '二次函數', d:'學習二次函數的作圖和計算', g: 9, G: 10, wiki: '二次函數', url: 'https://docs.google.com/document/d/14WG9W2YWzH8t-8BjDBOEcOoJCXErI1qx1tz9geLKY3Q/edit?usp=sharing', left: 1.5, pro: true},
        {n: '圓與角', d:'學習用圓和角作幾何證明', g: 9, G: 9, wiki: '圓', url: 'https://docs.google.com/document/d/1PShmOOnanz_iykeu9MEpjISHTMLXmBEMsR9otBYOlj4/edit?usp=sharing', left: 2},
        {n: '三角形的心', d:'認識三角形的三顆心和相關的幾何證明', g: 9, G: 9, wiki: '', url: 'https://docs.google.com/document/d/1G3oG30oKd--F8t-IH2KKhEthAawf2e0C6SEGDbs2yP8/edit?usp=sharing', left: 2.5, pro: true},
        {n: '相似三角形', d:'學習用相似三角形作幾何證明', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1bLdm7nF8N4-JeyP0ODdVNUK1oos1OYiYCPnVkgoBhso/edit?usp=sharing', left: 3, pro: true},
        {n: '球體的體積', d:'學習球體體積公式的證明過程', g: 9, G: 10, wiki: '', url: 'https://docs.google.com/document/d/1nSZuUmEuVyqwBQJIv61zQ_vxLm15GfmcmLSaBVHCtDc/edit#', edit: true, p: 10, left: 4, pro: true},
        {n: '指數與對數', d:'學習指數律、對數概念和對數律', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1NqKwWmTtMcFS8B5zYrVsqoJhY7Jh6YaiAwhnpONGzug/edit?usp=sharing', left: 1},
        {n: '極座標', d:'學習用極座標表示點和曲線', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1nSckL7Ge66iC9XHd7tp0VMmLiDdtT78SFKZmTiSYlEw/edit?usp=sharing', edit: true, p: 80, left: 2, pro: true},
        {n: '國中數學觀念精華', d:'一次複習所有國中的重要單元', g: 10, G: 11, wiki: '', url: 'https://docs.google.com/document/d/1lw-1BIsl9uLPfphIQ_Ns4xbpLhE7D_KEn9B7Tomjrsw/edit?usp=sharing', p: 80, left: 3, pro: true},
        {n: '三角函數', d:'認識三角函數及其應用', g: 11, G: 12, wiki: '', url: 'https://docs.google.com/document/d/1W1ZhNi-rbMmB8im9RTJRPfjtw1a6EJSgo3An4d11Dl0/edit?usp=sharing', edit: true, p: 50, left: 3, pro: true},
        {n: '實無限與微分', d:'認識實無限、微分及其應用', g: 12, G: 12, url: 'https://docs.google.com/document/d/1W-lzb6HtaYWLU1S2ypVwmxP6jckXSe7n4oRxJiL52gw/edit?usp=sharing', edit: true, p: 80, left: 1, pro: true},
        {n: '實無限與積分', d:'認識實無限、積分及其應用', g: 12, G: 12, url: 'https://docs.google.com/document/d/1rWVyaTU31Wy4NFvwCtDpTlmEmNCRwqL4YOTpLHhfyi0/edit?usp=sharing', edit: true, p: 50, left: 2, pro: true}
      ]
    }
  },
  firebase: {
    play12: play12Ref,
    chats: chatsRef,
    users: usersRef
  },
  methods: {
    shared() {
      this.share = true
    },
    login(mail,phone) {
      // console.log(this.users)
      for (var i = 0; i < this.users.length; i++) {
        const u = this.users[i];
        if (u[0] == mail && u[1].replace('-', '') == phone.replace('-', '')) {
          this.share = true
          this.user = mail
          window.alert('登入成功')
          this.$router.push('/')
          return
        }
      }
      window.alert('登入失敗: e-mail或id不正確')
    },
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
      // console.log(play12Ref)
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
      // console.log(n)
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
      // console.log(from.path)
      // console.log(to.path)
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
  #ad {
    position: fixed;
    bottom: 0;
    right: 0 !important;
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

brbr.thin-only.one-line-only {
  height: .2em !important;
}

.shadow, .shadow input {
  background-color: transparent !important;
}

.shadow {
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
}

</style>
