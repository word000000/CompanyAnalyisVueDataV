import Vue from 'vue'
import Router from 'vue-router'
import ManyCompany from '@/components/ManyCompany'
import OneCompany from "../components/OneCompany";
import 'echarts/theme/dark.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManyCompany',
      component: ManyCompany
    },
    {
      path: '/test',
      name:'OneCompany',
      component: OneCompany
    }
  ]
})
