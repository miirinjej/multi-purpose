<template>
  <section class="honor-section">
    <header class="honor-section__header">
      <picture class="honor-section__picture">
        <source
          media="(min-width: 1024px)"
          srcset="/home/honor/header/lg.webp"
          type="image/webp"
        >
        <source
          media="(min-width: 1024px)"
          srcset="/home/honor/header/lg.png"
          type="image/png"
        >
        <img
          class="honor-section__image"
          src="/home/honor/header/lg.png"
          alt="basket with pencils"
        >
      </picture>
      <h2 class="honor-section__heading heading">
        Honor the details
      </h2>
      <p class="honor-section__description">
        For the global service design network
      </p>
      <div class="honor-section__number">
        02.
      </div>
    </header>
  </section>
</template>

<script>
  export default {
    name: 'Honor',
  };
</script>

<style lang="scss" scoped>
  .honor-section {
    position: relative;
    padding-top: calculate-rem(724);
    padding-bottom: calculate-rem(30);
    color: $color-name--black;

    @include mq($from: lg) {
      padding-top: calculate-rem(394);
    }

    @include mq($from: xxl) {
      padding-top: calculate-rem(506);
    }
  }

  .honor-section__header {
    position: absolute;
    top: calculate-rem(98);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: calculate-rem(564);
    padding: calculate-rem(25);
    border: calculate-rem(20) solid $color-name--black;

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

  .honor-section__number {
    position: absolute;
    top: -5px;
    margin-left: calculate-rem(-128);
    font-size: calculate-rem(352);
    line-height: 0.7;
    color: $color-name--web-orange;
    transform: scaleX(0.5);

    @include mq($from: xl) {
      top: auto;
      right: calculate-rem(-394);
      bottom: calculate-rem(-20);
      margin-left: 0;
      color: $color-name--black;
    }
  }

  .honor-section__heading {
    margin-bottom: calculate-rem(25);
    text-align: left;

    @include mq($from: xl) {
      width: 174.28571428571%;
      margin-left: calculate-rem(-150);
      text-align: right;
      white-space: nowrap;
    }

    @include mq($from: xxl) {
      width: 168.57142857143%;
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

  .honor-section__description {
    font-family: $font-family--scheherazade;
    font-size: calculate-rem(24);
    line-height: 0.7;
    text-transform: uppercase;

    @include mq($from: xl) {
      width: 174.28571428571%;
      margin-left: calculate-rem(-150);
      font-size: calculate-rem(35);
      text-align: right;
      white-space: nowrap;
      transform: scaleX(0.5);
    }

    @include mq($from: xxl) {
      width: 168.57142857143%;
      font-size: calculate-rem(40);
    }
  }

  .honor-section__picture {
    display: none;

    @include mq($from: lg) {
      position: absolute;
      top: 25%;
      right: calculate-rem(-265);
      display: inline-block;
    }

    @include mq($from: xl) {
      top: auto;
      bottom: calculate-rem(-177);
      left: calculate-rem(-195);
    }
  }
</style>
