import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import terminal from './views/terminal/terminal/terminal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: {
        name:'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/terminal/terminal',
      name: 'terminal',
      component: () => import( '@/views/terminal/terminal/terminal.vue')
    },
    {
      path: '/terminal/user',
      name: 'userTerminal',
      component: () => import( '@/views/terminal/user/user.vue')
    },
    {
      path: '/terminal/terminalLog',
      name: 'terminalLog',
      component: () => import( '@/views/terminal/terminalLog/terminalLog.vue')
    },
    {
      path: '/equipment/lingke',
      name: 'lingke',
      component: () => import( '@/views/equipment/lingke/lingke.vue')
    },
    {
      path: '/Simpool/operationLog',
      name: 'operationLog',
      component: () => import( '@/views/Simpool/operationLog/operationLog.vue')
    },
    {
      path: '/Simpool/Simpool',
      name: 'Simpool',
      component: () => import( '@/views/Simpool/Simpool/Simpool.vue')
    },
    {
      path: '/simCard/simCardQuery',
      name: 'simCardQuery',
      component: () => import( '@/views/simCard/simCardQuery/simCardQuery.vue')
    },
    {
      path: '/simCard/addSimCard',
      name: 'addSimCard',
      component: () => import( '@/views/simCard/addSimCard/addSimCard.vue')
    },
    {
      path: '/simCard/cardInQuiry',
      name: 'cardInQuiry',
      component: () => import( '@/views/simCard/cardInQuiry/cardInQuiry.vue')
    },
    {
      path: '/simCard/incomplete',
      name: 'incomplete',
      component: () => import( '@/views/simCard/incomplete/incomplete.vue')
    },
    {
      path: '/dataManage/mcc',
      name: 'mcc',
      component: () => import( '@/views/dataManage/mcc/mcc.vue')
    },
    {
      path: '/dataManage/operator',
      name: 'operator',
      component: () => import( '@/views/dataManage/operator/operator.vue')
    },
    {
      path: '/dataManage/parameter',
      name: 'parameter',
      component: () => import( '@/views/dataManage/parameter/parameter.vue')
    },
    {
      path: '/dataManage/meal',
      name: 'meal',
      component: () => import( '@/views/dataManage/meal/meal.vue')
    },
    {
      path: '/dataManage/user',
      name: 'userDataManage',
      component: () => import( '@/views/dataManage/user/user.vue')
    },
    {
      path: '/dataManage/rule',
      name: 'rule',
      component: () => import( '@/views/dataManage/rule/rule.vue')
    },

  ]
})
