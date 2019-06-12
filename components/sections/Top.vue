<template>
  <section class="top-section js-webp">
    <div class="container">
      <div class="section">
        <h1 class="top-section__heading heading">
          Honor the details.
        </h1>
        <p class="top-section__description">
          We bring your products or services across in ways that make people feel good as they engage with your business
        </p>
        <div class="top-section__scroll scroll">
          <div class="scroll__ellipse-layer">
            <div class="scroll__circle-layer"></div>
          </div>
          Scroll down
        </div>
      </div>
    </div>
    <aside class="top-section__sidebar">
      <div class="top-section__copyright">
        Copyright 2016, unity template
      </div>
      <div class="l-column">
        <div class="top-section__follow follow">
          <a
            class="top-section__link follow__item"
            href="https://www.facebook.com/"
            rel="noopener"
            target="_blank"
          >
            Facebook
          </a>
          <a
            class="top-section__link follow__item"
            href="https://twitter.com/"
            rel="noopener"
            target="_blank"
          >
            Twitter
          </a>
          <a
            class="top-section__link follow__item"
            href="https://www.instagram.com/"
            rel="noopener"
            target="_blank"
          >
            Instagram
          </a>
          <a
            class="top-section__link follow__item"
            href="https://www.youtube.com/"
            rel="noopener"
            target="_blank"
          >
            Youtube
          </a>
        </div>
        <div class="top-section__phone phone">
          <a
            class="phone__link"
            href="tel:+0800456789"
            target="_blank"
          >
            <fa
              class="phone__icon"
              icon="phone"
              rotation="270"
            />
          </a>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
  export default {
    name: 'Top',
  };
</script>

<style lang="scss" scoped>
  .top-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calculate-rem(940);
    padding-top: calculate-rem(204);
    color: $color-name--white;
    background: $color-name--cod-gray center center no-repeat;
    background-size: cover;

    @include mq($from: 1088px) {
      height: calculate-rem(1324);
      padding-top: calculate-rem(300);
    }

    @include mq($from: lg) {
      height: calculate-rem(1068);
    }

    @include mq($from: xl) {
      height: calculate-rem(1216);
      padding-top: calculate-rem(350);
    }

    @include mq($from: xxl) {
      height: calculate-rem(1316);
      padding-top: calculate-rem(320);
    }

    &.no-webp {
      background-image: url(/home/top/background/sm.jpg);

      @include mq($from: md) {
        background-image: url(/home/top/background/md.jpg);
      }

      @include mq($from: lg) {
        background-image: url(/home/top/background/lg.jpg);
      }

      @include mq($from: xl) {
        background-image: url(/home/top/background/xl.jpg);
      }
    }

    &.webp {
      background-image: url(/home/top/background/sm.webp);

      @include mq($from: md) {
        background-image: url(/home/top/background/md.webp);
      }

      @include mq($from: lg) {
        background-image: url(/home/top/background/lg.webp);
      }

      @include mq($from: xl) {
        background-image: url(/home/top/background/xl.webp);
      }
    }
  }

  .top-section__heading {
    margin-bottom: calculate-rem(10);
    color: $color-name--web-orange;
  }

  .top-section__description {
    margin-bottom: calculate-rem(27);
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(18);
    text-align: center;
    text-transform: uppercase;

    @include mq($from: md) {
      margin-bottom: calculate-rem(261);
      font-size: calculate-rem(22);
    }

    @include mq($from: lg) {
      margin-bottom: calculate-rem(231);
      font-size: calculate-rem(26);
    }

    @include mq($from: xl) {
      width: 92.70833333333%;
      margin-bottom: calculate-rem(197);
      font-size: calculate-rem(38);
    }
  }

  .top-section__scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(28);
  }

  .scroll__ellipse-layer {
    position: relative;
    width: calculate-rem(35);
    height: calculate-rem(55);
    margin-bottom: calculate-rem(8);
    border: 3px solid $color-name--white;
    border-radius: calculate-rem(23);
  }

  .scroll__circle-layer {
    position: absolute;
    top: 29%;
    left: 50%;
    width: calculate-rem(8);
    height: calculate-rem(8);
    font-size: calculate-rem(24);
    background: $color-name--white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: mouse-scroll 2.5s linear infinite;
  }

  @keyframes mouse-scroll {
    0% {
      top: 29%;
      opacity: 1;
    }

    15% {
      top: 50%;
      opacity: 1;
    }

    50% {
      top: 50%;
      opacity: 0;
    }

    100% {
      top: 29%;
      opacity: 0;
    }
  }

  .top-section__sidebar {
    display: none;

    @include mq($from: xl) {
      position: absolute;
      top: calculate-rem(181);
      right: calculate-rem(46);
      bottom: calculate-rem(95);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: $font-family--scheherazade;
      font-size: calculate-rem(18);
      text-transform: uppercase;
      writing-mode: vertical-lr;
      transform: rotate(180deg);

      &::before {
        position: absolute;
        bottom: calculate-rem(-246);
        left: 50%;
        width: 2px;
        height: calculate-rem(246);
        content: "";
        background: $color-name--mine-shaft_light;
      }
    }

    @include mq($from: xxl) {
      font-size: calculate-rem(20);
    }
  }

  .l-column {
    display: flex;
    align-items: center;
  }

  .follow__item:not(:last-of-type) {
    margin-bottom: calculate-rem(62);
  }

  .top-section__phone {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calculate-rem(45);
    height: calculate-rem(45);
    background: $color-name--web-orange;
    border-radius: 50%;
  }

  .phone__link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .phone__icon {
    color: $color-name--black;
  }

  .top-section__follow {
    margin-bottom: calculate-rem(103);
  }

  .top-section__link {
    color: $color-name--white;
    transition: color 0.3s;

    &:hover {
      color: $color-name--web-orange;
    }
  }
</style>
