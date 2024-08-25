import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import { FontAwesomeIcon } from './plugins/fontawesome'
import NotyfPlugin from './plugins/notyf'
import 'animate.css'

createApp(App)
.use(vuetify)
.use(router)
.use(axios)
.component('icon', FontAwesomeIcon)
.use(NotyfPlugin)
.mount('#app')
