# myhome
个人网站前端部分
=======
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
#git地址
https://github.com/donghuarui/myhome.git


#less 安装
npm install -g less
npm install less less-loader --save

2018年12月13日20:35:39
#配置外网域名映入
调用后台api地址  http://178w5920e8.iok.la/SpringBootJpa
config/proxyConfig 中改为域名访问
config/index  中host改为本地ip地址

此时
解决Invalid Host header错误
build/webpack.base.conf.js中添加  
  devServer: {
       disableHostCheck: true,
     }  
域名 http://ezreal19950922.vicp.io/#/



2018年12月16日15:37:48
分页返回的对象
content
:
[,…]
first:true
last:false
number:0
numberOfElements:5
size:5
totalElements:11
totalPages:3

row快速复制
 <Row type="flex" justify="center" >
        <Col></Col>
 </Row>
 
2019年5月17日15:21:00
 axios相关
 https://www.kancloud.cn/yunye/axios/234845
 路由拦截器相关
 https://blog.csdn.net/qq673318522/article/details/55506650