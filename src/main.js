// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/index' // 实例化 store
import iView from 'iview'
import './index.less'
import 'iview/dist/styles/iview.css'
import config from '@/config'
import axios from 'axios'

window._ = require('lodash')//为了在控制台使用lodash的方法
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
Vue.prototype.$axios = axios
Vue.use(iView, {
    transfer: true,
    size: 'small'
})
Vue.use(Vuex)
Vue.config.productionTip = false
//全局的 axios 默认值
axios.defaults.headers.common['Authentication-Token'] = store.state.user.token
// const depreted_aios = axios.create({
//   // baseURL: process.env.BASE_API, // api的base_url
//   timeout: 60000 // request timeout
// })

// 添加请求拦截器
axios.interceptors.request.use(config => {
// 在发送请求之前做些什么
// 判断是否存在token，如果存在将每个页面header都添加token
    if (store.state.user.token) {
        config.headers.common['Authentication-Token'] = store.state.user.token
    }
    return config
}, error => {
// 对请求错误做些什么
    return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:    // 返回 401 Unauthorized（未授权） 清除token信息并跳转到登录页面 让用户重新登录。
                    this.$store.commit('clearToken')
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)
    })
/* eslint-disable no-new */
let v = new Vue({
    el: '#app',
    router,
    store,
    axios,
    components: {App},
    template: '<App/>'
})
window.vm = v