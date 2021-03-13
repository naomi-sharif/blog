<template>
  <p
    :class="{
      'body-text': true,
      'body-text--margin': margin,
      'body-text--left': left
    }"
  >
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    margin: { type: Boolean, default: false, required: false },
    left: { type: Boolean, default: false, required: false }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';
.body-text {
  text-align: center;
  font-size: 16px;
  line-height: 1.4rem;
  @include desktop {
    text-align: left;
    font-size: 20px;
  }

  &--margin {
    margin: 1rem 0;
  }

  &--left {
    text-align: left;
  }
}
</style>
