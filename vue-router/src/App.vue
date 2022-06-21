<template>
 
  <img alt="Vue logo" src="./assets/logo.png" />
   <!-- <AppLink to="/">Home</AppLink> |
   <AppLink to="/user/yehua">User</AppLink> |
   <AppLink to="/about/1/child">About</AppLink> |
   <AppLink to="/about/2">About 2</AppLink> |
   <AppLink to="https://www.baidu.com">百度</AppLink> |
   <router-view />
   <router-view name="First"></router-view> 
   <router-view name="Second"></router-view>  -->
   <AppLink to="/">Custom</AppLink>  |
   <AppLink to="/other">Other</AppLink>
   <!----这里是对所有的路由使用过渡---->
   <!-- <router-view v-slot="{ Component }">
       <transition name="slide-fade">
        <component :is="Component" ></component>
      </transition>
   </router-view>-->
      <!--单个路由过渡--->
    <!-- <router-view v-slot="{ Component,route }">
        <transition :name="route.meta.transition">
            <component :is="Component" />
        </transition>
    </router-view> -->
    <router-view v-slot="{ Component,route }">
        <transition :name="route.meta.transitionName">
            <component :is="Component" />
        </transition>
    </router-view>
</template> 
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#main{
  position: relative;
  left:0;
  top:0
}
.slide-left-enter-active,.slide-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-active,.slide-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to,.slide-right-enter-from,.slide-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
