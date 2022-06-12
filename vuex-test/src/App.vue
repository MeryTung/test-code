<template>
  <!-- <IndexTest /> -->
  <!-- <moduleTest /> -->
  <!-- <nameSpaceTest /> -->
  <!-- <componentTest /> -->
  <CounterControls />
</template>

<script>
// import IndexTest from './views/IndexTest.vue'
// import moduleTest from './views/moduleTest.vue'
// import nameSpaceTest from './views/nameSpaceTest.vue'
// import componentTest from './views/componentTest.vue'
import CounterControls from './views/CounterControls.vue'

export default {
  name: 'App',
  components: {
    // IndexTest
    // moduleTest
    // nameSpaceTest
    // componentTest
    CounterControls,
  }
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
</style>
