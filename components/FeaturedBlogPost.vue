<template>
  <article>
    <AppLabel />
    <AppMainHeading />
    <AppBodyText>This will be the body text</AppBodyText>
    <a href="/">This will be the arrow button link</a>
  </article>
</template>

<script>
import AppLabel from '~/components/Label.vue'
import AppMainHeading from '~/components/MainHeading'
import AppBodyText from '~/components/BodyText'

export default {
  components: { AppLabel, AppMainHeading, AppBodyText }
}
</script>
