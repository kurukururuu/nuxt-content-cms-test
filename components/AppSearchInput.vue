<template>
  <div class="search-wrapper">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search (min 3 characters)"
    >
    <!-- <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul> -->
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
    searchQuery (searchQuery) {
      // console.log('searchQuery:', searchQuery)
      // if (!searchQuery) {
      //   this.articles = []
      //   return
      // }
      if (searchQuery.length < 3) { return }

      this.$emit('keyword-changed', searchQuery)

      // this.articles = await this.$content('articles')
      //   .limit(6)
      //   .search(searchQuery)
      //   .fetch()
    }
  },
  mounted () {
    window.search = this
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  min-width: 300px;
  input {
    @apply outline-none;
    @apply border-b border-gray-600;
    @apply transition-colors duration-500 ease-in-out;
    &:focus {
      @apply border-b border-gray-800;
    }
    &::placeholder {
      @apply text-sm;
    }
  }
}
</style>
