

import  { createRouter,createWebHistory } from 'vue-router'
const Custom = () => import(/*webpackChunkName*/'@/views/CustomTransition.vue')
const Other = () => import(/*webpackChunkName*/'@/views/OtherTransition.vue')

const  routes = [
    //单个路由过渡
    // {path:'/',component:Custom,meta:{transition:'slide-left'}},
    // {path:'/other',component:Other,meta:{transition:'slide-right'}},
    {path:'/',component:Custom},
    {path:'/other',component:Other,
    redirect:{path:'/about'},
      beforeEnter:()=>{
        return false
      } 
    }

]

const router = createRouter({
    history:createWebHistory(), 
    routes
})
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})
export default router