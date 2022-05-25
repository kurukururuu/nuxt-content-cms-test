<template>
  <div>
    <div class="text-3xl font-semibold mb-2">
      GALLERY
    </div>
    <div class="images-list">
      // <VuePictureSwipe :items="images" />
    </div>
  </div>
</template>

<script>
// import VuePictureSwipe from 'vue-picture-swipe'

export default {
  components: {
    // VuePictureSwipe
  },
  data () {
    return {
      images: []
    }
  },
  mounted () {
    this.importAllImage(require.context('~/assets/images', true, /\.(jpg|png)$/))
  },
  methods: {
    importAllImage (r) {
      r.keys().forEach((key) => {
        this.images.push({
          src: r(key),
          thumbnail: r(key),
          w: 1200,
          h: 900
        })
      })
    },
    getImage (path) {
      return path.replace('./', '/images/')
    }
  }
}
</script>

<style lang="scss">
.my-gallery {
  display: flex;
  figure {
    height: 300px;
    img {
      height: 100%;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    }
    // second++ item will have left margin
    &:nth-child(n+2) {
      @apply ml-8;
    }
  }
}

.pswp {
  img {
    object-fit: contain;
  }
}
</style>
