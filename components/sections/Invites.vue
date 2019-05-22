<template>
  <section class="invites-section">
    <header class="invites-section__header">
      <div class="invites-section__number">
        01.
      </div>
      <h2 class="invites-section__heading">
        Invites active attention
      </h2>
      <p class="invites-section__description">
        That’s why we invent, and build digital campaigns
      </p>
      <picture class="invites-section__picture">
        <source
          media="(min-width: 1024px)"
          srcset="/home/invites/header/lg.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 1024px)"
          srcset="/home/invites/header/lg.png"
          type="image/png"
        >
        <img
          class="invites-section__image"
          src="/home/invites/header/lg.png"
          alt="cup with brushes"
        >
      </picture>
    </header>
    <div class="invites-section__content">
      <div class="invites-section__promo promo">
        <div class="promo__title">
          Complexity should be secret
        </div>
        <p class="promo__description">
          We know you have a story to tell. You want the world to embrace your incredible ideas, products, and services. Trouble is, you're not sure about the best way to get your message across. No problem. We do.
        </p>
      </div>
      <div class="invites-section__features features">
        <no-ssr placeholder="Loading...">
          <carousel
            class="carousel"
            :loop="true"
            :pagination-enabled="true"
            :pagination-padding="12"
            :per-page="3"
          >
            <slide
              v-for="(feature, index) in features"
              :key="index"
              class="slide"
            >
              <fa :icon="feature.icon" />
              <h4 class="features__title">
                {{ feature.title }}
              </h4>
              <p class="features__description">
                {{ feature.description }}
              </p>
            </slide>
          </carousel>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Invites',
    data() {
      return {
        features: [
          {
            icon: 'share-alt',
            title: 'Handmade layouts',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'graduation-cap',
            title: 'Creative designs',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'tools',
            title: '100% support',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'share-alt',
            title: 'Handmade layouts',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'graduation-cap',
            title: 'Creative designs',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'tools',
            title: '100% support',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'share-alt',
            title: 'Handmade layouts',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'graduation-cap',
            title: 'Creative designs',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
          {
            icon: 'tools',
            title: '100% support',
            description: 'Curabitur sit amet suscipit  sagittis est. Ut acet nisi porttitor vestibulum. Donec a laoreet mi, at pretium lectus.',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
