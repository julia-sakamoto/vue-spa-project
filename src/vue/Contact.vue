<template>
  <div class="contacts">
    <h2>CONTACT ME</h2>
    <p>{{ desc }}</p>
    <div class="row">
      <!-- <div v-for="(contact, key) of contacts" :key="contact.key" class="link" :class="key">
        <a :href="contact.link">{{ contact.title }}</a> -->
      <div v-for="(num) of dogs.hound.length" :key="num">
        <div>{{ dogs.hound[num-1] }}</div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { store } from '../main'
var desc = 'I can be contacted through the following:'

export default {
  data () {
    return {
      desc
    }
  },
  computed: {
    dogs () {
      return store.getters.dogs
    }
  },
  beforeCreate () {
    store.dispatch('setDogs')
  }
}
</script>
  <style lang="sass" scoped>
    .row
      -webkit-padding-start: 0
      display: flex
      flex-wrap: wrap
      list-style: none
      justify-content: space-evenly
      background-color: rgba(255,255,255, 0.5)
      div
        a
          color: black
          padding: 0 1.5em
          font-style: none
  </style>
