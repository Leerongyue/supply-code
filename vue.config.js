module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo/'
    : '/',
  lintOnSave: false,
  // publicPath: './',
  devServer: {
    proxy: {
      '/demo': {
        target: 'http://192.168.0.234:9003',// 你要请求的后端接口ip+port
        changeOrigin: true,// 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true,// 开启webSocket
        pathRewrite: {
          '^/demo': '',// 替换成target中的地址
        }
      }
    }
  }
}
