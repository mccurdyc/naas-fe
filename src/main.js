import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faCodeBranch, faFileCode, faFileContract, faFile, faFileAlt, faList, faCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faTwitter, faCode, faCodeBranch, faFileCode, faFileContract, faFile, faFileAlt, faList, faCheck, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: {
      base: "#515151",
      darken1: "#2D2D2D"
    },
    secondary: {
      base: "#F2F0EC",
      darken1: "#D3D0C8"
    },
    red: "#F2777A",
    yellow: "#FFCC66",
    blue: "#6699CC",
    purple: "#CC99CC",
    teal: "#66CCCC"
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
