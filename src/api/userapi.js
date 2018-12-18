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
  /**
   * 获取用户列表
   * @param page
   * @returns {AxiosPromise<any>}
   */
  getUserListData (page) {
    return axios.request({
      url: 'api/user/getAll',
      method: 'get',
      params: page
    })
  },
  /**
   * 注册
   * @param params
   * @returns {AxiosPromise<any>}
   */
  register (params) {
    return axios.request({
      url: 'api/user/register',
      method: 'post',
      params
    })
  }
}
