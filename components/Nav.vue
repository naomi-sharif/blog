<template>
  <nav class="nav">
    <AppContainer>
      <div class="nav__container">
        <a class="nav__social-link" href="#"
          ><FaIcon :icon="['fab', 'linkedin']"
        /></a>
        <a class="nav__social-link" href="#"
          ><FaIcon :icon="['fab', 'github']"
        /></a>
        <AppHomeButton />
        <AppDarkModeButton @click="onToggleDarkMode()" />
      </div>
    </AppContainer>
  </nav>
</template>

<script>
import AppContainer from '~/components/Container'
import AppDarkModeButton from '~/components/DarkModeButton.vue'
import AppHomeButton from '~/components/HomeButton'
export default {
  components: {
    AppDarkModeButton,
    AppHomeButton,
    AppContainer
  },
  methods: {
    onToggleDarkMode() {
      this.$emit('darkModeToggled')
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/mixins';

.nav {
  padding: 1rem 0;
}

.nav__container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
}

.nav__social-link {
  display: inline;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  color: var(--text-color);
}
</style>
