import Vue from 'vue'
import App from './App.vue'
// 引入css
import '@/style/index.less'
// 引入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
