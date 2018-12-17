import axios from 'axios'

export default {
  test () {
    return axios.request({
      url: 'test',
      method: 'get'
    })
  },
  login (params) {
    return axios.request({
      url: 'api/user/login',
      method: 'post',
      params
    })
  },
  getUserListData (page) {
    return axios.request({
      url: 'api/user/getAll',
      method: 'get',
      params: page
    })
  }
}
