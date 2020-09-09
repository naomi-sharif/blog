<template>
  <button type="button" @click="onClick()">Click Me</button>
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
