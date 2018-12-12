import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import login from '@/view/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
