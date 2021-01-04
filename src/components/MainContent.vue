<template>
  <section class="l-container">
    <content-card
      :title="story.content.title"
      :link="story.content.cta_url.url"
      :cta="story.content.cta"
      :image="story.content.image.filename"
      :video="story.content.video.url"
      :altText="story.content.title"
      verticalAlignment="middle"
    >
      <template slot="content">
        <p class="u-space--bottom">
          {{ story.content.description }}
        </p>
      </template>
    </content-card>
  </section>
</template>

<script>
import ContentCard from 'vue-evolve/src/components/ContentCard'
import storyblok from '../mixins/storyblok.mixin'

export default {
  name: 'MainContent',
  components: { ContentCard },
  mixins: [storyblok],
  data () {
    return {
      slug: 'main-content'
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>

</style>
