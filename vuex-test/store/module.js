// import Vuex from 'vuex'  //v3 版本
import { createStore } from 'vuex'  //v4版本

const moduleA = {
    namespaced:true,
    state(){
        return {
            count:0
        }
    },
    mutations: {
        increment(state){
            state.count++
        }
    },
    getters:{
        doubleNumberA(state){
            return  state.count * 2
        }
    }
}

const moduleB = {
    namespaced: true,
    state(){
        return {
            count: 0
        }
    },
    getters:{
        doubleNumberB(state,getters,rootState,/***rootGetters***/){
            //   console.log(rootGetters)
            return  state.count * parseInt(rootState.count)
        }
    },
    mutations: {
        increment(state,payload){
           state.count +=  payload.amount 
        }
    }
}


// const store = new Vuex.Store({
//     modules:{
//         a:moduleA,
//         b:moduleB
//     }
   
// })
const store = createStore(
    {
        state:()=> {
            return {
                count: 10,
                name:'tanglu',
                obj:{
                    a:1,
                    b:2
                }

            }
        },
        getters: {
            getFoo(state){
                return '我是全局getter'+ state.count
            },
            someAction(){
                return '我是someAction'
            }
        },
        actions:{
            someOtherAction({dispatch}){
                dispatch('someAction')
            }
        },
        modules:{
            a:moduleA,
            b:moduleB
        }
    }
)

export default store