<template>
  <div>
    <h1 class="title">
      Author: {{ getAuthorName() }}
    </h1>
    <p>Bio: {{ getAuthorBio() }}</p>
    <h3>Here are a list of articles by {{ getAuthorName() }}:</h3>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" :alt="article.alt">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without(['body', 'title'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    getAuthorName () {
      if (!this.articles[0]) return
      if (!this.articles[0].author) return
      return this.articles[0].author.name
    },
    getAuthorBio () {
      if (!this.articles[0]) return
      if (!this.articles[0].author) return
      return this.articles[0].author.bio
    }
  }
}
</script>
