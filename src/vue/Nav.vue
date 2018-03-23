<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) of items" :key="item">
        <a v-scroll-to="item.scroll"><b>{{index += 1}}.</b> {{item.msg}}</a>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          msg: 'Works',
          scroll: '.works'
        },
        {
          msg: 'About',
          scroll: '.about'
        },
        {
          msg: 'Contact',
          scroll: '.contacts'
        }
      ]
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
        a
          &:hover
            cursor: pointer
            color: red
</style>
