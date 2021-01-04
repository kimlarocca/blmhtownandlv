<template>
  <div>
    <v-spacer size="dec"/>
    <v-spacer size="dec"/>
    <h1>404 page not found</h1>
    <v-spacer size="oct"/>
    <section class="l-container">
      <div class="l-grid l-grid--4x1 l-grid--large-gutters">
        <div>
          <p>Sorry, but the page you were trying to view does not exist.</p>
        </div>
      </div>
    </section>
    <v-spacer size="oct"/>
  </div>
</template>

<script>
  import VSpacer from 'vue-evolve/src/components/VSpacer'

  export default {
    name: 'Home',
    metaInfo () {
      return {
        title: 'Black Lives Matter Morristown | Page Not Found',
        meta: [
          {
            name: 'description',
            content: 'The website of the Morristown NJ chapter for Black Lives Matter.'
          }
        ]
      }
    },
    components: {
      VSpacer
    }
  }
</script>
