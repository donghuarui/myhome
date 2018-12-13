module.exports = {
  proxy: {
    '/api': {    //将www.exaple.com印射为/apis
      target: 'http://178w5920e8.iok.la/SpringBootJpa',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': ''   //需要rewrite的,
      }
    }
  }
}
