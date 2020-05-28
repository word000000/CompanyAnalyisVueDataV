// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import dataV from '@jiaminghi/data-view'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { changeDefaultConfig } from '@jiaminghi/charts'

/**
 * @description 修改默认配置
 * @param {String} key          想要修改的配置项的key
 * @param {Object|Array} config 你的配置
 * @return {Undefined} 无返回值
 */
changeDefaultConfig('color', ['#67e0e3'])
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(dataV)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
