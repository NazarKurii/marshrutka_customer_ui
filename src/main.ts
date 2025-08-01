import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { startApp } from './scripts/app'
import i18n from './i18n'
import axios from 'axios'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
axios.defaults.baseURL = 'http://localhost:8080/customer'

startApp(router)

app.mount('#app')
