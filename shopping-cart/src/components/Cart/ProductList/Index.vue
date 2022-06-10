<template>
  <div>
    <production-item v-for="item in list" :key="item.id" :item="item" @addTocart="addTocart"></production-item>
  </div>
</template>

<script>
import ProductionItem from './ProductionItem'
export default {
    name:'ProductionList',
    components:{
        ProductionItem
    },
    props:{
        list: {
            type: Array,
            default(){
              return [
                // {
                //     id:1,
                //     title: "商品1",
                //     price:10
                // }
              ]
            }
        }
    },
   
    methods:{
       addTocart(){
            alert('点击了我')
        }
    }

}
</script>

<style>

</style>