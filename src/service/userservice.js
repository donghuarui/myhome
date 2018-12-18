import userapi from '../api/userapi'
export default {
  test () {
    userapi.test()
  },
  login (data) {
    // const data = {
    //   userName,
    //   password
    // }
    return userapi.login(data)
  },
  getUserListData (page) {
    return userapi.getUserListData(page)
  },
  register (data) {
    data.valid = data.valid === true ? 1 : 0
    console.log('data', data)
    return userapi.register(data)
  }
}
