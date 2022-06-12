<template>
   <div>{{count}}</div>
   <p>{{countAdd}}</p>
   <button @click="add">+1</button>
   <!-- <input type="text" v-model="obj.message" /> -->
   <!-- <input type="text"  :value="message" @input="updateMessage" /> -->
   <!--双向绑定计算--->
   <input type="text" v-model="message" />
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
      // const updateMessage = (e)=>{
      //    store.commit('myModuleC/updateMessage',e.target.value)
      // }
      const message = computed({
         get(){
            return store.state.myModuleC.obj.message
         },
         set(value){
            store.commit('myModuleC/updateMessage',value)
           // store.state.myModuleC.obj.message = value
         }
      })
      onMounted(()=>{
         console.log(store)
      })
      return {
         count:computed(()=>store.state),
         countAdd:computed(()=>store.state.nested.myModule.count),
         obj:computed(()=> store.state.myModuleC.obj),
         // message:computed(()=>store.state.myModuleC.obj.message),
         // updateMessage,
         message,
         add
      }
   }
}
</script>

<style>

</style>