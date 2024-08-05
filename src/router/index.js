import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from "../views/ContactView.vue"
import TeamView from "../views/TeamView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // Loaded initially
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // Lazy-loaded when needed
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // Loaded initially
      component: ContactView
    },
    {
      path: '/team',
      name: 'team',
      // Loaded initially
      component: TeamView
    },
  ]
})

export default router
