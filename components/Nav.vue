<template>
  <nav>
    <AppButton @click="onToggleDarkMode()">Click Me</AppButton>
    <span>Naomi Sharif</span>
    <span>Hamburger</span>
  </nav>
</template>

<script>
import AppButton from '~/components/Button.vue'
export default {
  components: { AppButton },
  methods: {
    onToggleDarkMode() {
      this.$emit('darkModeToggled')
    }
  }
}
</script>
