import { createApp } from 'vue'
import ZhytVueButton from './index'
import App from './App.vue'

const app = createApp(App)
app.use(ZhytVueButton)
app.mount('#app')
