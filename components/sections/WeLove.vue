<template>
  <section class="we-love-section">
    <div class="container">
      <div class="we-love-section__content section">
        <h2 class="we-love-section__heading heading">
          We love our clients
        </h2>
        <p class="we-love-section__description">
          We take provide in delivering Intelligent Designs and Engaging Experiences for clients all over the World.
        </p>
      </div>
    </div>
    <div class="we-love-section__background">
      <div class="we-love-section__text">
        We are unity
      </div>
      <div
        class="we-love-section__button"
        @click="play"
      >
        <div class="we-love-section__circle-layer">
          <div class="we-love-section__circle-layer we-love-section__circle-layer--small">
            <div class="we-love-section__icon"></div>
          </div>
        </div>
      </div>
      <picture class="we-love-section__picture">
        <source
          media="(max-width: 768px)"
          srcset="/home/we_love/background/sm.webp"
          type="image/webp"
        >
        <source
          media="(max-width: 768px)"
          srcset="/home/we_love/background/sm.png"
          type="image/png"
        >
        <source
          media="(min-width: 769px) and (max-width: 1023px)"
          srcset="/home/we_love/background/md.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 769px) and (max-width: 1023px)"
          srcset="/home/we_love/background/md.png"
          type="image/png"
        >
        <source
          media="(min-width: 1024px) and (max-width: 1215px)"
          srcset="/home/we_love/background/lg.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 1024px) and (max-width: 1215px)"
          srcset="/home/we_love/background/lg.png"
          type="image/png"
        >
        <source
          media="(min-width: 1216px) and (max-width: 1407px)"
          srcset="/home/we_love/background/xl.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 1216px) and (max-width: 1407px)"
          srcset="/home/we_love/background/xl.png"
          type="image/png"
        >
        <source
          media="(min-width: 1408px)"
          srcset="/home/we_love/background/xxl.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 1408px)"
          srcset="/home/we_love/background/xxl.png"
          type="image/png"
        >
        <img
          class="we-love-section__image"
          src="/home/we_love/background/xxl.png"
          alt="city panorama"
        >
      </picture>
    </div>
    <transition name="fade">
      <div
        v-show="isActive"
        class="modal"
        :class="{ 'is-active': isActive }"
      >
        <div
          class="modal-background"
          @click="stop"
        ></div>
        <div class="modal-content">
          <no-ssr placeholder="Loading...">
            <youtube
              ref="youtube"
              class="youtube"
              video-id="smE-uIljiGo"
            />
          </no-ssr>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="stop"
        ></button>
      </div>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'WeLove',
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      play() {
        this.isActive = true;


        this.$refs.youtube.player.playVideo();
      },
      stop() {
        this.isActive = false;


        this.$refs.youtube.player.stopVideo();
      },
    },
  };
</script>

<style lang="scss">
  .we-love-section {
    iframe {
      width: calculate-rem(640);
      height: calculate-rem(360);
    }
  }
</style>

<style lang="scss" scoped>
  .we-love-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: calculate-rem(203);
    background: $color-name--french-gray_base;

    @include mq($from: md) {
      padding-top: calculate-rem(208);
    }
  }

  .we-love-section__content {
    position: relative;
    z-index: 15;
  }

  .we-love-section__heading {
  }

  .we-love-section__description {
    width: 70%;
    margin: 0 auto;
    font-size: calculate-rem(20);
    text-align: center;

    @include mq($from: xl) {
      font-size: calculate-rem(22);
    }
  }

  .we-love-section__background {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .we-love-section__text {
    position: absolute;
    top: calculate-rem(-54);
    left: 50%;
    z-index: 5;
    align-items: center;
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(600);
    color: $color-name--bombay;
    text-transform: uppercase;
    white-space: nowrap;
    user-select: none;
    transform: translateX(-50%) scaleX(0.5);
  }

  .we-love-section__button {
    position: relative;
    z-index: 10;
    width: calculate-rem(308);
    height: calculate-rem(308);
    cursor: pointer;
    border: 1px solid $color-name--bombay;
    border-radius: 50%;
  }

  .we-love-section__circle-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calculate-rem(164);
    height: calculate-rem(164);
    background: $color-name--french-gray_light;
    border: 1px solid $color-name--bombay;
    border-radius: 50%;
    transform: translate(-50%, -50%);

    &--small {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calculate-rem(87);
      height: calculate-rem(87);
    }
  }

  .we-love-section__icon {
    width: calculate-rem(32);
    margin-left: calculate-rem(16);
    border: calculate-rem(16) solid;
    border-color: transparent transparent transparent $color-name--black;
  }

  .we-love-section__image {
    display: block;
  }

  .youtube {
    display: flex;
    justify-content: center;
  }
</style>
