<template>
  <h1 :class="{ 'main-heading': true, 'main-heading--left': left }">
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    left: { type: Boolean, default: false, required: false }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';
.main-heading {
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin-bottom: 1rem;

  @include desktop {
    text-align: left;
  }

  &--left {
    text-align: left;
  }
}
</style>
