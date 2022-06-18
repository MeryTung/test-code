
import { createStore } from 'vuex'


const state = {
    count:0
}
export const getters = {
        count: state=>state.count  
}
export const mutations = {
    increment: state => state.count++
}

export const actions = {
    increment:({commit}) => commit('increment')
}
const store = createStore({
    state,
    getters,
    mutations,
    actions
})

export default store