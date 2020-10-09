<template>
  <div>
    <AppFeaturedArticleSplash />
    <AppArticleListingContainer>
      <AppArticleCard />
      <AppArticleCard />
      <AppArticleCard />
      <AppArticleCard />
      <AppArticleCard />
    </AppArticleListingContainer>
  </div>
</template>

<script>
import AppFeaturedArticleSplash from '~/components/FeaturedArticleSplash.vue'
import AppArticleListingContainer from '~/components/ArticleListingContainer.vue'
import AppArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    AppFeaturedArticleSplash,
    AppArticleListingContainer,
    AppArticleCard
  }
}
</script>

<style lang="scss"></style>
