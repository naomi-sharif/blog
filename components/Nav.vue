<template>
  <nav class="nav">
    <AppDarkModeButton @click="onToggleDarkMode()" />
    <AppHomeButton />
    <AppHamburgerToggle />
  </nav>
</template>

<script>
import AppDarkModeButton from '~/components/DarkModeButton.vue'
import AppHamburgerToggle from '~/components/HamburgerToggle'
import AppHomeButton from '~/components/HomeButton'
export default {
  components: { AppDarkModeButton, AppHomeButton, AppHamburgerToggle },
  methods: {
    onToggleDarkMode() {
      this.$emit('darkModeToggled')
    }
  }
}
</script>
<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}
</style>
