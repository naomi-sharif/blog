<template>
  <button class="hamburger-toggle" type="button" @click="onClick()">
    <FaIcon class="hamburger-toggle__icon" icon="bars" />
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';
.hamburger-toggle {
  color: var(--text-color);
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;

  @include desktop {
    order: 1;
  }
}

.hamburger-toggle__icon {
  font-size: 2rem;
}
</style>
