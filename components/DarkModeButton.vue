<template>
  <button class="button" type="button" @click="onClick()">
    <FaIcon class="button__icon" icon="sun" />
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
.button {
  color: var(--text-color);
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5rem;
}

.button__icon {
  font-size: 2rem;
}
</style>
