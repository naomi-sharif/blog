<template>
  <AppContainer>
    <article class="featured-article-splash">
      <AppLabel />
      <div>
        <AppMainHeading />
        <AppBodyText>This will be the body text</AppBodyText>
      </div>
      <a class="featured-article-splash__link" href="#">
        <FaIcon
          class="featured-article-splash__link-icon"
          :icon="['fa', 'arrow-right']"
      /></a>
    </article>
  </AppContainer>
</template>

<script>
import AppContainer from '~/components/Container'
import AppLabel from '~/components/Label.vue'
import AppMainHeading from '~/components/MainHeading'
import AppBodyText from '~/components/BodyText'

export default {
  components: { AppContainer, AppLabel, AppMainHeading, AppBodyText }
}
</script>

<style lange="scss">
.featured-article-splash {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 112px);
}

.featured-article-splash__link {
  background-color: #462689;
  border-radius: 100%;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.featured-article-splash__link-icon {
  color: var(--icons-color);
  font-size: 2.5rem;
}
</style>
