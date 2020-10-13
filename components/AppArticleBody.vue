<template>
  <div class="article-body">
    <slot />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/mixins';
.article-body {
  @include desktop {
    width: 70%;
    max-width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
}
</style>
