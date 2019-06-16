<template>
  <div class="dummy">
    <div class="dummy__title">
      <span
        v-for="n in pageTitle.length"
        class="js-fade"
      >
        {{ pageTitle[n - 1] }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dummy',
    data() {
      return {
        pageTitle: '',
      };
    },
    mounted() {
      this.getPageTitle();
    },
    updated() {
      const fadeElements = document.querySelectorAll('.js-fade');

      fadeElements.forEach(el => el.classList.add('is-unseen'));


      this
        .$anime
        .timeline()
        .add({
          targets: '.js-fade',
          opacity: 1,
          easing: 'linear',
          duration: 1000,
          delay: this.$anime.stagger(300),
          complete() {
            fadeElements.forEach(el => el.classList.remove('is-unseen'));
          },
        });
    },
    methods: {
      getPageTitle() {
        this.pageTitle = $nuxt.$route.name;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .dummy {
    position: relative;
    height: 100vh;
    color: $color-name--white;
    background: $color-name--cod-gray;
  }

  .dummy__title {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    font-size: calculate-rem(30);
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .is-unseen {
    opacity: 0;
  }
</style>
