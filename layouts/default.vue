<template>
  <div :class="{ layout: true, 'layout--light': !darkModeEnabled }">
    <AppWrapper>
      <AppNav @darkModeToggled="onToggleDarkMode()" />
      <nuxt />
    </AppWrapper>
  </div>
</template>

<script>
import AppNav from '~/components/Nav.vue'
import AppWrapper from '~/components/Wrapper.vue'

export default {
  components: { AppWrapper, AppNav },
  data() {
    return {
      darkModeEnabled: true
    }
  },

  methods: {
    onToggleDarkMode() {
      this.darkModeEnabled = !this.darkModeEnabled
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

.layout {
  --primary-color: #160049;
  --secondary-color: #462689;
  --text-color: #ffffff;
  --icons-color: #ffffff;
  --accent-global: #dc3187;
  font-family: 'Roboto', sans-serif;
  color: var(--text-color);
}

.layout.layout--light {
  --primary-color: #fbfaff;
  --secondary-color: #ddd5ef;
  --text-color: #160049;
  --icons-color: #ffffff;
}
</style>
