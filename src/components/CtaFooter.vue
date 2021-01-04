<template>
  <section
    class="cta-footer u-background-color--gray--light u-padding--quad--top u-padding--quad--bottom u-align--center">
    <h3 class="u-align--center u-space--double--bottom">Take Action Today</h3>
    <div class="l-container l-grid l-grid--4up l-grid--2up--small">
      <a v-for="(button, index) in story.content.body" :key="index" :href="button.link.url" :target="button.new_window && '_blank'" class="cta u-background-color--primary u-padding">
        <h4 v-html="button.text" />
      </a>
    </div>
  </section>
</template>

<script>
  import storyblok from '../mixins/storyblok.mixin'

  export default {
    name: 'CtaFooter',
    mixins: [storyblok],
    data () {
      return {
        slug: 'take-action'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cta-footer {
    .cta {
      opacity: 1;
      transition: var(--transition);

      &:hover {
        opacity: var(--opacity-on-hover);
      }
    }

    a,
    a:visited,
    a:active {
      color: var(--color-black);
    }
  }
</style>
