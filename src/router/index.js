import Vue from 'vue'
import Router from 'vue-router'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/log/:my',
      name: 'StonesLog',
      component: StonesLog
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/vedio',
      name: 'Vedio',
      component: Vedio
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/outer',
      name: 'Outer',
      component: Outer
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/play12',
      name: 'Play12',
      component: Play12
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
