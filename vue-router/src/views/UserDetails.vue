<template>
  <p>user detail page</p>
</template>

<script>
export default {
    data(){
        return {
            id: 123
        }
    },
   beforeRouteEnter(to,from){
    console.log('beforeRouteEnter',from)
   }, 
    beforeRouteUpdate(to,from){
        console.log('beforeRouteUpdate',this)
    },  
    beforeRouteLeave(to,from){
        const anwser = window.confirm('Do you really want to leave? you have unsaved changes!')
        console.log(anwser)
        if(!anwser) return false
    },
}
</script>

<style>

</style>