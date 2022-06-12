import { createApp } from 'vue'
import App from './App.vue'
// import store from '../store/index.js'
// import store from '../store/module.js'
import store from '../store/hotModule'

const app = createApp(App)
app.use(store)
app.mount('#app')
