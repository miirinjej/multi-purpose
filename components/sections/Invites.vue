<template>
  <section class="invites-section">
    <header class="invites-section__header">
      <div class="invites-section__number">
        01.
      </div>
      <h2 class="invites-section__heading heading">
        Invites<br v-if="$mq !== 'sm'"> active attention
      </h2>
      <p class="invites-section__description">
        That’s why we invent, and <br v-if="$mq === 'sm'"> build digital campaigns
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
    <div class="container">
      <div class="section">
        <div class="invites-section__content">
          <div class="invites-section__promo promo">
            <div class="promo__title">
              Complexity should be secret
            </div>
            <p class="promo__description">
              We know you have a story to tell. You want the world to embrace your incredible ideas, products, and
              services. Trouble is, you're not sure about the best way to get your message across. No problem. We do.
            </p>
          </div>
          <div class="invites-section__features features">
            <no-ssr placeholder="Loading...">
              <carousel
                :loop="true"
                :pagination-enabled="true"
                :pagination-padding="12"
                :pagination-size="8"
                :per-page-custom="[[0, 1], [769, 2], [1024, 3]]"
              >
                <slide
                  v-for="(feature, index) in features"
                  :key="index"
                >
                  <fa
                    class="features__icon"
                    :icon="feature.icon"
                    fixed-width
                  />
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

<style lang="scss">
  .invites-section {
    .container {
      margin: 0 auto;
    }

    .VueCarousel {
      z-index: 10;
    }

    .VueCarousel-wrapper {
      margin-bottom: calculate-rem(61);
    }

    .VueCarousel-dot {
      &--active {
        background-color: $color-name--web-orange !important;
      }

      &:focus {
        outline-color: $color-name--web-orange;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .invites-section {
    position: relative;
    padding-top: calculate-rem(724);
    padding-bottom: calculate-rem(30);
    color: $color-name--white;
    background: $color-name--fuchsia-blue;

    @include mq($from: lg) {
      padding-top: calculate-rem(394);
    }

    @include mq($from: xxl) {
      padding-top: calculate-rem(506);
    }
  }

  .invites-section__header {
    position: absolute;
    top: calculate-rem(98);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: calculate-rem(564);
    padding: calculate-rem(25);
    border: calculate-rem(20) solid $color-name--white;

    @include mq($from: md) {
      left: calculate-rem(24);
      width: calculate-rem(564);
    }

    @include mq($from: lg) {
      top: calculate-rem(-282);
    }

    @include mq($from: xl) {
      left: 50%;
      transform: translateX(-50%);
    }

    @include mq($from: xxl) {
      top: calculate-rem(-350);
      width: calculate-rem(700);
      height: calculate-rem(700);
      padding: calculate-rem(35);
    }
  }

  .invites-section__number {
    position: absolute;
    top: -5px;
    margin-left: calculate-rem(-98);
    font-size: calculate-rem(352);
    line-height: 0.7;
    color: $color-name--web-orange;
    transform: scaleX(0.5);

    @include mq($from: xl) {
      top: auto;
      bottom: calculate-rem(-20);
      left: calculate-rem(-324);
      margin-left: 0;
    }
  }

  .invites-section__heading {
    margin-bottom: calculate-rem(25);
    text-align: left;

    @include mq($from: xl) {
      margin-left: calculate-rem(-150);
      white-space: nowrap;
    }

    @include mq($from: xxl) {
      margin-left: calculate-rem(-190);
    }

    &.heading {
      font-size: calculate-rem(65);
      line-height: 0.7;
      transform: none;

      @include mq($from: xl) {
        transform: scaleX(0.5);
      }

      @include mq($from: xxl) {
        font-size: calculate-rem(120);
      }
    }
  }

  .invites-section__description {
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(24);
    line-height: 0.7;
    text-transform: uppercase;

    @include mq($from: xl) {
      margin-left: calculate-rem(-150);
      font-size: calculate-rem(35);
      white-space: nowrap;
      transform: scaleX(0.5);
    }

    @include mq($from: xxl) {
      margin-left: calculate-rem(-190);
      font-size: calculate-rem(40);
    }
  }

  .invites-section__picture {
    display: none;

    @include mq($from: lg) {
      position: absolute;
      top: 25%;
      right: calculate-rem(-305);
      display: inline-block;
    }

    @include mq($from: xl) {
      top: auto;
      bottom: calculate-rem(-123);
    }
  }

  .invites-section__promo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: calculate-rem(71);

    @include mq($from: xl) {
      align-items: center;
      text-align: center;
    }

    @include mq($from: xxl) {
      flex-direction: row;
      text-align: left;
    }
  }

  .promo__title {
    margin-bottom: calculate-rem(30);
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(80);
    line-height: 0.7;

    @include mq($from: xxl) {
      margin-right: calculate-rem(52);
      font-size: calculate-rem(100);
    }
  }

  .promo__description {
    font-size: calculate-rem(20);
  }

  .features__icon {
    margin-bottom: calculate-rem(20);
    font-size: calculate-rem(40);
  }

  .features__title {
    position: relative;
    margin-bottom: calculate-rem(42);
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(30);
    color: $color-name--web-orange;
    text-transform: uppercase;

    &::after {
      position: absolute;
      bottom: calculate-rem(-8);
      left: 0;
      width: calculate-rem(50);
      height: 1px;
      content: "";
      background: $color-name--white;
    }
  }

  .features__description {
    @include mq($from: md) {
      width: 90%;
    }

    @include mq($from: xxl) {
      width: 80%;
    }
  }
</style>
