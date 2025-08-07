import ZhytVueButton from './components/ZhytVueButton/ZhytVueButton.vue'
import type { App, Plugin } from 'vue'

// export default ZhytVueButton
const ZhytPlugin: Plugin<[]> = {
  install(app: App<Element>): void {
    app.component('ZhytVueButton', ZhytVueButton)
  },
}

export { ZhytVueButton }

export default ZhytPlugin
