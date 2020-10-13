<template>
  <AppContainer>
    <article>
      <AppArticleHeader>
        <template slot="left">
          <AppLabelContainer>
            <AppLabel>Javascript</AppLabel>
            <AppLabel>React</AppLabel>
            <AppLabel>Begginer</AppLabel>
          </AppLabelContainer>
          <AppMainHeading left />
        </template>
        <AppImage
          slot="right"
          src="https://via.placeholder.com/500x200"
          alt=""
        />
      </AppArticleHeader>
      <AppArticleBody>
        <AppBodyText margin left
          >Lorem ipsum dolor sit amet consectetur ita adipisicing elit. Officiis
          inventore tenetur dia cupiditate praesentium dicta dolorum eum
          excepturi nulla nostrum optio, aspernatur tag accusantium consequatur,
          mollitia cumque animi obcaecati laboriosam reiciendis ipsam. Lorem
          ipsum dolor sit amet consectetur thus adipisicing elit. Officiis
          inventore tenetur cupiditate praesentium dicta dolorum eum excepturi
          nulla nostrum optio, aspernatur accusantium consequatur thus, mollitia
          cumque animi obcaecati laboriosam reiciendis ipsam. Lorem ipsum dolor
          sit amet consectetur thus adipisicing elit. Officiis inventore tenetur
          cupiditate praesentium dicta dolorum eum excepturi nulla nostrum
          optio, aspernatur accusantium consequatur, mollitia cumque animi
          obcaecati laboriosam reiciendis ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis inventore tenetur cupiditate
          praesentium dicta dolorum eum excepturi nulla nostrum optio,
          aspernatur accusantium consequatur, mollitia cumque animi obcaecati
          laboriosam reiciendis ipsam.
        </AppBodyText>
        <AppBodyText margin left
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          inventore tenetur cupiditate praesentium dicta dolorum eum excepturi
          nulla nostrum optio, aspernatur accusantium consequatur, mollitia
          cumque animi obcaecati laboriosam reiciendis ipsam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officiis inventore tenetur
          cupiditate praesentium dicta dolorum eum excepturi nulla nostrum
          optio, aspernatur accusantium consequatur, mollitia cumque animi
          obcaecati laboriosam reiciendis ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis inventore tenetur cupiditate
          praesentium dicta dolorum eum excepturi nulla nostrum optio,
          aspernatur accusantium consequatur, mollitia cumque animi obcaecati
          laboriosam reiciendis ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis inventore tenetur cupiditate praesentium
          dicta dolorum eum excepturi nulla nostrum optio, aspernatur
          accusantium consequatur, mollitia cumque animi obcaecati laboriosam
          reiciendis ipsam.
        </AppBodyText>
        <AppBodyText margin left
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          inventore tenetur cupiditate praesentium dicta dolorum eum excepturi
          nulla nostrum optio, aspernatur accusantium consequatur, mollitia
          cumque animi obcaecati laboriosam reiciendis ipsam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officiis inventore tenetur
          cupiditate praesentium dicta dolorum eum excepturi nulla nostrum
          optio, aspernatur accusantium consequatur, mollitia cumque animi
          obcaecati laboriosam reiciendis ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis inventore tenetur cupiditate
          praesentium dicta dolorum eum excepturi nulla nostrum optio,
          aspernatur accusantium consequatur, mollitia cumque animi obcaecati
          laboriosam reiciendis ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis inventore tenetur cupiditate praesentium
          dicta dolorum eum excepturi nulla nostrum optio, aspernatur
          accusantium consequatur, mollitia cumque animi obcaecati laboriosam
          reiciendis ipsam.
        </AppBodyText>
      </AppArticleBody>
    </article>
  </AppContainer>
</template>

<script>
import AppArticleHeader from '~/components/AppArticleHeader.vue'
import AppLabel from '~/components/Label.vue'
import AppLabelContainer from '~/components/AppLabelContainer.vue'
import AppContainer from '~/components/Container.vue'
import AppMainHeading from '~/components/MainHeading.vue'
import AppImage from '~/components/Image.vue'
import AppBodyText from '~/components/BodyText.vue'
import AppArticleBody from '~/components/AppArticleBody.vue'
export default {
  components: {
    AppArticleHeader,
    AppLabelContainer,
    AppLabel,
    AppMainHeading,
    AppContainer,
    AppImage,
    AppBodyText,
    AppArticleBody
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
