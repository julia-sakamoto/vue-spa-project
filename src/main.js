// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Head from './vue/Header'
import Nav from './vue/Nav'
import Work from './vue/Works'
import router from './router'

var Header = new Vue({
  el: '#header',
  router,
  components: { Head },
  template: '<Head/>'
})
var Navigation = new Vue({
  el: '#nav',
  router,
  components: { Nav },
  template: '<Nav/>'
})
var Works = new Vue({
  el: '#works',
  router,
  components: { Work },
  template: '<Work/>'
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  Header, Navigation, Works
})
