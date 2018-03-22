// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import SA from 'superagent'
import Ttl from './vue/Header'
import NavBar from './vue/Nav'
import Top from './vue/Top'
import Works from './vue/Works'
import About from './vue/About'
import Contact from './vue/Contact'
import imgL from './vue/Large'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

export const store = new Vuex.Store({
  state: {
    bool: false,
    num: 0,
    dogs: null
  },
  mutations: {
    toggle (state) {
      state.bool = !state.bool
    },
    which (state, payload) {
      state.num = payload.n
    },
    setDogs (state) {
      SA.get('https://dog.ceo/api/breeds/list/all')
        .end(function (err, res) {
          if (res.ok) {
            console.log(res.body)
            state.dogs = res.body.message
          } else {
            console.log(err)
          }
        })
    }
  },
  actions: {
    setDogs ({ commit }) {
      commit('setDogs')
    }
  },
  getters: {
    dogs: state => state.dogs
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    'ttl': Ttl,
    'nav-bar': NavBar,
    'top': Top,
    'works': Works,
    'about': About,
    'contact': Contact,
    'large': imgL
  }
})
