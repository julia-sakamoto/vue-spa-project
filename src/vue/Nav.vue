<template>
  <div class="menu">
    <ul>
      <li v-for="(msg, index) of items" :key="msg">
        {{index += 1}}. {{msg}}
      </li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: ['Menu', 'Menu', 'Menu']
    }
  }
}
</script>

<style lang="sass" scoped>
  .menu
    padding: 0 3em
    line-height: 4.2em
    ul
      display: flex
      flex-wrap: nowrap
      justify-content: space-evenly
      list-style-type: none
      background-color: white
      li
</style>
