


import { createStore } from 'vuex'
import _ from 'lodash'

const moduleA = {
    namespaced: true,
    state: ()=>({
        count:10
    }),
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
const moduleC = {
    namespaced: true
}

const myPluginsWithSnapshot = (store) => {
    let preState = _.cloneDeep(store.state)
    store.subscribe((mutations,state)=> {
        let nextState = _.cloneDeep(state)
        if(preState == nextState){
            console.log('我使用了插件')
        }
    })
}
const store = createStore({
   // strict: true,
        namespaced: true,
         modules:{
            a:moduleA,
            b:moduleB,
            nested:moduleC
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
        },
        plugins:process.env.NODE_ENV !== 'production'?[myPluginsWithSnapshot]:[]
})

// store.registerModule('myModule',{
//     state(){
//         return {
//             count:40
//         }
//     }
// },{
//     preserveState: true
// })
// store.registerModule('myModule',{
//     state:()=>({
//         count:1   //模块重用，用函数声明不会被相互模块污染
//     })
// })
store.registerModule('myModuleC',{
    namespaced: true,
    state:{
        count:10,
        obj:{
            message:'123'
        }
    },
    mutations:{
        updateMessage(state,payload){
            return state.obj.message = payload
        }
    }
})

//注册嵌套式模块
store.registerModule(['nested', 'myModule'], {
    namespaced: true,
    state: () => ({
        count: 0
      }),
      mutations: {
        increment2 (state) {
          // 这里的 `state` 对象是模块的局部状态
          state.count++
        }
      },
      getters: {
        doubleCount (state) {
          return state.count * 2
        }
      }
})

//保留state关键词，state不会被覆盖
store.registerModule('a',module,{
    preserveState: true,
    state:{
        count:'123'
    }
})

//不能删除store创建的模块
//store.unregisterModule('myModuleC')
console.log('为false，则没有创建对应的模块',store.hasModule(['nested', 'myModule']))
export default store