<template>
  <div class="works">
    <h2>VIDEOS</h2>
    <div class="videos">
      <div class="video" v-for="(video) of videos" :key="video" v-html="video"></div>
    </div>
    <h2>OTHER CREATIONS</h2>
    <div class="others">
    </div>
  </div>
</template>

<script>
var videos = [
  '<iframe src="https://www.youtube.com/embed/mrNRJOW_sKM" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/o0zSilvqoJg" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/6qcmAaf2s90" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>'
]

export default {
  data () {
    return {
      videos
    }
  }
}
</script>

<style lang="sass" scoped>
  .works
    padding: 0 3em
    h2
      color: white
      text-align: center
  .videos
    padding-top: 3em
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    align-items: center
    background-color: white
    padding-bottom: 3em
    .video
</style>
