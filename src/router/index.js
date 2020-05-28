import Vue from 'vue'
import Router from 'vue-router'
import contestpanel from "../components/companycontest/contestpanel";
import companypanel from "../components/companypanel/companypanel";
import search from "../components/search/search";
import 'echarts/theme/dark.js'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
    },
    {
      path: '/contest',
      name: 'contestpanel',
      component: contestpanel
    },
    {
      path: '/company',
      name:'companypanel',
      component: companypanel
    }
  ]
})
