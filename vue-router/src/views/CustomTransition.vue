<template>
 <div>
 <p>custom-transition</p>
  <button @click="jumpLink">OtherTransition</button> 
  <div v-if="MenuOpen">导航栏</div>
 </div>
 
</template>

<script>
import { NavigationFailureType, isNavigationFailure } from 'vue-router'
export default {
  
    data(){
        return {
         MenuOpen:true
        }
    },
    methods:{
       async jumpLink(){
            const failure = await this.$router.push('/other')
            if (this.$router.currentRoute.value) {
                console.log(this.$router)
            }
            if(isNavigationFailure(failure,NavigationFailureType.aborted)){
                console.log(failure.to.path)
                console.log(failure.from)
                 alert('You have unsaved changes, discard and leave anyway?')

            }else{
                this.MenuOpen = false
            }
        }
    }
}
</script>

<style>

</style>