import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
  ]
})

router.beforeEach((to, from, next) => {
  // we wanted to use the store here
  if (!localStorage.access_token && to.path == '/dashboard') next('/login')
  else if (localStorage.access_token && to.path == '/login') next('/dashboard')
  else if (localStorage.access_token && to.path == '/register') next('/dashboard')
  else if (to.path == '/') next('/login')
  else next()
})

export default router
