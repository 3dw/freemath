import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
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

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/hello',
      name: '查詢教材',
      component: Hello
    },
    {
      path: '/',
      name: '首頁',
      component: New
    },
    {
      path: '/intro',
      name: '介紹',
      component: Intro
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
    }
  ]
})
