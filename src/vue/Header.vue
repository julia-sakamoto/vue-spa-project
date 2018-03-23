<template>
  <p class="header">{{ msg }}</p>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Single Page Portfolio'
    }
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/main.sass'
</style>

<style lang="sass" scoped>
  p
    font-size: 4.2em
    margin: 0
    font-weight: bold
</style>
