<template>
  <p>user detail page--===这个页面是{{username}}专属</p>
</template>

<script>
export default {
    data(){
        return {
            id: 123,
            username:'Mark'
        }
    },
   beforeRouteEnter(to,from){
    console.log('beforeRouteEnter',to)
   }, 
    beforeRouteUpdate(to,from){
      this.username = to.params.name
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