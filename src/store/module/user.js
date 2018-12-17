// import { login, logout, getUserInfo } from '@/api/user'
// import { setToken, getToken } from '@/libs/util'
import userservice from '@/service/userservice'
export default {
  state: {
    userListData: [],
    userListTotal: 0,
    username: '',
    userId: '',
    avatorImgPath: '',
    // token: getToken(),
    access: ''
  },
  mutations: {
    setUserListData (state, res) {
      console.log('res', res)
      state.userListData = res.content
      state.userListTotal = res.totalElements
    },
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.username = name
    },
    setAccess (state, access) {
      state.access = access
    }
  },
  actions: {
    test () {
      userservice.test()
    },
    getUserListData ({state, commit}, page) {
      // let pageNum = page.pageNum
      // let pageSize = page.pageSize
      userservice.getUserListData(page).then(res => {
        let data = res.data
        commit('setUserListData', data.data)
      })
    },
    handleLogin ({ commit }, {username, password}) {
      console.log('eeee', username, password)
      username = username.trim()
      return new Promise((resolve, reject) => {
        userservice.login({
          username,
          password}).then(res => {
          const data = res.data.data
          console.log('data', data)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
        // login({
        //   userName,
        //   password
        // }).then(res => {
        //   const data = res.data
        //   commit('setToken', data.token)
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        // })
      })
    },
    // // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('setToken', '')
        //   commit('setAccess', [])
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        // })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // getUserInfo(state.token).then(res => {
        //   const data = res.data
        //   commit('setAvator', data.avator)
        //   commit('setUserName', data.user_name)
        //   commit('setUserId', data.user_id)
        //   commit('setAccess', data.access)
        //   resolve(data)
        // }).catch(err => {
        //   reject(err)
        // })
        resolve()
      })
    }
  }
}
