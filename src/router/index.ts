import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/components/Home/HomeIndex.vue'
import Summary from '@/components/Summary/SummaryIndex.vue'
import Projects from '@/components/Projects/ProjectsVue.vue'
import Contact from '@/components/Contact/ContactVue.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: "Erica's Portfolio" }
  }, {
    path: '/summary',
    name: 'summary',
    component: Summary,
    meta: { title: 'Resumo' }
  }, {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: { title: 'Projetos' }
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'Contato' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
