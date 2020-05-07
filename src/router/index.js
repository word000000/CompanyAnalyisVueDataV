import Vue from 'vue'
import Router from 'vue-router'
import ManyCompany from '@/components/ManyCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManyCompany',
      component: ManyCompany
    }
  ]
})
