<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: data.slug } }" class="card-blog-wrapper">
    <img :src="data.img" class="cover">
    <div class="mt-2">
      <h2 class="text-lg font-semibold">
        {{ data.title }}
      </h2>
      <p>by <b>{{ data.author.name }}</b></p>
      <p>{{ data.description }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-blog-wrapper {
  @apply p-4 flex flex-col;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);

  .cover {
    height: 150px;
    @apply object-contain;
  }
}
</style>
