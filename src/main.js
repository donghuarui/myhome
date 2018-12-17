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
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
Vue.use(iView, {
  transfer: true,
  size: 'small'
})
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
