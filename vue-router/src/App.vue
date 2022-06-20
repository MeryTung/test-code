<template>
 
  <img alt="Vue logo" src="./assets/logo.png" />
   <AppLink to="/">Home</AppLink> |
   <AppLink to="/user/yehua">User</AppLink> |
   <AppLink to="/about/1/child">About</AppLink> |
   <AppLink to="/about/2">About 2</AppLink> |
   <AppLink to="https://www.baidu.com">百度</AppLink> |
   <router-view />
   <router-view name="First"></router-view> 
   <router-view name="Second"></router-view> 
   
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
</style>
