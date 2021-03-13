<template>
  <button class="dark-mode-toggle" type="button" @click="onClick()">
    <FaIcon class="dark-mode-toggle__icon" icon="sun" />
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

.dark-mode-toggle {
  color: var(--text-color);
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dark-mode-toggle__icon {
  font-size: 2rem;
}
</style>
