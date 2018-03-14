<template>
  <div class="works">
    <h2>VIDEOS</h2>
    <div class="videos">
      <div class="video" v-for="(video) of videos" :key="video" v-html="video"></div>
    </div>
    <h2>GAME IN PROGRESS</h2>
    <div class="others">
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2w-nVivl2Qs" frameborder="0" encrypted-media allowfullscreen></iframe>
      </div>
      <div class="img" v-for="(img) of imgs" :key="img" v-html="img"></div>
    </div>
  </div>
</template>

<script>
var videos = [
  '<iframe src="https://www.youtube.com/embed/mrNRJOW_sKM" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/o0zSilvqoJg" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/6qcmAaf2s90" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>'
]
var imgs = [
  '<img width="200px" height="auto" src="../../static/game1.JPG" />',
  '<img width="200px" height="auto" src="../../static/game2.JPG" />',
  '<img width="200px" height="auto" src="../../static/game3.JPG" />',
  '<img width="200px" height="auto" src="../../static/game4.JPG" />',
  '<img width="200px" height="auto" src="../../static/game5.JPG" />'
]

export default {
  data () {
    return {
      videos,
      imgs
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
  .others
    padding-top: 3em

    .img
      display: flex
      flex-wrap: wrap
      justify-content: space-evenly
      align-items: center
      background-color: black
      padding-bottom: 3em
</style>
