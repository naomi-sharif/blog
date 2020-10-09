<template>
  <article class="article-card">
    <header>
      <img
        class="article-card__image"
        src="https://via.placeholder.com/500x200"
        alt=""
      />
      <time class="article-card__date" datetime="2020-10-07">2020-10-07</time>
      <h1 class="article-card__heading">Article heading here</h1>
    </header>
    <AppBodyText>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
      ducimus impedit dolorum commodi vel omnis, unde eos ipsum tempore quae
      quaerat amet. Quos, culpa cum explicabo quas quidem recusandae est.
    </AppBodyText>
  </article>
</template>

<script>
import AppBodyText from '~/components/BodyText'

export default {
  components: {
    AppBodyText
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';
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
