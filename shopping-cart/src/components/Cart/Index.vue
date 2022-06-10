<template>
   <production-list :list="productionList" > </production-list>
   <cart-list>
       <cart-item :productionList="productionList" :cartList="cartList"></cart-item>
   </cart-list>
</template>

<script>
import ProductionList from './ProductList/Index'
import CartList from './CartList/Index'
import CartItem from './CartList/CartItem'

export default {
    name:'CartDemo',
    components:{
        ProductionList,
        CartList,
        CartItem
    },
    data(){
        return {
            productionList:[
                {
                id:1,
                title:"商品1",
                price:10
            },
             {
                id:2,
                title:"商品2",
                price:20
            },
             {
                id:3,
                title:"商品3",
                price:30
            },
            ],
            cartList:[
                {id:1,quantity:2}
            ]
        }
    },
    provide:['addTodCart','delFormCart'],
    methods:{
       addToCart(){
            console.log("addToCart")
       },
       delFormCart(){
           console.log("delFormCart")
       }

    }
}
</script>

<style>

</style>