import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import './stylus/main.styl'
import { faArrowRight, faCode, faCodeBranch, faFileCode, faFileContract, faFile, faFileAlt, faList, faCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

library.add(faGithub, faTwitter, faArrowRight, faCode, faCodeBranch, faFileCode, faFileContract, faFile, faFileAlt, faList, faCheck, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: {
      base: "#d3d0c8",
      darken1: "#747369"
    },
    secondary: {
      base: "#2d2d2d",
    },
    red: "#F2777A",
    yellow: "#FFCC66",
    blue: "#6699CC",
    purple: "#CC99CC",
    teal: "#66CCCC",
    white: "#f2f0ec"
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
