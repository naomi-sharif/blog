<template>
  <div :class="{ layout: true, 'layout--light': !darkModeEnabled }">
    <AppNav @darkModeToggled="onToggleDarkMode()" />
    <nuxt />
  </div>
</template>

<script>
import AppNav from '~/components/Nav.vue'

export default {
  components: { AppNav },

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
.layout {
  --primary-color: #160049;
  --secondary-color: #462689;
  --text-color: #ffffff;
  --icons-color: #ffffff;
  --accent-global: #dc3187;
}

.layout.layout--light {
  --primary-color: #fbfaff;
  --secondary-color: #ddd5ef;
  --text-color: #160049;
  --icons-color: #ffffff;
}
</style>
