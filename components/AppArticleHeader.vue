<template>
  <header class="article-header">
    <div class="left"><slot name="left" /></div>
    <div class="right"><slot name="right" /></div>
  </header>
</template>

<style lang="scss">
@import '~/assets/scss/mixins';
.article-header {
  @include desktop {
    display: flex;
    flex-direction: row;
    margin: 5rem 0;
  }
}

.left {
  @include desktop {
    width: 60%;
    padding-right: 4rem;
  }
}
@include desktop {
  .right {
    width: 40%;
  }
}
</style>
