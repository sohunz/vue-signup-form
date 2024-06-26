import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    name: "Home",
    path: '/',
    component: HomePage

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
