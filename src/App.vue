<template lang="pug">
#app
  vue-headful(:title="$route.name +'@自由數學'")

  .ui.top.menu.no-print.thin-only
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
    router-link.item(to='/' exact='')
      i.home.icon
      | {{ sify('首頁') }}
    router-link.item(to='/trace' exact='')
      i.sort.amount.ui.icon
      | {{ sify('倒溯與前推') }}
    router-link.item(to='/ai' exact='')
      i.question.icon
      | {{ sify('AI家教') }}
    .right.menu
      button.item(@click="copyLink()")
        i.linkify.icon

  .ui.top.labeled.icon.menu.no-print.fat-only

    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars

    router-link.item(to='/', exact='', name="home")
      i.home.icon
      | {{ sify('首頁') }}
    router-link.item(to='/trace', exact='', name="trace")
      i.sort.amount.icon
      | {{ sify('倒溯與前推') }}
    router-link.item(to='/maps', exact='', name="trace")
      i.map.icon
      | {{ sify('學習地圖') }}
    router-link.item(to='/tools', exact='', name="tools")
      i.angle.double.down.icon
      | {{ sify('小工具') }}
    router-link.item(to='/resources', exact='', name="resources")
      i.book.icon
      | {{ sify('數學 × 程式教案庫') }}
    router-link.item(to='/ai', exact='', name="ai")
      i.question.icon
      | {{ sify('AI家教') }}
    
    .right.menu
      router-link.item(to='/intro', exact='', name="intro")
        i.book.icon
        | {{ sify('編創源起') }}
  
  .ui.sidebar.vertical.menu#side-menu(:class="{'hidden': !sidebarVisible}")
    router-link.item(to="/")
      router-link.item(to='/', exact='', name="home")
        i.home.icon
        | {{ sify('首頁') }}

      router-link.item(to='/intro', exact='', name="intro")
        i.book.icon
        | {{ sify('編創源起') }}
      

      router-link.item(to='/trace', exact='', name="intro")
        i.sort.amount.icon
        | {{ sify('倒溯與前推') }}

      router-link.item(to='/maps', exact='', name="maps")
        i.map.icon
        | {{ sify('學習地圖') }}

      router-link.item(to='/quiz', exact='', name="quiz")
        i.question.icon
        | {{ sify('小測驗') }}
      router-link.item(to='/tools', exact='', name="tools")
        i.angle.double.down.icon
        | {{ sify('小工具') }}
      router-link.item(to='/resources', exact='', name="resources")
        i.book.icon
        | {{ sify('數學 × 程式教案庫') }}
      router-link.item(to='/outer', exact='', name="outer")
        i.user.add.icon
        | {{ sify('外部資源') }}

      router-link.item(to='/changelogs', exact='', name="changelogs")
        i.sort.amount.up.icon
        | {{ sify('更新紀錄') }}

      router-link.item(to='/faq', exact='', name="faq")
        i.question.icon
        | {{ sify('常見問題') }}

      a.item(v-if = "!si", @click="si = true", name="sify")
        i.edit.icon
        | {{ sify('簡体') }}
      a.item(v-else, @click="si = false", name="tify")
        i.edit.icon
        | {{ sify('正體') }}
      

      router-link.item(to='/source', exact='', name="source")
        i.github.icon
        | {{ sify('原始碼') }}
      router-link.item(to='/link', exact='', name="link")
        i.globe.icon.no-float
        | {{ sify('友站連結') }}

      a.item(href="https://www.alearn.org.tw/donate", target="_blank", rel="noopener noreferrer", @click="trackButton('donate', 'donate'); goto('https://www.alearn.org.tw/donate')")
        i.money.icon
        | {{ sify('捐款支持') }}  

  .ui.sidebar.bg(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")

  main#main
    router-view(:changelogs="changelogs", :si="si", :units='units', :play12="play12", :share = "share", :chats = "chats", @submit = "submit", @rand="rand", @changeCards = "changeCards", @makeCard = "makeCard", @useC="useC", @shared = "shared", @login="login")
    // router-link#logo(to='/')
      img(src='./assets/logo.png')
    ad#ad.fat-only(:si="si")
  </template>
  
  <script>
  
  import { units } from './data/units.js';
  import { changelogs } from './data/changelogs.js'
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
        sidebarVisible: false,
        changelogs: changelogs,
        units: units
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
      goto(url) {
        window.open(url, '_blank')
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
      toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible
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
      copyLink () {
        if (!document.hasFocus()) {
          alert("Document does not have focus, cannot copy text.");
          return;
        }
        console.log(this.$route);
        const copyText = 'https://math.alearn.org.tw/#' + this.$route.path;
        navigator.clipboard.writeText(copyText)
          .then(() => {
            window.alert("Copied the text: " + copyText);
          })
          .catch(err => {
            console.error('Could not copy text: ', err);
          });
        this.$forceUpdate();
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
    font-family: Arial, sans-serif;  /* Simpler font stack */
    line-height: 1.6; 
    background-color: #fff;  /* White background */
    color: #333;  /* Dark gray text */
    margin: 0;
  }
  
  .ui.menu .item {
      padding: 0.92857143em 0.64285714em !important;
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
  
  .text-center  {
    text-align: center;
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
  
  .ui.menu button.item {
    border: none;
  }
  
  svg path {
    color: blue !important;
    stroke-width: 3 !important;
  }
  
  .padded {
    padding: .6em !important;
  }
  
  /* CSS */
  .ui.sidebar {
    transition: transform .3s ease, opacity .3s ease, visibility .3s ease !important;
    z-index: 1000;
    position: fixed;
    top: 40px;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #fff;
    opacity: 1;
    visibility: visible !important;
  }
  
  .ui.sidebar.bg {
    z-index: 2 !important; /* 設定一個低值 */
    background-color: rgba(180, 180, 180, 0.62); /* 確保有背景色 */
    width: 100vw;
    cursor: pointer;
  }
  
  .ui.sidebar.hidden {
    opacity: 0;
    visibility: hidden;
    transition: all 0s linear !important;
    transform: translateX(-100%); /* 隱藏時向左滑動 */
  }
  
  .tip a {
    color: blue !important;
    text-decoration: underline !important;
  }
  
  .bold {
    font-weight: bold !important;
  }
  
  </style>
  