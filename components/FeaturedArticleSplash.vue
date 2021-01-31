<template>
  <AppContainer>
    <div class="featured-article-splash">
      <div v-if="featuredArticle" class="featured-article-splash__content">
        <AppLabelContainer>
          <AppLabel v-for="tag in featuredArticle.tag_list" :key="tag">{{
            tag
          }}</AppLabel>
        </AppLabelContainer>
        <article>
          <AppMainHeading v-if="featuredArticle">
            {{ featuredArticle.title }}
          </AppMainHeading>
          <AppBodyText v-html="stripMarkdown" />
          <!-- {{ articleExcerpt }} -->
          <!-- </AppBodyText> -->
        </article>
        <a class="featured-article-splash__link" href="#">
          <FaIcon
            class="featured-article-splash__link-icon"
            :icon="['fa', 'arrow-right']"
        /></a>
      </div>

      <div class="featured-article-splash__visuals">
        <AppIllustration />
        <AppIllustration
          :delay="-2.2"
          class="featured-article-splash__visual-offset"
        />
        <AppIllustration :delay="-3.8" />
      </div>
    </div>
  </AppContainer>
</template>

<script>
import AppContainer from '~/components/Container'
import AppLabelContainer from '~/components/AppLabelContainer.vue'
import AppLabel from '~/components/Label.vue'
import AppMainHeading from '~/components/MainHeading'
import AppBodyText from '~/components/BodyText'
import AppIllustration from '~/components/Illustration'

export default {
  components: {
    AppContainer,
    AppLabelContainer,
    AppLabel,
    AppMainHeading,
    AppBodyText,
    AppIllustration
  },

  data() {
    return { articles: [] }
  },

  computed: {
    featuredArticle() {
      return this.articles.find((article) => {
        return article.tag_list.includes('featured')
      })
    },
    articleExcerpt() {
      return this.featuredArticle.body_markdown.length < 400
        ? this.featuredArticle.body_markdown
        : this.featuredArticle.body_markdown.slice(0, 400).concat('...')
    },

    stripMarkdown() {
      return this.articleExcerpt.replace(/\*+/gm, '')
    }
  },

  created() {
    this.$axios.get('/api/dev-to/articles/me/published').then((response) => {
      this.articles = response.data
    })
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';

.featured-article-splash {
  @include desktop {
    display: flex;
  }
}

.featured-article-splash__content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 112px);
  flex-basis: 60%;

  @include desktop {
    align-items: flex-start;
  }
}

.featured-article-splash__link {
  background-color: #462689;
  border-radius: 100%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.featured-article-splash__link-icon {
  color: var(--icons-color);
  font-size: 2.5rem;
}

.featured-article-splash__visuals {
  display: none;

  @include desktop {
    display: unset;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .featured-article-splash__visual-offset {
    align-self: flex-end;
  }
}
</style>
