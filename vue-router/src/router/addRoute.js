import  { createRouter,createWebHistory } from 'vue-router'
const About = () =>import(/*webpackChunkName*/'@/views/About.vue')
const Home = () => import(/*webpackChunkName*/'@/views/Home.vue')

const routes = [
    {
        path:'/',component:About
    },
    {
        path:'/home', component:Home
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router