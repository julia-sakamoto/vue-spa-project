// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './vue/Header'
import Nav from './vue/Nav'
import Portfolio from './vue/Portfolio'
import router from './router'

Vue.config.productionTip = false

var Title = new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})
var NavMenu = new Vue({
  el: '#nav',
  router,
  components: { Nav },
  template: '<Nav/>'
})
var Port = new Vue({
  el: '#protfolio',
  router,
  components: { Portfolio },
  template: '<Portfolio/>'
})
/* eslint-disable no-new */
new Vue({
  Title,
  NavMenu,
  Port
})
