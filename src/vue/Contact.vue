<template>
  <div class="contacts">
    <h2>CONTACT ME</h2>
    <p>{{ desc }}</p>
    <div class="row">
      <div v-for="(contact, key) of contacts" :key="contact.key" class="link" :class="key">
        <a :href="contact.link">{{ contact.title }}</a>
      </div>
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
    contacts () {
      return store.getters.contacts
    }
  },
  beforeCreate () {
    store.dispatch('setCont')
  }
}
</script>

<style lang="sass" scoped>
.contacts
  padding-bottom: 3em
  .row
    -webkit-padding-start: 0
    display: flex
    flex-wrap: wrap
    list-style: none
    justify-content: space-evenly
    background-color: rgba(255,255,255, 0.5)
    div
      padding: 1.5em
      a
        color: black
        text-decoration: none
        &:hover
          color: red
  </style>
