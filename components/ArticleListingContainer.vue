<template>
  <AppContainer>
    <section>
      <h2>See other posts</h2>
      <div class="article-listing-container">
        <slot />
      </div>
    </section>
  </AppContainer>
</template>

<script>
import AppContainer from '~/components/Container'
export default {
  components: {
    AppContainer
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';
.article-listing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include desktop {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
}
</style>
