import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import login from '@/view/login/login'
import store from '@/store/index'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  }]
// 页面刷新时，重新赋值token
console.log('ttt', sessionStorage.getItem('token'))
if (sessionStorage.getItem('token')) {
  alert(1)
  store.commit('setToken', sessionStorage.getItem('token'))
}

const router = new Router({
  mode: 'history',
  routes
})
// 这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    console.log('tttt', to.fullPath)
    if (store.state.user.token !== '') {
      alert(3)
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
