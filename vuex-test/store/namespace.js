


import { createStore } from 'vuex'

const moduleA = {
    namespaced: true,
    state(){
        return {
            count:10
        }
    },
    mutations:{
        increment(state,payload){
            return state.count += payload.amount
        }
    }

}
const moduleB = {
    namespaced: true,
    state(){
        return {
            count:20,
        }
    },
    mutations: {
        increment(state,payload){
            return state.count -= payload.amount 
        }
    },
    actions:{
        someOtherAction ({dispatch}, payload) { 
            return  dispatch('someAction',payload,{root:true})
         },
         someAction:{
            root:true,
            handler ({commit},payload) {
              return  commit('a/increment',payload,{root:true})
             }
         }
    }

}
const store = createStore({
        namespaced: true,
         modules:{
            a:moduleA,
            b:moduleB
        },
        state:()=> {
            return {
                count:30
            }
        },
        getters:{
            doubleNumber(state){
                return state.count * 2
            }
        },
        mutations:{
            increment(state,payload){
                return state.count += payload.amount
            }
        }
})

store.registerModule('myModule',{
    state(){
        return {
            count:40
        }
    }
})

export default store