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
    return userapi.register(data)
  },
  editUser (data) {
    return userapi.editUser(data)
  },
  deleteOne (data) {
    return userapi.deleteOne(data)
  }
}
