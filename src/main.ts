import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './app/lib/createRouter'

import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App)
.use(VueQueryPlugin)
.use(router)
.mount('#app')
