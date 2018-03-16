<template>
  <div class="imgL" v-if="store.state.bool" >
    <div class="large" v-html="img[store.state.num]" @click="deselect()"/>
  </div>
</template>

<script>
import { store } from '../main'

var img = [
  '<img height="100%" src="../../static/game1.JPG" />',
  '<img height="100%" src="../../static/game2.JPG" />',
  '<img height="100%" src="../../static/game3.JPG" />',
  '<img height="100%" src="../../static/game4.JPG" />',
  '<img height="100%" src="../../static/game5.JPG" />'
]

function deselect () {
  store.commit('toggle')
}

export default {
  data () {
    return {
      img
    }
  },
  computed: {
    deselect,
    store
  }
}
</script>

<style lang="sass" scoped>
  .imgL
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    position: fixed
    .large
      height: 38em
</style>
