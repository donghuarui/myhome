<template>
  <div>
    <Modal
            v-model="UserListModal" width="1000"
            title="用户列表"
            @on-ok="ok"
            @on-cancel="cancel">
      <Table :columns="userListColumns" :data="userListData"></Table>
      <Row type="flex" justify="center" >
        <i-Col>
        <Page :total="userListTotal" :page-size="page.pageSize" show-elevator show-total @on-change="changePageNum"/>
        </i-Col>
      </Row>
    </Modal>
    <Modal
            v-model="addOneModal" width="800"
            title="添加"
            @on-ok="addOne"
            @on-cancel="cancel">
      <Row>
      <i-Col span="8">
        <i-Input v-model="username" placeholder="请输入用户名" style="width: auto">
          <Icon type="ios-contact" slot="prefix" />
        </i-Input>
      </i-Col>
      <i-Col span="8">
        <i-Input v-model="password" placeholder="请输入密码" style="width: auto">
          <Icon type="ios-contact" slot="prefix" />
        </i-Input>
      </i-Col>
      <i-Col span="8">
        状态:
        <i-Switch v-model="valid" @on-change="change" true-value="1" false-value="0"/>
      </i-Col>
    </Row>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import util from '@/util/util'
export default {
  name: 'UserListModal',
  props: [],
  data () {
    return {
      UserListModal: false,
      addOneModal: false,
      username: '',
      password: '',
      valid: false,
      userListColumns: [
        {
          title: '创建时间',
          key: 'createTime',
          render: (h, i) => {
            let time = util.timestampToTime(i.row.createTime)
            return h('div', time)
          }
        },
        {
          title: '更新时间',
          key: 'updateTime',
          render: (h, i) => {
            let time = util.timestampToTime(i.row.updateTime)
            return h('div', time)
          }
        },
        {
          title: '用户名',
          key: 'username'
        },
        {
          title: '密码',
          key: 'password'
        },
        {
          title: '状态',
          key: 'valid'
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                style: {
                  marginRight: '2px'
                },
                props: {
                  type: 'success',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.addOneClick()
                  }
                }
              }, '添加'),
              h('Button', {
                style: {
                  marginRight: '2px'
                },
                props: {
                  type: 'warning',
                  size: 'small'
                },
                on: {
                  click: () => {
                  }
                }
              }, '编辑'),
              h('Button', {
                style: {
                  marginRight: '2px'
                },
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      page: {
        pageNum: 1,
        pageSize: 5
      }
    }
  },
  computed: {
    ...mapState({
      userListData: state => state.user.userListData,
      userListTotal: state => state.user.userListTotal
    })
  },
  methods: {
    ...mapActions(['getUserListData']),
    ok () {
    },
    cancel () {
    },
    changeModal (status) {
      this.UserListModal = status
      this.getUserListData(this.page)
    },
    changePageNum (pageNum) {
      this.page.pageNum = pageNum
      this.getUserListData(this.page)
    },
    addOneClick () {
      this.addOneModal = true
    },
    change (status) {
      this.$Message.info('开关状态：' + status)
    },
    addOne () {
      alert(1)
    }
  }

}
</script>
