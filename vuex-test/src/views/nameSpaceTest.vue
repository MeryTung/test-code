<template>
   <div>{{count}}</div>
   <p><button class="btn" @click="addCount">add global</button></p>
   <p><button @click="addCount2">add module-a +</button></p>
   <p><button @click="addCount3">add module-b +1</button></p>
   
</template>

<script>

export default {
   computed:{
       count(){
           return this.$store.state
       }
   },
   methods:{
       addCount(){
           return this.$store.commit('increment',{amount:10})
       },
       addCount2(){
           return this.$store.commit('a/increment',{amount:10})
       },
       addCount3(){
          // return this.$store.dispatch('b/someOtherAction',{amount:10})
          return this.$store.dispatch('someAction',{amount:5})
       }
   },
   mounted(){
      // console.log(this.$store.dispatch('someAction',{amount:5}))
   }
}
</script>

<style>

</style>