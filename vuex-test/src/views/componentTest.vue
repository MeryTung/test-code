<template>
   <div>{{count}}</div>
   <p>{{countAdd}}</p>
   <button @click="add">+1</button>
</template>

<script>
import { computed }  from 'vue'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
   setup(){
      const store = useStore();
      const add = ()=>{
        store.commit('nested/myModule/increment2')
        //console.log(store)
      }
      onMounted(()=>{
         console.log(store)
      })
      return {
         count:computed(()=>store.state),
         countAdd:computed(()=>store.state.nested.myModule.count),
         add
      }
   }
}
</script>

<style>

</style>