<template>
  <div>
    <AppFeaturedArticleSplash />
    <AppArticleListingContainer>
      <AppArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
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
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.$axios.get('/api/dev-to/articles/me/published').then((response) => {
      this.articles = response.data
    })
  }
}
</script>

<style lang="scss"></style>
