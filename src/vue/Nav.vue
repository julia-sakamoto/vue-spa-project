<template>
  <div class="menu">
    <ul>
      <li v-for="(msg, index) of items" :key="msg">
        <b>{{index += 1}}.</b> {{msg}}
      </li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: ['Works', 'About', 'Contact']
    }
  }
}
</script>

<style lang="sass" scoped>
  .menu
    border-top: 2px dashed white
    border-bottom: 2px dashed white
    ul
      display: flex
      flex-wrap: nowrap
      justify-content: space-evenly
      list-style-type: none
      background-color: rgba(255,255,255, 0.5)
      align-items: stretch
      height: 100%
      line-height: 3em
      color: black
      li
</style>
