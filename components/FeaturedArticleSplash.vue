<template>
  <AppContainer>
    <div class="featured-article-splash">
      <div class="featured-article-splash__content">
        <AppLabel>Featured</AppLabel>
        <article>
          <AppMainHeading />
          <AppBodyText
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            soluta similique excepturi obcaecati ducimus molestiae suscipit.
            Fuga dolore ipsum ab laudantium impedit porro ducimus dicta at
            distinctio, facilis earum vitae.</AppBodyText
          >
        </article>
        <a class="featured-article-splash__link" href="#">
          <FaIcon
            class="featured-article-splash__link-icon"
            :icon="['fa', 'arrow-right']"
        /></a>
      </div>

      <div class="featured-article-splash__visuals">
        <AppIllustration />
        <AppIllustration
          :delay="-2.2"
          class="featured-article-splash__visual-offset"
        />
        <AppIllustration :delay="-3.8" />
      </div>
    </div>
  </AppContainer>
</template>

<script>
import AppContainer from '~/components/Container'
import AppLabel from '~/components/Label.vue'
import AppMainHeading from '~/components/MainHeading'
import AppBodyText from '~/components/BodyText'
import AppIllustration from '~/components/Illustration'

export default {
  components: {
    AppContainer,
    AppLabel,
    AppMainHeading,
    AppBodyText,
    AppIllustration
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/mixins';

.featured-article-splash {
  @include desktop {
    display: flex;
  }
}

.featured-article-splash__content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 112px);
  flex-basis: 60%;

  @include desktop {
    align-items: flex-start;
  }
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

.featured-article-splash__visuals {
  display: none;

  @include desktop {
    display: unset;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .featured-article-splash__visual-offset {
    align-self: flex-end;
  }
}
</style>
