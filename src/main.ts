import '@/assets/main.scss'
import pinia from './stores'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
