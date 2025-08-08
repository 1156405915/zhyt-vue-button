import ZhytVueButton from './components/ZhytVueButton/ZhytVueButton.vue'
import type { App, Plugin } from 'vue'

export { ZhytVueButton }

export default <Plugin<[]>>{
  install(app: App<Element>) {
    app.component('ZhytVueButton', ZhytVueButton)
  },
}
