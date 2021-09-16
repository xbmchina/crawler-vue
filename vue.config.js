module.exports = {
  
    // 配置跨域请求
    devServer: {
      port: 8080,
      host: 'localhost',
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: process.env.VUE_APP_URL,
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/crawler'
          }
        }
      }
  
    }
  
  }
  