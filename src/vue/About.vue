<template>
  <div class="about">
    <h2>ABOUT ME</h2>
    <p>{{ desc }}</p>
    <h2>SKILLS</h2>
    <div class="row">
      <p v-for="(skill) of skills" :key="skill">{{ skill }}</p>
    </div>
  </div>
</template>

<script>
var skills = [
  'Vue.js',
  'Gulp',
  'Sass/SCSS',
  'jQuery',
  'PHP',
  'Wordpress',
  'HTML5',
  'CSS3',
  'Java',
  'C#',
  'Python',
  'MySQL',
  'Microsoft SQL Server',
  'Linux',
  'Mac',
  'Web App Development',
  'Front-End Web Developement'
]
var desc = 'A Computer Systems Analyst Student currently studying at Sheridan College. Main skills include Javascript framework Vue.js (This website was made with Vue!), Gulp, Sass/SCSS, jQuery, PHP, and HTML5/CSS3. The full list of skills are listed below!'

export default {
  data () {
    return {
      desc,
      skills
    }
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
    p
      color: black
      padding: 0 1.5em
</style>
