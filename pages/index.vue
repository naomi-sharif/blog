<template>
  <div>
    <AppFeaturedBlogPost />
    <AppBlogPostContainer />
  </div>
</template>

<script>
import AppFeaturedBlogPost from '~/components/FeaturedBlogPost.vue'
import AppBlogPostContainer from '~/components/BlogPostContainer.vue'

export default {
  components: { AppFeaturedBlogPost, AppBlogPostContainer }
}
</script>

<style lang="scss"></style>
