<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" style="margin-top: 0px" @on-select="selectMenu">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        我的主页
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        日志
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        相册
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        留言板
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        说说
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        个人档
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />
          用户管理
        </template>
        <MenuGroup title="使用">
          <MenuItem name="userList">用户列表</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-construct" />
        综合设置
      </MenuItem>
      <User></User>
    </Menu>
    <UserListModal ref = 'userListRef'></UserListModal>
    <!--<Button @click="testOne" size="large" type="success">点击</Button>-->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import User from './user/user'
import UserListModal from './user/UserListModal'
export default {
  components: {User, UserListModal},
  name: 'myhead',
  data () {
    return {
      theme1: 'dark',
      userListStatus: false
    }
  },
  methods: {
    ...mapActions(['test']),
    testOne () {
      this.test()
    },
    selectMenu (name) {
      switch (name) {
        case 'userList' :
          this.userList()
          break
      }
    },
    userList () {
      this.$refs.userListRef.changeModal(true)
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
