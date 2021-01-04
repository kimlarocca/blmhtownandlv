<template>
  <div class="home">
    <section class="home-hero">
      <div class="home-hero-desktop">
        <img
          :src="story.content.hero.filename"
          :alt="story.content.hero.alt"
        />
      </div>
      <div class="home-hero-mobile">
        <img
          :src="story.content.hero_mobile.filename"
          :alt="story.content.hero_mobile.alt"
        />
      </div>
    </section>
    <section class="l-container">
      <h1>{{ story.content.h1 }}</h1>
      <div class="u-align--center">
        <a
          class="button arrow"
          :href="story.content.cta_url.url"
        >
          {{ story.content.cta }}
        </a>
      </div>
    </section>
    <v-spacer size="quin" />
    <main-content />
    <v-spacer size="quin" />
    <div class="l-container">
      <hr>
    </div>
    <v-spacer size="quin" />
    <section class="l-container">
      <h2 class="u-space--double--bottom u-align--center">Local News</h2>
      <local-news />
    </section>
    <v-spacer size="quin" />
    <div class="l-container">
      <hr>
    </div>
    <v-spacer size="quin" />
    <section class="l-container">
      <h2 class="u-space--double--bottom u-align--center">National News</h2>
      <national-news />
    </section>
    <v-spacer size="quin" />
  </div>
</template>

<script>
import MainContent from '../components/MainContent'
import LocalNews from '../components/LocalNews'
import NationalNews from '../components/NationalNews'
import VSpacer from 'vue-evolve/src/components/VSpacer'
import storyblok from '../mixins/storyblok.mixin'

export default {
  name: 'Home',
  mixins: [storyblok],
  data () {
    return {
      slug: 'website-information'
    }
  },
  metaInfo () {
    return {
      title: this.story.content.title,
      meta: [
        {
          name: 'description',
          content: this.story.content.title
        }
      ]
    }
  },
  components: {
    MainContent,
    LocalNews,
    NationalNews,
    VSpacer
  }
}
</script>

<style
  lang="scss"
  scoped
>
@import "../assets/scss/breakpoints";

.home-hero {

  .home-hero-desktop {
    display: none;
  }

  @media all and (min-width: $medium) {
    .home-hero-mobile {
      display: none;
    }
    .home-hero-desktop {
      display: block;
    }
  }
}

.home h1 {
  max-width: 1100px;
  position: relative;
  z-index: 20;
  margin: 3rem auto;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;

  @media all and (min-width: $medium) {
    font-size: 3rem;
    line-height: 3rem;
  }

  @media all and (min-width: $large) {
    font-size: 4.5rem;
    line-height: 4.5rem;
  }

}
</style>
