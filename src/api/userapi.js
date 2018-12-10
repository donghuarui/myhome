import axios from 'axios'

export default {
  test (params) {
    return axios.request({
      url: 'test',
      method: 'get'
    })
  }
}
