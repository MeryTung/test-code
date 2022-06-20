<template>
    <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_brank"><slot/></a>
    <router-link v-else v-bind="$props"><slot/></router-link>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
   name:'AppLink',
   inheritAttrs: false,
    props:{
        ...RouterLink.props,
        inactiveClass:String,
    },
    computed:{
        isExternalLink(){
            return typeof this.to ==='string' && this.to.startsWith('http')
        }
    }
}
</script>