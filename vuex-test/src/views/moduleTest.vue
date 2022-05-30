<template>
   <div>{{count}}</div>
   <p>双数：{{getNumber}}</p>
   <button @click="addCount">Module-a模块 +1</button>
   <button @click="addBcount">Module-b模块 +1</button>
</template>

<script>
//import { mapGetters } from 'vuex'
export default {
    computed:{
        count(){
            return this.$store.state.a.count
        },
       getNumber(){
           return this.$store.getters['b/doubleNumberB']
       }
    },
    methods:{
        addCount(){
            return this.$store.commit('a/increment')
        },
        addBcount(){
            return this.$store.commit('b/increment',{amount:10})
         
        }
    },
    mounted(){
        this.$store.dispatch('b/getGobalAction')
    }
}
</script>

<style>

</style>