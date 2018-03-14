<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  data () {
    return {
      msg: 'This is the Title'
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
