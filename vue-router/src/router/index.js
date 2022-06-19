

import { createRouter,createWebHistory } from 'vue-router';

const Home = () => import(/*webpackChunkName*/'@/views/Home.vue')
const About = () => import(/*webpackChunkName*/'@/views/About.vue')
const Profile = () => import(/*webpackChunkName*/'@/views/Profile.vue')
const  AboutChild = () => import(/*webpackChunkName*/'@/views/AboutChild.vue')
const routes = [
    {path:'/',component: Home},
    {path:'/about/:id',component: About,children:
    [
        {path:'',component:AboutChild},
        {path:'profile',component: Profile}
    ]
}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router