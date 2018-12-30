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
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
Vue.prototype.$http = axios
Vue.use(iView, {
  transfer: true,
  size: 'small'
})
Vue.use(Vuex)
Vue.config.productionTip = false
axios.defaults.headers.common['Authentication-Token'] = store.state.user.token
// 添加请求拦截器
axios.interceptors.request.use(config => {
// 在发送请求之前做些什么
// 判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.user.token) {
    alert(4)
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
        case 401:
          this.$store.commit('clearToken')
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath} // 登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
