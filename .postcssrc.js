//该文件是 postCss 的配置文件
// postCss 是一个简单的css处理工具，它有很多插件，它的功能由插件决定
// VueCli 帮我们配置了 postCss 的 autoprefixer 插件
// 我们再次配置会报红色警告
module.exports = {
  plugins: {
    // autoprefixer插件可以自动为css添加浏览器前缀
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']//配置浏览器的兼容版本
    // },

    // postcss-pxtorem配置
    'postcss-pxtorem': {
      // rootValue是根字号
      // 因为 amfe-flexible 是将宽度分为 10 份，所以这里根字号大小就是设计稿宽度的 1/10
      // 我们的设计稿是 750 ，但是 vant 的设计稿是 370，如何兼容？
      // rootValue 可以是 Number 也可以是 Function
      // rootValue: 37.5,
      rootValue({ file }) {//postcss-pxtorem每处理一个css文件就会执行一次这个代码
        // 执行的文件如果包含vant，就会找到索引值，那么就按37.5的根字号，如果不是vant，就按750
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },

      // 哪些css需要转化，*表示全部
      propList: ['*']
    }
  }
}