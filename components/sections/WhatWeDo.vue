<template>
  <section class="what-we-do-section">
    <div class="container">
      <div class="l-row">
        <div class="l-column l-column--first">
          <div
            class="what-we-do-section__square-layer"
            data-aos="fade-up"
          ></div>
          <no-ssr placeholder="Loading...">
            <div class="carousel">
              <carousel
                ref="WhatWeDoSectionCarousel"
                :loop="true"
                :pagination-enabled="false"
                :per-page="1"
                data-aos="fade-up"
                @page-change="descriptionIsVisible = true"
              >
                <slide
                  v-for="(item, index) in slideItems"
                  :key="index"
                >
                  <picture class="what-we-do-section__picture">
                    <source
                      media="(max-width: 768px)"
                      :srcset="`${item.imageUrl}sm.webp`"
                      type="image/webp"
                    >
                    <source
                      media="(max-width: 768px)"
                      :srcset="`${item.imageUrl}sm.jpg`"
                      type="image/jpeg"
                    >
                    <source
                      media="(min-width: 769px)"
                      :srcset="`${item.imageUrl}md.webp`"
                      type="image/webp"
                    >
                    <source
                      media="(min-width: 769px)"
                      :srcset="`${item.imageUrl}md.jpg`"
                      type="image/jpeg"
                    >
                    <img
                      class="what-we-do-section__image"
                      :src="`${item.imageUrl}md.jpg`"
                      :alt="item.title.toLowerCase()"
                    >
                  </picture>
                  <transition name="fade">
                    <div
                      v-show="descriptionIsVisible"
                      class="slide__card"
                    >
                      <fa
                        class="slide__icon"
                        :icon="['far', 'times-circle']"
                        @click="descriptionIsVisible = false"
                      />
                      <h3 class="slide__title">
                        {{ item.title }}
                      </h3>
                      <p class="slide__description">
                        {{ item.description }}
                      </p>
                    </div>
                  </transition>
                </slide>
              </carousel>
              <nav
                class="navigation"
                data-aos="fade-up"
              >
                <div
                  class="navigation__button button button--circle"
                  aria-label="Previous slide"
                  @click="navigate('prev')"
                >
                  <fa
                    class="navigation__icon"
                    icon="chevron-left"
                  />
                </div>
                <span class="navigation__label navigation__label--previous">Prev</span>
                <span class="navigation__label navigation__label--next">Next</span>
                <div
                  class="navigation__button button button--circle"
                  aria-label="Next slide"
                  @click="navigate('next')"
                >
                  <fa
                    class="navigation__icon"
                    icon="chevron-right"
                  />
                </div>
              </nav>
            </div>
          </no-ssr>
          <div
            class="what-we-do-section__number"
            data-aos="new-fade-down"
          >
            03.
          </div>
        </div>
        <div class="l-column l-column--second">
          <div class="what-we-do-section__services services">
            <ul class="services__list services__list--first">
              <li
                class="services__item"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor-placement="top-bottom"
              >
                <fa
                  class="services__icon"
                  icon="headphones"
                  fixed-width
                />
                <span class="services__name">Campaign creative</span>
              </li>
              <li
                class="services__item"
                data-aos="fade-up"
                :data-aos-delay="$mq === 'xxl'? '200' : '100'"
                data-aos-anchor-placement="top-bottom"
              >
                <fa
                  class="services__icon"
                  :icon="['far', 'copyright']"
                  fixed-width
                />
                <span class="services__name">Copywriting</span>
              </li>
              <li
                class="services__item"
                data-aos="fade-up"
                :data-aos-delay="$mq === 'xxl'? '300' : '100'"
                data-aos-anchor-placement="top-bottom"
              >
                <fa
                  class="services__icon"
                  icon="layer-group"
                  fixed-width
                />
                <span class="services__name">Product design</span>
              </li>
            </ul>
            <ul class="services__list services__list--second">
              <li
                class="services__item"
                data-aos="fade-up"
                :data-aos-delay="$mq === 'xxl'? '100' : '100'"
                :data-aos-anchor-placement="$mq === 'xxl'? 'top-center' : 'top-bottom'"
                :data-aos-offset="$mq === 'xxl'? '-20' : '120'"
              >
                <fa
                  class="services__icon"
                  icon="camera-retro"
                  fixed-width
                />
                <span class="services__name">Photography</span>
              </li>
              <li
                class="services__item"
                data-aos="fade-up"
                :data-aos-delay="$mq === 'xxl'? '200' : '100'"
                :data-aos-anchor-placement="$mq === 'xxl'? 'top-center' : 'top-bottom'"
                :data-aos-offset="$mq === 'xxl'? '-20' : '120'"
              >
                <fa
                  class="services__icon"
                  icon="cubes"
                  fixed-width
                />
                <span class="services__name">3D/VFX/Post</span>
              </li>
              <li
                class="services__item"
                data-aos="fade-up"
                :data-aos-delay="$mq === 'xxl'? '300' : '100'"
                :data-aos-anchor-placement="$mq === 'xxl'? 'top-center' : 'top-bottom'"
                :data-aos-offset="$mq === 'xxl'? '-20' : '120'"
              >
                <fa
                  class="services__icon"
                  icon="chart-line"
                  fixed-width
                />
                <span class="services__name">Digital outdoor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'WhatWeDo',
    data() {
      return {
        slideItems: [
          {
            imageUrl: '/home/what_we_do/slider/0/',
            title: 'What we do',
            description: 'Although BLOC occupies a rebel position within their market of operations, their rebel '
              + 'nature was insufficiently manifest in their existing online presence.',
          },
          {
            imageUrl: '/home/what_we_do/slider/0/',
            title: 'What we do',
            description: 'Although BLOC occupies a rebel position within their market of operations, their rebel '
              + 'nature was insufficiently manifest in their existing online presence.',
          },
          {
            imageUrl: '/home/what_we_do/slider/0/',
            title: 'What we do',
            description: 'Although BLOC occupies a rebel position within their market of operations, their rebel '
              + 'nature was insufficiently manifest in their existing online presence.',
          },
        ],
        descriptionIsVisible: true,
      };
    },
    methods: {
      navigate(value) {
        const carousel = this.$refs.WhatWeDoSectionCarousel;
        const { currentPage } = carousel;
        const { pageCount } = carousel;

        if (value === 'prev') {
          currentPage !== 0 ? carousel.goToPage(currentPage - 1) : carousel.goToPage(pageCount - 1);
        } else {
          currentPage < pageCount - 1 ? carousel.goToPage(currentPage + 1) : carousel.goToPage(0);
        }
      },
    },
  };
</script>

<style lang="scss">
  .what-we-do-section {
    .VueCarousel-slide {
      position: relative;
    }
  }
</style>

<style lang="scss" scoped>
  .l-row {
    display: flex;
    flex-direction: column;

    @include mq($from: lg) {
      flex-direction: row;
    }
  }

  .l-column {
    @include mq($from: xxl) {
      padding-top: calculate-rem(64);
    }

    &--first {
      order: 1;

      @include mq($from: xxl) {
        padding-left: calculate-rem(64);
      }
    }

    &--second {
      display: flex;
      flex-direction: column;
      order: -1;

      @include mq($from: xxl) {
        flex-direction: row;
        align-items: center;
        order: 2;
      }
    }
  }

  .what-we-do-section {
    position: relative;
    padding-top: calculate-rem(124);

    @include mq($from: xxl) {
      padding-top: calculate-rem(196);
    }
  }

  .what-we-do-section__square-layer {
    display: none;

    @include mq($from: xxl) {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: calculate-rem(700);
      height: calculate-rem(700);
      border: calculate-rem(20) solid $color-name--black;
    }
  }

  .carousel {
    position: absolute;
    right: 0;
    left: 0;

    @include mq($from: lg) {
      position: relative;
      width: calculate-rem(700);
      height: calculate-rem(572);
    }

    @include mq($from: xl) {
      width: calculate-rem(780);
    }
  }

  .navigation {
    position: absolute;
    top: calculate-rem(30);
    left: calculate-rem(30);
    display: flex;
    align-items: center;
  }

  .button {
    width: calculate-rem(33);
    height: calculate-rem(33);
    background: transparent;
    border: 1px solid $color-name--black;

    &--circle {
      border-radius: 50%;
    }

    &:nth-of-type(1) {
      margin-right: calculate-rem(12);
    }

    &:nth-of-type(2) {
      margin-left: calculate-rem(12);
    }
  }

  .navigation__label {
    display: none;
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(24);
    text-transform: uppercase;

    @include mq($from: lg) {
      display: inline;
    }

    &--previous {
      margin-right: calculate-rem(38);
    }
  }

  .what-we-do-section__picture,
  .what-we-do-section__image {
    display: block;
    object-fit: cover;

    @include mq($from: lg) {
      width: calculate-rem(700);
      height: calculate-rem(572);
    }
  }

  .slide__card {
    padding: calculate-rem(50);
    background: $color-name--fuchsia-blue;

    @include mq($from: lg) {
      width: calculate-rem(700);
    }

    @include mq($from: xl) {
      position: absolute;
      top: 50%;
      right: 0;
      width: calculate-rem(500);
      transform: translateY(-50%);
    }
  }

  .slide__icon {
    position: absolute;
    top: calculate-rem(25);
    right: calculate-rem(25);
    font-size: calculate-rem(33);
    color: $color-name--white;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;

    .slide__card:hover & {
      @include mq($from: xxl) {
        opacity: 1;
      }
    }
  }

  .slide__title {
    margin-bottom: calculate-rem(13);
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(45);
    line-height: 1;
    color: $color-name--web-orange;
    text-transform: uppercase;

    @include mq($from: xxl) {
      margin-bottom: 0;
      font-size: calculate-rem(70);
    }
  }

  .slide__description {
    font-size: calculate-rem(18);
    line-height: 2;
    color: $color-name--white;
  }

  .what-we-do-section__number {
    display: none;

    @include mq($from: md) {
      position: absolute;
      top: 0;
      right: calculate-rem(-105);
      display: inline-block;
      font-size: calculate-rem(352);
      line-height: 0.7;
      color: $color-name--black;
      transform: scaleX(0.5);
    }

    @include mq($from: lg) {
      top: auto;
      bottom: calculate-rem(-240);
      left: calculate-rem(-360);
    }

    @include mq($from: xxl) {
      right: calculate-rem(190);
      bottom: calculate-rem(-142);
      left: auto;
      display: inline-block;
    }
  }

  .what-we-do-section__services {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 calculate-rem(24);

    @include mq($from: xxl) {
      flex-direction: row;
      margin-left: calculate-rem(35);

      &::before {
        position: absolute;
        top: 33.33333333333%;
        left: 0;
        width: 100%;
        height: 1px;
        content: "";
        background: $color-name--mercury;
      }

      &::after {
        position: absolute;
        top: 66.66666666666%;
        left: 0;
        width: 100%;
        height: 1px;
        content: "";
        background: $color-name--mercury;
      }
    }

    @include mq($from: xxl) {
      padding: 0;
    }
  }

  .services__list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calculate-rem(300);
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(24);
    text-transform: uppercase;

    &--first {
      @include mq($from: xxl) {
        margin-right: calculate-rem(35);
      }
    }

    &--second {
      margin-bottom: calculate-rem(45);

      @include mq($from: xxl) {
        margin-bottom: 0;
      }
    }
  }

  .services__item {
    position: relative;
    display: flex;
    align-items: center;

    @include mq($from: xxl) {
      &::after {
        display: none;
      }
    }

    &::after {
      position: absolute;
      bottom: calculate-rem(-20);
      left: 0;
      width: 100%;
      height: 1px;
      content: "";
      background: $color-name--mercury;
    }
  }

  .services__icon {
    margin-right: calculate-rem(5);
    color: $color-name--matterhorn;
  }

  [data-aos="new-fade-down"] {
    opacity: 0;
    transition-property: transform, opacity;
    transform: translateY(-100px) scaleX(0.5);

    &.aos-animate {
      opacity: 1;
    }

    &.aos-animate {
      transform: translateY(0) scaleX(0.5);
    }
  }
</style>
