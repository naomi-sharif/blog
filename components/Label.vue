<template>
  <div class="label"><slot /></div>
</template>

<style lang="scss">
@import '~/assets/scss/mixins';
.label {
  background-color: var(--accent-global);
  padding: 0.5rem 1rem;
  color: var(--icons-color);
  font-size: 16px;
  display: inline-block;
  border-radius: 15px;
  margin: 0.5rem;
  margin-left: 0;

  @include desktop {
    margin: 1rem;
    margin-left: 0;
    font-size: 20px;
    padding: 0.5rem 2rem;
  }
}
</style>
