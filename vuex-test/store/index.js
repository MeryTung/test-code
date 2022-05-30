import { createStore, /***createLogger****/ } from 'vuex'

// function getData(){
//    return new Promise((resolve) => { resolve();console.log('getData','我是getData,hhhha')})
// }  

const store = createStore({
     state(){
         return {
             count:0,
             obj:{
                 bar:'hahha'
             },
             todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: true },
                { id:3,text: '...', done: true},
                { id:4,text: '...', done: true}
              ]
         }
     },
     getters:{
         doneTodos: state=> {
             return state.todos.filter(item=>item.done)
         },
         doneToCount(getter){
             return getter.todos.length
         },
         getTodoById:(state)=>(id)=>{
             return state.todos.find(todo=>todo.id===id)
         }
     },
     mutations:{
         increment(state,payload){
             state.count += payload.amount
            
         },
         decrement(state){
             state.count--;
         },
         actionA(){
             console.log('actionA','hahahah')
         },
         someOtherMutation(){
             console.log('someOtherMutation')
         },
         getData(){
             console.log('getData')
         },
         getOtherData(){
             console.log('getOtherData')
         }
     },
     
     actions:{
        incrementAsync(context,payload){
           setTimeout(()=>context.commit('increment',payload),5000) 
         },
         getData({commit}){
             commit('getData')
         },
         async getOtherData({dispatch, commit}){
              await  dispatch('getData')
              commit('getOtherData')

         }
        //  actionA({commit}){
        //      return commit('actionA')
        //  },
        //  actionB({dispatch, commit}){
        //      return dispatch('actionA').then(()=>{
        //          commit('someOtherMutation')
        //      })
        //  },
        //  async actionA({ commit}){
        //     commit('actionA',await getData())
        //  },
        //  async actionB({dispatch,commit}){
        //      await dispatch('actionA')
        //      commit('someOtherMutation')
        //  }
     }
    //  plugins: [createLogger()]  
})

export default store