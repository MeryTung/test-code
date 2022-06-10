<template>
  <div>
      <span>{{item.name}}</span>
       &nbsp;
      <span>{{item.price}}元</span>
      &nbsp;
      <button @click="handleClick(item.id,$event)">加入购物车</button>
  </div>
</template>

<script>
// import event from './event'
export default {
    name:'ProductionItem',
    props:{
        item:Object,
        default(){
            return {

            }
        }
    },
    emits:['addTocart'],
    methods:{
        handleClick(id,e){
          e.preventDefault();
          this.$emit('addTocart',id)  
        }
    }
}
</script>

<style>

</style>