

import { createRouter,createWebHistory } from 'vue-router';

const Home = () => import(/*webpackChunkName*/'@/views/Home.vue')
const About = () => import(/*webpackChunkName*/'@/views/About.vue')
const Profile = () => import(/*webpackChunkName*/'@/views/Profile.vue')
const  AboutChild = () => import(/*webpackChunkName*/'@/views/AboutChild.vue')
const First = () => import(/*webpackChunkName*/'@/views/First.vue')
const Second = () => import(/*webpackChunkName*/'@/views/Second')
const Third = () => import(/*webpackChunkName*/'@/views/Third.vue')
const  UserDetails = () => import(/*webpackChunkName*/'@/views/UserDetails.vue')



function removeQuery(to){
    if(Object.keys(to.query).length){
        console.log(to.query)
        // return {path:to.path,query:{},hash:to.hash}

    }
}
const routes = [
    //将Props传递给路由组件，需要设置props；true
    // {path:'/:id',components: {default:Home,First,Second,Third},
    // props:{default:true,First:false}},
    //props为对象
    // {path:'/',component:Home,props:{username:'tanglu'}},
    //prop为函数,返回的对象中每一组key-value都会通过props传给Home组件
    {path:'/',name:'home',component:Home},
    // {path:'/home/:id',redirect:{name:'about'}},
    // {path:'/home',redirect:to => {
    //     // return { path: '/about',params:{id:to.params.id}}
    //     //相对重定向
    //     return '/'
    // }},
    {path:'/about/:id',name:'about',component: About,
    // beforeEnter:(to,from)=> {
    //     console.log('路由独享的前卫,只有在进入路由触发，不会在params,query,hash改变时触发，只有在不同的路由导航时，才会被触发。')
    // },
    beforeEnter:[removeQuery],
    children:
     [
        {path:'',component:AboutChild},
        {path:'profile',component: Profile}
      ]
    },
    {path:'/user',component:UserDetails}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    // scrollBehavior(to,from,savedPosition){
    //     // return {top:0}
    //     return {
    //         el:'#main',
    //         top:'50'
    //     }
    // }
})



// router.beforeEach((to,form)=>{
//    console.log('全局前置守卫',to)
//    if(to.name!=='home'){
//     console.log('我是从about跳转过来的')
//        return {name:'home'}
//    }
// })

export default router