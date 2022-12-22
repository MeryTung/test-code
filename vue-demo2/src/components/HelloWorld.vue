<script setup>
import { ref,reactive } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const state = reactive({
     name: 'Javascript'
})

const changeName = () => {
   state.name = 'Vite'
}
</script>

<template>
 <div class="greeting">
   <h1 class="green" @click="changeName">{{state.name}}</h1>
   <h3>{{ msg }}</h3>
 </div>


  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
