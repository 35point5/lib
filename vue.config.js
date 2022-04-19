const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/lib': {
        target: 'http://localhost:80',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
