<template>
  <section class="what-we-do-section">
    <div class="l-row">
      <div class="l-column">
        <nav class="navigation">
          <button
            class="navigation__button button button--circle"
            aria-label="Previous slide"
            @click="navigate('prev')"
          >
            <fa
              class="navigation__icon"
              icon="chevron-left"
            />
            Prev
          </button>
          <button
            class="navigation__button button button--circle"
            aria-label="Next slide"
            @click="navigate('next')"
          >
            Next
            <fa
              class="navigation__icon"
              icon="chevron-right"
            />
          </button>
        </nav>
        <no-ssr placeholder="Loading...">
          <carousel
            ref="WhatWeDoSectionCarousel"
            :loop="true"
            :pagination-enabled="false"
            :per-page="1"
          >
            <slide
              v-for="(item, index) in slideItems"
              :key="index"
            >
              <picture class="what-we-do-section__picture">
                <source
                  media="(max-width: 768px)"
                  :srcset="`${item.imageUrl}xs.webp`"
                  type="image/webp"
                >
                <source
                  media="(max-width: 768px)"
                  :srcset="`${item.imageUrl}xs.jpg`"
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
              <div class="slide__card">
                <fa :icon="['far', 'times-circle']" />
                <h3 class="slide__title">
                  {{ item.title }}
                </h3>
                <p class="slide__description">
                  {{ item.description }}
                </p>
              </div>
            </slide>
          </carousel>
        </no-ssr>
        <div class="what-we-do-section__number">
          03.
        </div>
      </div>
      <div class="l-column">
        <div class="what-we-do-section__services services">
          <ul class="services__list">
            <li class="services__item">
              Campaign creative
            </li>
            <li class="services__item">
              Copywriting
            </li>
            <li class="services__item">
              Product design
            </li>
            <li class="services__item">
              Photography
            </li>
            <li class="services__item">
              3D/VFX/Post
            </li>
            <li class="services__item">
              Digital outdoor
            </li>
          </ul>
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

<style lang="scss" scoped>
</style>
