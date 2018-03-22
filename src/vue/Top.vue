<template>
  <button type="button" v-scroll-to="'#app'">Return to Top</button>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  button
    background-color: inherit
    border: 2px solid white
    border-radius: 2px
    color: rgba(255,255,255, 0.5)
    border-color: rgba(255,255,255, 0.5)
    line-height: 2em
    font-size: 1em
    -webkit-transition-duration: 0.2s
    transition-duration: 0.2s
    position: fixed
    right: 1em
    bottom: 1.2em
    &:hover
      color: white
      border-color: white
      cursor: pointer
    &:active
      background-color: rgba(178,32,0,0.8)

</style>
