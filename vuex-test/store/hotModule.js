import { createStore } from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as  mutations from './mutations'

const state = {
    test: 0,
    count: 0,
    history: []
}
// const getter = {
//     count: state=>state.count, 
//     test: state=>state.test
// }
// const mutations = {
//     increment:(state)=>{
//         state.count++
//     },
//     decrement:(state)=>{
//         state.count--
//     }
// }
// const actions = {
//     incrementAsync:({commit}) => { commit('increment')},
//     decrementAsync:({commit}) => { commit('decrement')}
// }
const store = createStore({
        state,
        getters,    
        actions,
        mutations
})


if (module.hot) {
    module.hot.accept(['./getters','./actions','./mutations'],()=>
    {
       console.log('Accepting the updated printMe module!');
        store.hotUpdate({
            mutations:require('./mutations'),
            actions:require('./actions'),
            getters:require('./getters')
        })
    })
}
export default store