import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'

import vant3 from './plugins/vant3'

import './utils/rem'

const app = createApp(App)
app.use(vant3)
setupStore(app)
app.use(router)
app.mount('#app')
