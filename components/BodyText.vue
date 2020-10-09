<template>
  <p class="body-text">
    <slot />
  </p>
</template>

<style lang="scss">
@import '~/assets/scss/mixins';
.body-text {
  text-align: center;
  @include desktop {
    text-align: left;
  }
}
</style>
