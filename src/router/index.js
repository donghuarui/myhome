import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import login from '@/view/login/login'
import test1 from '@/view/test1'
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
    },
    {
        path: '/Test1',
        name: 'test1',
        component: test1
    }
]
// 页面刷新时，重新赋值token
console.log('ttt', sessionStorage.getItem('token'))
if (sessionStorage.getItem('token')) {
    store.commit('setToken', sessionStorage.getItem('token'))
}

const router = new Router({
    mode: 'history',
    routes
})
// 这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限    //    if (to.meta.requireAuth) {
        console.log('tttt', to.fullPath)
        if (store.state.user.token !== '') {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router
