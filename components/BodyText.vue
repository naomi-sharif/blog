<template>
  <p class="body-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
    provident tempora maxime omnis doloremque voluptas blanditiis repudiandae,
    maiores esse ipsam rem tempore id vitae dolor cum error, eos illum.
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
