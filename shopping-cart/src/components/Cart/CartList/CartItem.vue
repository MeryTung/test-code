<template>
   <div class="cart">
       <span>商品1</span>&nbsp;
       <span>（数量1）</span>
       <button class="btn" @click="addCart">添加</button>
       <button class="btn" @click="delCart">减少</button>
   </div>
</template>

<script>
export default {
    methods:{
        addCart(){},
        delCart(){}
    }
}
</script>

<style>
.cart {
    margin-top:20px;
}
</style>