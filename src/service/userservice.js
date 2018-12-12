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
    console.log('data', data)
    return userapi.login(data)
  }
}
