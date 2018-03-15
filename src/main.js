// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Ttl from './vue/Header'
import NavBar from './vue/Nav'
import Top from './vue/Top'
import Works from './vue/Works'
import About from './vue/About'
import Contact from './vue/Contact'
// import imgL from './vue/Large'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    'ttl': Ttl,
    'nav-bar': NavBar,
    'top': Top,
    'works': Works,
    'about': About,
    'contact': Contact
    // 'large': imgL
  }
})
