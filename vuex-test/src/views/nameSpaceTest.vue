<template>
   <div>{{count}}</div>
   <p><button class="btn" @click="addCount">add global</button></p>
   <p><button @click="addCount2">add module-a +</button></p>
   <p><button @click="addCount3">add module-b +1</button></p>
   
</template>

<script>
//import { mapState } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('a/')  //创建a命名空间的辅助函数
export default {
   computed:{
       ...mapState({
           count:state=>state
       })
    //    count(){
    //        return this.$store.state
    //    }
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
       console.log(this.$store.state)
       //嵌套模块应该以数组形式传递给 registerModule 和 hasModule，而不是以路径字符串的形式传递给 module。
       console.log(this.$store.hasModule(['a']))
      // console.log(this.$store.dispatch('someAction',{amount:5}))
   }
}
</script>

<style>

</style>