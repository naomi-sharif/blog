<template>
  <h1 class="main-heading">Travelling in style, learning along the way...</h1>
</template>

<style lang="scss">
@import '~/assets/scss/mixins';
.main-heading {
  font-weight: bold;
  font-size: 40px;
  text-align: center;

  @include desktop {
    text-align: left;
  }
}
</style>
