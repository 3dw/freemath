import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '@/components/Intro'
import Maps from '@/components/Maps'
import Table from '@/components/Table'
import StonesLog from '@/components/StonesLog'
import Donate from '@/components/Donate'
import Vedio from '@/components/Vedio'
import Faq from '@/components/Faq'
import Card from '@/components/Card'
import Play12 from '@/components/Play12'
import Grid from '@/components/Grid'
import Outer from '@/components/Outer'
import Tools from '@/components/Tools'
import Quiz from '@/components/Quiz'
import Chat from '@/components/Chat'
import New from '@/components/New'
import One1 from '@/components/One1'
import One2 from '@/components/One2'
import One3 from '@/components/One3'
import One4 from '@/components/One4'
import One5 from '@/components/One5'
import One6 from '@/components/One6'
import One7 from '@/components/One7'
import One8 from '@/components/One8'
import One9 from '@/components/One9'
import Login from '@/components/Login'
import Changelogs from '@/components/Changelogs'
import TraceBack from '@/views/TraceBack'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '首頁',
      component: New
    },
    {
      path: '/trace',
      name: '倒溯與前推',
      component: TraceBack
    },
    {
      path: '/login',
      name: '登入',
      component: Login
    },
    {
      path: '/intro',
      name: '介紹',
      component: Intro
    },
    {
      path: '/changelogs',
      name: '修訂記錄',
      component: Changelogs
    },
    {
      path: '/maps',
      name: '學習地圖',
      component: Maps
    },
    {
      path: '/table',
      name: '教材表',
      component: Table
    },
    {
      path: '/log/:my',
      name: '摸石頭',
      component: StonesLog
    },
    {
      path: '/donate',
      name: '樂捐',
      component: Donate
    },
    {
      path: '/vedio',
      name: '影片',
      component: Vedio
    },
    {
      path: '/faq',
      name: '常見問題',
      component: Faq
    },
    {
      path: '/outer',
      name: '外部資源',
      component: Outer
    },
    {
      path: '/tools',
      name: '小工具',
      component: Tools
    },
    {
      path: '/card',
      name: '閃卡',
      component: Card
    },
    {
      path: '/play12',
      name: '湊12',
      component: Play12
    },
    {
      path: '/grid',
      name: '方格紙',
      component: Grid
    },
    {
      path: '/quiz',
      name: '小測驗',
      component: Quiz
    },
    {
      path: '/chat',
      name: '留言版',
      component: Chat
    },
    {
      path: '/one1',
      name: '倒溯法',
      component: One1
    },
    {
      path: '/one2',
      name: '前推法',
      component: One2
    },
    {
      path: '/one3',
      name: '具體經驗',
      component: One3
    },
    {
      path: '/one4',
      name: '繞道法',
      component: One4
    },
    {
      path: '/one5',
      name: '主客易位法',
      component: One5
    },
    {
      path: '/one6',
      name: '面對錯誤',
      component: One6
    },
    {
      path: '/one7',
      name: '適度的練習',
      component: One7
    },
    {
      path: '/one8',
      name: '互為主體、交互佈題法',
      component: One8
    },
    {
      path: '/one9',
      name: '數學學習診斷是什麼？',
      component: One9
    }
  ]
})
