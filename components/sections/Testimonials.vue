<template>
  <section class="testimonials-section section js-webp">
    <div class="container">
      <h2 class="testimonials-section__heading heading">
        Global company with a local feel.
      </h2>
      <p class="testimonials-section__description">
        We help forward-thinking clients succeed in digital culture with work that invites active attention.
      </p>
      <div class="ruler ruler--vertical"></div>
      <h3 class="testimonials-section__sub-heading">
        What our customers are saying...
      </h3>
      <no-ssr placeholder="Loading...">
        <carousel
          :autoplay="true"
          :autoplay-timeout="4000"
          :loop="true"
          :pagination-enabled="true"
          :pagination-padding="12"
          :pagination-size="8"
          :per-page-custom="[[0, 1], [769, 2], [1024, 3]]"
        >
          <slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="testimonials-section__card">
              <div class="l-row">
                <picture class="testimonials-section__picture">
                  <source
                    :srcset="`${testimonial.imageUrl}.webp`"
                    type="image/webp"
                  >
                  <source
                    :srcset="`${testimonial.imageUrl}.jpg`"
                    type="image/jpeg"
                  >
                  <img
                    class="testimonials-section__image"
                    :src="`${testimonial.imageUrl}.jpg`"
                    :alt="testimonial.author"
                  >
                </picture>
                <div class="rate">
                  <fa
                    v-for="n in testimonial.starCount"
                    :key="n"
                    class="rate__icon"
                    :icon="['fas', 'star']"
                  /><fa
                    v-for="n in 5 - testimonial.starCount"
                    :key="n"
                    class="rate__icon"
                    :icon="['far', 'star']"
                  />
                </div>
                <p class="testimonials-section__text">
                  &#8220;&nbsp;{{ testimonial.testimonialText }}&nbsp;&#8221;
                </p>
              </div>
              <div class="l-row">
                <div class="testimonials-section__author">
                  {{ testimonial.author }}
                </div>
                <div class="testimonials-section__position">
                  {{ testimonial.position }}
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Testimonials',
    data() {
      return {
        testimonials: [
          {
            imageUrl: '/home/testimonials/slider/gregory_bradley',
            starCount: 3,
            testimonialText: 'Thanks so much for the awesome customer service. So many companies, large and small, have a lot to learn from you. Great job!',
            author: 'Gregory Bradley',
            position: 'New York - USA',
          },
          {
            imageUrl: '/home/testimonials/slider/jonathan_kraus',
            starCount: 5,
            testimonialText: 'A great agency who are not only flexible, efficient and professional but a group of people who really care about delivering results for you.',
            author: 'Jonathan Kraus',
            position: 'Berlin - Germany',
          },
          {
            imageUrl: '/home/testimonials/slider/caroline_de_smet',
            starCount: 4,
            testimonialText: 'The quality of product and more importantly, customer service provided means we keep coming back for more!',
            author: 'Caroline De Smet',
            position: 'Brussels - Belgium',
          },
          {
            imageUrl: '/home/testimonials/slider/gregory_bradley',
            starCount: 3,
            testimonialText: 'Thanks so much for the awesome customer service. So many companies, large and small, have a lot to learn from you. Great job!',
            author: 'Gregory Bradley',
            position: 'New York - USA',
          },
          {
            imageUrl: '/home/testimonials/slider/jonathan_kraus',
            starCount: 5,
            testimonialText: 'A great agency who are not only flexible, efficient and professional but a group of people who really care about delivering results for you.',
            author: 'Jonathan Kraus',
            position: 'Berlin - Germany',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .testimonials-section {
    .VueCarousel {
      margin-bottom: calculate-rem(108);
    }

    .VueCarousel-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .VueCarousel-dot {
      background-color: $color-name--silver !important;

      &--active {
        background-color: $color-name--fuchsia-blue !important;
      }

      &:focus {
        outline-color: $color-name--fuchsia-blue;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .testimonials-section {
    padding-top: calculate-rem(1200);
    margin-top: calculate-rem(-284);
    color: $color-name--black;
    text-align: center;
    background: $color-name--white top center no-repeat;
    background-size: cover;

    @include mq($from: xxl) {
      margin-top: calculate-rem(-475);
    }

    &.no-webp {
      background-image: url(/home/testimonials/background/sm.png);

      @include mq($from: md) {
        background-image: url(/home/testimonials/background/md.png);
      }

      @include mq($from: lg) {
        background-image: url(/home/testimonials/background/lg.png);
      }

      @include mq($from: xl) {
        background-image: url(/home/testimonials/background/xl.png);
      }

      @include mq($from: xxl) {
        background-image: url(/home/testimonials/background/xxl.png);
      }
    }

    &.webp {
      background-image: url(/home/testimonials/background/sm.webp);

      @include mq($from: md) {
        background-image: url(/home/testimonials/background/md.webp);
      }

      @include mq($from: lg) {
        background-image: url(/home/testimonials/background/lg.webp);
      }

      @include mq($from: xl) {
        background-image: url(/home/testimonials/background/xl.webp);
      }

      @include mq($from: xxl) {
        background-image: url(/home/testimonials/background/xxl.webp);
      }
    }
  }

  .testimonials-section__heading {
    margin-bottom: calculate-rem(13);

    @include mq($from: lg) {
      width: 200%;
      margin-left: -50%;
    }
  }

  .testimonials-section__description {
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(24);
    line-height: 1;
    text-transform: uppercase;

    @include mq($from: md) {
      font-size: calculate-rem(30);
    }

    @include mq($from: lg) {
      width: 200%;
      margin-left: -50%;
      font-size: calculate-rem(55);
      letter-spacing: calculate-rem(8);
      transform: scaleX(0.5);
    }

    @include mq($from: xl) {
      font-size: calculate-rem(65);
    }
  }

  .ruler {
    background: $color-name--black;

    &--vertical {
      width: 2px;
      height: calculate-rem(100);
      margin: calculate-rem(55) auto calculate-rem(65) auto;
    }
  }

  .testimonials-section__sub-heading {
    margin-bottom: calculate-rem(51);
    font-size: calculate-rem(18);

    @include mq($from: md) {
      font-size: calculate-rem(24);
    }
  }

  .testimonials-section__card {
    @include get-rem(padding, 50, 30);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calculate-rem(540);
    background: $color-name--white;
    border: 1px solid $color-name--alto;
    transition: background-color 0.3s;

    @include mq($from: xl) {
      width: calculate-rem(371);
    }

    &:hover {
      background: $color-name--fuchsia-blue;
    }
  }

  .testimonials-section__image {
    width: calculate-rem(140);
    height: calculate-rem(140);
    margin-bottom: calculate-rem(42);
    border-radius: 50%;
  }

  .rate {
    margin-bottom: calculate-rem(23);
    color: $color-name--west-side;
    transition: color 0.3s;

    .testimonials-section__card:hover & {
      color: $color-name--white;
    }
  }

  .rate__icon:not(:last-of-type) {
    margin-right: 3px;
  }

  .testimonials-section__text {
    font-family: $font-family--neuton;
    font-size: calculate-rem(20);
    transition: color 0.3s;

    .testimonials-section__card:hover & {
      color: $color-name--white;
    }
  }

  .testimonials-section__author {
    font-family: $font-family--roboto;
    font-size: calculate-rem(14);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: calculate-rem(3);
    transition: color 0.3s;

    .testimonials-section__card:hover & {
      color: $color-name--web-orange;
    }
  }

  .testimonials-section__position {
    font-family: $font-family--roboto;
    font-size: calculate-rem(12);
    color: $color-name--dusty-gray;
    text-transform: uppercase;
    letter-spacing: calculate-rem(2);
    transition: color 0.3s;

    .testimonials-section__card:hover & {
      color: $color-name--web-orange;
    }
  }
</style>
