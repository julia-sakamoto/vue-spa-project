<template>
  <div class="contacts">
    <h2>CONTACT ME</h2>
    <p>{{ desc }}</p>
    <div class="row">
      <ul>
        <li v-for="(contact) of contacts" :key="contact" v-html="contact"></li>
      </ul>
    </div>
  </div>
</template>

<script>
var desc = 'I can be contacted through the following:'
var contacts = [
  '<a href="mailto:juliabsakamoto@gmail.com">Personal Email</a>',
  '<a href="mailto:sakamoju@sheridancollege.ca">School Email</a>',
  '<a href="tel:905-598-0884">Cellphone Number</a>',
  '<a href="#">Youtube</a>',
  '<a href="#">Portfolio Twitter</a>'
]

export default {
  data () {
    return {
      desc,
      contacts
    }
  }
}
</script>

  <style lang="sass" scoped>
    .row
      ul
        -webkit-padding-start: 0
        display: flex
        flex-wrap: wrap
        list-style: none
        justify-content: space-evenly
        background-color: rgba(255,255,255, 0.5)
        li
          color: black
          padding: 0 1.5em
  </style>
