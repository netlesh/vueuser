import Vue from 'nativescript-vue'
import routes from './routes/index'
import store from './store/store'

import VueDevtools from 'nativescript-vue-devtools'

  Vue.use(VueDevtools)


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false

// Prints Colored logs when --env.production is *NOT* set while building
// @ts-ignore
Vue.config.debug = true

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)


const loginli = false


new Vue({
  store,
  render: h => h('frame',  [h(loginli ? routes.kuslar : routes.login)])
}).$start()
