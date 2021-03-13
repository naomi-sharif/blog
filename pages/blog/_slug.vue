<template>
  <AppContainer>
    <article>
      <AppArticleHeader>
        <template slot="left">
          <AppLabelContainer>
            <AppLabel
              v-for="articleTag in article.tags"
              :key="articleTag"
              :article-tag="articleTag"
              >{{ articleTag }}</AppLabel
            >
          </AppLabelContainer>
          <AppMainHeading left>{{ article.title }}</AppMainHeading>
        </template>
        <AppImage
          slot="right"
          :src="
            article.cover_image
              ? article.cover_image
              : 'https://via.placeholder.com/500x200'
          "
          alt=""
        />
      </AppArticleHeader>
      <AppArticleBody>
        <AppContentBody v-html="article.body_html" />
      </AppArticleBody>
    </article>
  </AppContainer>
</template>

<script>
import AppArticleHeader from '~/components/AppArticleHeader.vue'
import AppLabel from '~/components/Label.vue'
import AppLabelContainer from '~/components/AppLabelContainer.vue'
import AppContainer from '~/components/Container.vue'
import AppMainHeading from '~/components/MainHeading.vue'
import AppImage from '~/components/Image.vue'
import AppArticleBody from '~/components/AppArticleBody.vue'
import AppContentBody from '~/components/AppContentBody.vue'
export default {
  components: {
    AppArticleHeader,
    AppLabelContainer,
    AppLabel,
    AppMainHeading,
    AppContainer,
    AppImage,
    AppArticleBody,
    AppContentBody
  },
  data() {
    return {
      slug: this.$route.params.slug,
      article: ''
    }
  },
  created() {
    this.$axios
      .get(`/api/dev-to/articles/naomisharif/${this.$route.params.slug}`)
      .then((response) => {
        this.article = response.data
      })
  }
}
</script>
