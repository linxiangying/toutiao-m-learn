const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    port: 3000,
    host:'127.0.0.1'
  },
  lintOnSave:false
})
