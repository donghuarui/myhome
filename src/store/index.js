import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'

// Load the full build.
// eslint-disable-next-line no-unused-vars
var _ = require('lodash')
// import _ from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user
  }
})
export default store
