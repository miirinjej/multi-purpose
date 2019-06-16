<template>
  <div>
    <transition name="fade">
      <div
        v-if="navbarIsInvisible"
        class="scroll-to-top-button"
        @click="scrollToTop"
      >
        <fa
          class="scroll-to-top-button-icon"
          icon="chevron-up"
        />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ScrollToTopButton',
    data() {
      return {
        navbarIsInvisible: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const { body } = document;
        const html = document.documentElement;
        const navbar = document.querySelector('.navbar');

        this.navbarIsInvisible = ((body.scrollTop
          > (navbar.offsetTop + navbar.offsetHeight))
          || (html.scrollTop
            > (navbar.offsetTop + navbar.offsetHeight)));
      },
      scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .scroll-to-top-button {
    position: fixed;
    right: calculate-rem(24);
    bottom: calculate-rem(24);
    z-index: 999;
    width: calculate-rem(45);
    height: calculate-rem(45);
    font-size: 1.125rem;
    cursor: pointer;
    user-select: none;
    background: $color-name--web-orange;
    border-radius: 50%;

    @include mq($from: xl) {
      right: calculate-rem(46);
      bottom: calculate-rem(46);
    }
  }

  .scroll-to-top-button-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
