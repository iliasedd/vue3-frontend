import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api"
createApp(App).use(store).use(router).mount('#app')
