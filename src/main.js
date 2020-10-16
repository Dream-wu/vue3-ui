import { createApp } from 'vue'
import App from './App.vue'
import mjUI from './libs/mj-ui'

createApp(App)
  .use(mjUI)
  .mount('#app')
