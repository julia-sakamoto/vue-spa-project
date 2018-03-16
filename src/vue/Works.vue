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
      <div class="imgs">
        <div @click="selected(index)" v-for="(img, index) of imgs" :key="img" :class="classString(index)" v-html="img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../main'

var videos = [
  '<iframe src="https://www.youtube.com/embed/mrNRJOW_sKM" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/o0zSilvqoJg" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>',
  '<iframe src="https://www.youtube.com/embed/6qcmAaf2s90" width="280px" height="auto" frameborder="0" encrypted-media" allowfullscreen></iframe>'
]
var imgs = [
  '<img width="auto" height="110px" src="../../static/game1.JPG" />',
  '<img width="auto" height="110px" src="../../static/game2.JPG" />',
  '<img width="auto" height="110px" src="../../static/game3.JPG" />',
  '<img width="auto" height="110px" src="../../static/game4.JPG" />',
  '<img width="auto" height="110px" src="../../static/game5.JPG" />'
]

function classString (index) {
  for (var i = 0; i < imgs.length; i++) {
    if (index === i) {
      var str = 'img' + i
      return str
    }
  }
}
function selected (index) {
  for (var i = 0; i < imgs.length; i++) {
    if (index === i) {
      document.querySelector('.img' + i).classList.add('selected')
      store.commit('toggle')
      console.log(store.state.bool)
      store.commit('which', {
        n: i
      })
      console.log(store.state.num)
    }
  }
}

export default {
  data () {
    return {
      videos,
      imgs,
      classString,
      selected
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
    background-color: rgba(255,255,255, 0.5)
    padding-bottom: 3em
  .others
    padding-top: 3em
    align-items: center
    background-color: rgba(255,255,255, 0.5)
    .video
      display: flex
      justify-content: center
      padding-bottom: 2em
    .imgs
      display: flex
      flex-wrap: wrap
      flex-direction: row
      justify-content: space-evenly
      padding-bottom: 3em
</style>
