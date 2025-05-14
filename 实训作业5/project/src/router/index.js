import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
  { path: '/', redirect:'/login' }, 
  { path: '/login', component: ()=> import ("@/components/Login.vue") }, 
] 
})

export default router
