<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="sass">
  @import '../assets/sass/main.sass'
</style>

<style lang="sass" scoped>
  p
    text-align: center
    font-size: 4.2em
    margin: 0
</style>
