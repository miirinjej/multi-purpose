<template>
  <section class="testimonials-section">
    <h2 class="testimonials-section__heading heading">
      Global company with a local feel.
    </h2>
    <p class="testimonials-section__description">
      We help forward-thinking clients succeed in digital culture with work that invites active attention.
    </p>
    <div class="ruler ruler--vertical"></div>
    What our Customers are saying...
    <no-ssr placeholder="Loading...">
      <carousel
        :loop="true"
        :pagination-enabled="true"
        :pagination-padding="12"
        :per-page="3"
      >
        <slide
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
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
              :icon="['fas', 'star']"
            /><fa
              v-for="n in 5 - testimonial.starCount"
              :key="n"
              :icon="['far', 'star']"
            />
          </div>
          <p class="testimonials-section__text">
            {{ testimonial.testimonialText }}
          </p>
          <div class="testimonials-section__author">
            {{ testimonial.author }}
          </div>
          <div class="testimonials-section__position">
            {{ testimonial.position }}
          </div>
        </slide>
      </carousel>
    </no-ssr>
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

<style lang="scss" scoped>
</style>
