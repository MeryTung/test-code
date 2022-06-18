import { createApp } from 'vue'
import App from './App.vue'
// import store from '../store/index.js'
// import store from '../store/module.js'
// import store from '../store/hotModule'
import store from '../store/testUtil'

const app = createApp(App)
app.use(store)
app.mount('#app')
