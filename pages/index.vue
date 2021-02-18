<template>
  <div>
    <AppSearchInput @keyword-changed="actionSearch" />
    <div class="text-3xl font-semibold mb-2">
      Blog Posts
    </div>
    <div class="grid grid-cols-5">
      <CardBlog
        v-for="article of articles"
        :key="article.slug"
        :data="article"
        class="col-span-1"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    async actionSearch (keyword) {
      console.log('search', keyword)
      this.articles = await this.$content('articles', this.$route.params.slug)
        .search(keyword)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @apply text-3xl font-semibold mb-2;
}
</style>
