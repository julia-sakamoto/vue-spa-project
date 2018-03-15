<!-- <template>
  <div class="imgL" v-if="which()" >
    <div class="large" v-html="img[num]" @click="deselect()"/>
  </div>
</template>

<script>
var large = false
var img = [
  '<img height="100%" src="../../static/game1.JPG" />',
  '<img height="100%" src="../../static/game2.JPG" />',
  '<img height="100%" src="../../static/game3.JPG" />',
  '<img height="100%" src="../../static/game4.JPG" />',
  '<img height="100%" src="../../static/game5.JPG" />'
]
var num = 0

function which () {
  if (document.querySelector('.selected') !== null) {
    for (var i = 0; i < img.length; i++) {
      if (document.querySelector('.img' + i).classList.contains('selected')) {
        num = i
        large = true
      }
    }
  } else {
    large = false
  }
}
function deselect () {
  large = false
}

export default {
  data () {
    return {
      large,
      img,
      num
    }
  },
  computed: {
    deselect,
    which
  }
}
</script>

<style lang="sass" scoped>
  .imgL
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    position: fixed
    .large
      height: 38em
</style> -->
