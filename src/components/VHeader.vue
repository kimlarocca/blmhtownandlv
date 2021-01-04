<template>
  <header>
    <div class="logo">
      <img
        alt="black lives matter"
        src="/img/logo.png"
      />
      <p>{{ story.content.logo }}</p>
    </div>
  </header>
</template>

<script>
import storyblok from '../mixins/storyblok.mixin'

export default {
  name: 'VHeader',
  mixins: [storyblok],
  data () {
    return {
      slug: 'website-information'
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
@import "src/assets/scss/breakpoints";

header {
  position: relative;
  z-index: 100;
  font-family: var(--font-family-tertiary);
  text-transform: uppercase;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  padding: 1rem;
  width: 175px;
  @media all and (min-width: $large) {
    width: 220px;
    font-size: 1.25rem;
  }

  p {
    margin-top: .25rem;
  }
}
</style>
