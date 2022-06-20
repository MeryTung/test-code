<template>
 
  <img alt="Vue logo" src="./assets/logo.png" />
   <router-link to="/">Home</router-link> |
   <router-link to="/user">User</router-link> |
   <router-link to="/about/1">About</router-link> |
   <router-link to="/about/2">About 2</router-link>
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
