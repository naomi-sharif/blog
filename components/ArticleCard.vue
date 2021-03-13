<template>
  <a class="article" :href="`/blog/${article.slug}`">
    <article class="article-card">
      <header>
        <img
          class="article-card__image"
          :src="
            article.cover_image
              ? article.cover_image
              : 'https://via.placeholder.com/500x200'
          "
          alt=""
        />
        <time
          class="article-card__date"
          :datetime="article.published_timestamp"
          >{{ formattedDate(article.published_timestamp) }}</time
        >
        <h1 class="article-card__heading">{{ article.title }}</h1>
      </header>
      <AppBodyText>{{ article.description }}</AppBodyText>
    </article>
  </a>
</template>

<script>
import { format } from 'date-fns'
import AppBodyText from '~/components/BodyText'

export default {
  components: {
    AppBodyText
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    formattedDate: (date) => {
      return format(new Date(date), 'do MMMM yyyy')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';
.article {
  text-decoration: none;
  color: var(--text-color);
}

.article-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 0;
  max-width: 500px;
  text-align: center;

  @include desktop {
    text-align: left;
  }

  &__image {
    max-width: 100%;
  }

  &__date {
    padding: 0.5rem 0;
    display: block;
  }

  &__heading {
    padding: 1rem 0;
  }
}
</style>
