<template>
  <div class="label"><slot /></div>
</template>

<style lang="scss">
.label {
  background-color: var(--accent-global);
  padding: 0.5rem 2rem;
  color: var(--icons-color);
  font-size: 20px;
  display: inline-block;
  border-radius: 15px;
  margin: 0.5rem;
}
</style>
