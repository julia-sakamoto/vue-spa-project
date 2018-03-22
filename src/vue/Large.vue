<template>
  <div class="imgL" v-if="bool">
    <img height="100%" :src="imgs[num]" class="large" @click="deselect()"/>
  </div>
</template>

<script>
import { store } from '../main'

function deselect () {
  store.commit('toggle')
}

export default {
  data () {
    return {
      deselect
    }
  },
  computed: {
    bool () {
      return store.getters.bool
    },
    num () {
      return store.getters.num
    },
    imgs () {
      return store.getters.imgs
    }
  }
}
</script>

<style lang="sass" scoped>
    .imgL
      position: fixed
      top: 0
      right: 0
      bottom: 0
      left: 0
      background-color: rgba(0,0,0,0.6)
      &:hover
        cursor: pointer
      .large
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        position: fixed
        height: 38em
</style>
