<template>
  <div class="header-container">
    <div class="menu-container">
      <nuxt-link
        v-for="(menu,i) in menus"
        :key="i"
        :to="menu.path"
      >
        {{ menu.text }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          text: 'Home',
          path: '/'
        },
        {
          text: 'About',
          path: '/about'
        },
        {
          text: 'Gallery',
          path: '/gallery'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  @apply absolute top-0 w-full;
  @apply flex py-4;
  height: 75px;

  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

.menu-container {
  @apply flex items-center;

  a {
    @apply text-2xl;
    &:hover,
    &.nuxt-link-active {
      @apply font-semibold;
    }
  }

  // second++ link will have left margin
  a:nth-child(n+1) {
    @apply ml-8;
  }
}
</style>
