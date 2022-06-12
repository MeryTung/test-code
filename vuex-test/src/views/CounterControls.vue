<template>
    <p>{{count}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
</template>

<script>
import {computed,onMounted } from 'vue'
import { useStore } from  'vuex'
export default {
    setup(){
        const store = useStore()
        onMounted(()=>{
            console.log(store)
        })
        return {
            count: computed(() => store.getters.count),
            recentHistory: computed(() => store.getters.recentHistory),
            increment: () => store.dispatch('increment'),
            decrement: () => store.dispatch('decrement'),
            incrementIfOdd: () => store.dispatch('incrementIfOdd'),
            incrementAsync: () => store.dispatch('incrementAsync')
        }
    }
}
</script>

<style>

</style>