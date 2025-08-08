import ZhytVueButton from './components/ZhytVueButton/ZhytVueButton.vue'
import type { App, Plugin } from 'vue'

type ZhytPluginOptions = {
  prefix?: string
}

const ZhytPlugin: Plugin<[ZhytPluginOptions?]> = {
  install(app: App, options?: ZhytPluginOptions) {
    console.log(options)
    app.component('ZhytVueButton', ZhytVueButton)
  },
}
export default ZhytPlugin
