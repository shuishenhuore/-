import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/home',
      component: () => import('@/components/Home.vue'),
      redirect: '/home/users',
      children: [
         {  
          path: 'users/:id', 
          component: ()=> import ('@/components/subcomponents/MyUserDetail.vue'), 
          props:true 
        },
        // {
        //   path: 'rights',
        //   component: () => import('@/components/subcomponents/MyRights.vue')
        // },
        // {
        //   path: 'goods',
        //   component: () => import('@/components/subcomponents/MyGoods.vue')
        // },
        // {
        //   path: 'orders',
        //   component: () => import('@/components/subcomponents/MyOrders.vue')
        // },
        // {
        //   path: 'settings',
        //   component: () => import('@/components/subcomponents/MySettings.vue')
        // },
        // {
        //   path: 'menu',
        //   component: () => import('@/components/subcomponents/MyMenu.vue')
        // },
       
      ]
    }
  ]
})
router.beforeEach((to, from, next) => { 
if (to.path === '/login') { 
return next() 
} 
const token = localStorage.getItem('token') 
if (!token) { 
return next('/login') 
} 
next() 
}) 

export default router
