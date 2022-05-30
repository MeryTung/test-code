<template>
  <div>{{count}}</div>
  <!-- <p>{{countPlusLocalState}}</p> -->
  <p>{{obj}}</p>
  <p>{{doneToCount}}</p>
  <button @click="addCount">+1</button>
  <button @click="decrement">-1</button>
  <button class="btn" @click="setObj">异步+20</button>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    data(){
      return {
          localCount: 10,
      }
    },
    //不能mapState,
    // computed:{
    //   count () {
    //     return this.$store.state.count
    //   }
    // },
    // computed:mapState(['count']),
    // computed:mapState({
    //   //可以用箭头函数，少些几行
    //   count:state=>state.count,
    //   //传字符串，相当于把count箭头函数state=>state.count拷贝给counAlias
    //   countAlias:'count',

    //   //获取this局部状态
    //   countPlusLocalState(state){
    //      return state.count +  this.localCount
    //   }
    // }),
    computed:{
     ...mapState(['count','obj']),
     ...mapGetters([
        'doneTodos',
        'doneToCount',
      
     ])
      
    },
   methods: {
     addCount(){
       return this.$store.commit({
         type:'increment',
         amount:2
       })
      //  return this.$store.commit('increment',{amount:2})
     },
     decrement(){
       return this.$store.commit('decrement')
     },
     setObj(){
       this.$store.dispatch('incrementAsync',{amount:20})
      // return this.$store.state.obj
     }
   },
   mounted(){
 
    //  console.log(this.$store.dispatch('actionB'))
    console.log(this.$store.dispatch('getOtherData'))
   }
}
</script>

<style>

</style>