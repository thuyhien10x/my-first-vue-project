import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ContactView from "../views/ContactView.vue";
import CounterView from "../views/CounterView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //dc tai ngay tu ban dau
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      //cai nay chi dc tai khi can thiet
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      //dc tai ngay tu ban dau
      component: ContactView
    },
    {
      path: '/counter',
      name: 'counter',
      //dc tai ngay tu ban dau
      component: CounterView
    },
  ]
})

export default router
