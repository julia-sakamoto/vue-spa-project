<template>
  <h1>{{ msg }}</h1>
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
  @import './assets/sass/main.sass'
</style>

<style lang="sass" scoped>
  h1
    text-align: center
    font-size: 4.2em
</style>
