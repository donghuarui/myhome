<template>
    <div>
        <Modal
                v-model="UserListModal" width="1000"
                @on-ok="ok"
                @on-cancel="cancel">
            <p slot="header" style="color:#f60;text-align:center">
                <!--<Icon type="ios-information-circle"></Icon>-->
                <span>用户列表</span>
                <Button type="success" @click="addOneClick()">注册</Button>
            </p>
            <Table :columns="userListColumns" :data="userListData"></Table>
            <Row type="flex" justify="center">
                <i-Col>
                    <Page :total="userListTotal" :page-size="page.pageSize" show-elevator show-total
                          @on-change="changePageNum"/>
                </i-Col>
            </Row>
        </Modal>
        <Modal
                v-model="addOneModal" width="800"
                :title="title"
                @on-ok="addOne('registerRef')"
                @on-cancel="cancel">
            <Form ref="registerRef" :model="register" :rules="registerRules" inline>
                <FormItem prop="username">
                    <i-Input type="text" v-model="register.username" placeholder="username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </i-Input>
                </FormItem>
                <FormItem prop="password" v-show="register.id===undefined">
                    <i-Input type="password" v-model="register.password" placeholder="password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </i-Input>
                </FormItem>
                <FormItem>
                    <i-Switch v-model="register.valid" @on-change="change" true-value='1' false-value='0'/>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import util from '@/util/util'

    export default {
        name: 'UserListModal',
        props: [],
        data() {
            return {
                title: '',
                UserListModal: false,
                addOneModal: false,
                register: {
                    username: '',
                    password: '',
                    valid: '0'
                },
                registerRules: {
                    username: [
                        {required: true, message: 'Please fill in the user name', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Please fill in the password.', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: 'The password length cannot be less than 6 bits',
                            trigger: 'blur'
                        }
                    ]
                },
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
                        key: 'valid',
                        render: (h, params) => {
                            return h('div', params.row.valid === '1' ? '可用' : '不可用')
                        }
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
                                        type: 'warning',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.editOneClick(params.row)
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
                                            this.deleteOneClick(params.row.id)
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
            ...mapActions(['getUserListData', 'registerOrLoginAction', 'deleteOneClickAction']),
            ok() {
            },
            cancel() {
            },
            changeModal(status) {
                this.UserListModal = status
                this.getUserListData(this.page)
            },
            changePageNum(pageNum) {
                this.page.pageNum = pageNum
                this.getUserListData(this.page)
            },
            addOneClick() {
                this.title = '添加'
                this.addOneModal = true
            },
            change(status) {
                this.$Message.info('开关状态：' + status)
            },
            addOne(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.registerOrLoginAction({
                            id: this.register.id,
                            username: this.register.username,
                            password: this.register.password,
                            valid: this.register.valid
                        }).then(res => {
                            if (res !== undefined) {
                                this.$Message.success('保存成功!')
                                this.getUserListData(this.page)// 重新加载列表
                            } else {
                                this.$Message.success('保存失败!')
                            }
                        })
                    } else {
                        this.$Message.error('请重新填写表单')
                    }
                })
            },
            deleteOneClick(p) {
                this.deleteOneClickAction({id: p}).then(res => {
                    this.$Message.success('删除成功!')
                    this.getUserListData(this.page)// 重新加载列表
                })
            },
            editOneClick(row) {
                this.title = '编辑'
                this.register = row
                this.addOneModal = true
            }
        }
    }
</script>
