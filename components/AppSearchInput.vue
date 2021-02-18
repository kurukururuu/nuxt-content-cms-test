<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    >
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      // console.log('searchQuery:', searchQuery)
      // if (!searchQuery) {
      //   this.articles = []
      //   return
      // }
      if (searchQuery.length < 3) { return }

      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  },
  mounted () {
    window.search = this
  }
}
</script>
