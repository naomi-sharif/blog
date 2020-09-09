<template>
  <AppWrapper>
    <AppFeaturedBlogPost />
    <AppBlogPostContainer />
  </AppWrapper>
</template>

<script>
import AppFeaturedBlogPost from '~/components/FeaturedBlogPost.vue'
import AppBlogPostContainer from '~/components/BlogPostContainer.vue'
import AppWrapper from '~/components/Wrapper.vue'

export default {
  components: { AppFeaturedBlogPost, AppBlogPostContainer, AppWrapper }
}
</script>

<style lang="scss"></style>
