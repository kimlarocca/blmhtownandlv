<template>
  <div class="l-container l-grid l-grid--3up">
    <card
      v-for="(item, index) in story.content.body" :key="index"
      :title="item.title"
      :image="item.image.filename"
      :altText="item.title"
      :subtitle="item.subtitle"
      :link="item.cta_url.url"
      :cta="item.cta"
      :has-text-link="item.cta && true"
      :description="item.description"
    />
  </div>
</template>

<script>
import Card from 'vue-evolve/src/components/VCard'
import storyblok from '../mixins/storyblok.mixin'

export default {
  name: 'MainContent',
  components: { Card },
  mixins: [storyblok],
  data () {
    return {
      slug: 'national-news'
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>

</style>
