<template>
  <article>
    <AppSearchInput />

    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt">
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />

    <nav>
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <info-box>
      <template #info-box>
        This is a vue component inside markdown using slots
      </template>
    </info-box>

    <author :author="article.author" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // fetch our article here
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss"> // not scoped, so it can access nuxt-content html elements
.nuxt-content {
  h2 {
    font-weight: bold;
    font-size: 28px;
  }

  h3 {
    font-weight: bold;
    font-size: 22px;
  }

  p {
    margin-bottom: 20px;
  }

  .icon.icon-link {
    background-image: url('~assets/jpg/Rokka.jpg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }
}
</style>
