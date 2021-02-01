<template>
  <footer>
    <div class="logo u-align--center u-space--double--bottom">
      <img
        alt="black lives matter"
        src="/img/logo-footer.png"
      />
      <p>{{ story.content.logo }}</p>
    </div>
    <ul class="social-links u-align--center u-space--double--top">
      <social-link
        v-if="story.content.facebook.url"
        icon="fab fa-facebook-f"
        :link="story.content.facebook.url"
        label="facebook"
      >
      </social-link>
      <social-link
        v-if="story.content.twitter.url"
        icon="fab fa-twitter"
        :link="story.content.twitter.url"
        label="twitter"
      >
      </social-link>
      <social-link
        v-if="story.content.youtube.url"
        icon="fab fa-youtube"
        :link="story.content.youtube.url"
        label="youtube"
      >
      </social-link>
      <social-link
        v-if="story.content.instagram.url"
        icon="fab fa-instagram"
        :link="story.content.instagram.url"
        label="instagram"
      >
      </social-link>
      <social-link
        v-if="story.content.linkedin.url"
        icon="fab fa-linkedin-in"
        :link="story.content.linkedin.url"
        label="linkedin"
      >
      </social-link>
      <social-link
        v-if="story.content.vimeo.url"
        icon="fab fa-vimeo"
        :link="story.content.vimeo.url"
        label="vimeo"
      >
      </social-link>
    </ul>
  </footer>
</template>

<script>
import SocialLink from 'vue-evolve/src/components/VIconsItem'
import storyblok from '../mixins/storyblok.mixin'

export default {
  name: 'VFooter',
  mixins: [storyblok],
  data () {
    return {
      slug: 'website-information'
    }
  },
  components: { SocialLink }
}
</script>

<style
  lang="scss"
  scoped
>
footer {
  background: var(--color-black);
  padding: 3rem;
  color: var(--color-white);
  font-size: 1.25rem;
  font-family: var(--font-family-tertiary);
  text-transform: uppercase;

  .logo {
    margin: auto;
    max-width: 300px;

    p {
      margin-top: .25rem;
    }
  }

  a,
  a:visited,
  a:active {
    color: var(--color-white);
    font-weight: 600;
    font-family: var(--font-family-tertiary);
    font-size: var(--font-size-7);

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
