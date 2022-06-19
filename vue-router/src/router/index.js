

import { createRouter,createWebHistory } from 'vue-router';

const Home = () => import(/*webpackChunkName*/'@/views/Home.vue')
const About = () => import(/*webpackChunkName*/'@/views/About.vue')
const Profile = () => import(/*webpackChunkName*/'@/views/Profile.vue')
const routes = [
    {path:'/',component: Home},
    {path:'/about',component: About,children:[{path:'profile',component: Profile}]}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router