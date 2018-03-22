<template>
  <div class="works">
    <h2>VIDEOS</h2>
    <p>{{ desc[0] }}</p>
    <div class="videos">
      <div class="video" v-for="(video) of videos" :key="video">
      <iframe width="280px" height="auto" :src="video" frameborder="0" encrypted-media allowfullscreen></iframe>
      </div>
    </div>
    <h2>GAME IN PROGRESS</h2>
    <p>{{ desc[1] }}</p>
    <div class="others">
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2w-nVivl2Qs" frameborder="0" encrypted-media allowfullscreen></iframe>
      </div>
      <div class="imgs">
        <div @click="selected(index)" v-for="(img, index) of imgs" :key="img" :class="'img' + index">
          <img width="auto" height="110px" :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../main'

var desc = [
  'I make music and draw illustrations to go along with the music in my spare time.',
  'I am currently in the process of developing a 3D game with some friends. The programs I am using include Blender and the Godot Engine.'
]

function selected (index) {
  document.querySelector('.img' + index).classList.add('selected')
  store.commit('toggle')
  store.commit('which', {
    n: index
  })
}

export default {
  data () {
    return {
      selected,
      desc
    }
  },
  computed: {
    imgs () {
      return store.getters.imgs
    },
    videos () {
      return store.getters.videos
    }
  }
}
</script>

<style lang="sass" scoped>
  .works
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
