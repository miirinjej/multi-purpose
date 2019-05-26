<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <logo />
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-menu"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="main-menu"
        v-expand="isActive"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <nuxt-link
          v-for="(item, index) in menuItems"
          :key="index"
          class="navbar-item"
          :to="item.url"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
  import Logo from '~/components/Logo';

  export default {
    name: 'Navbar',
    components: {
      Logo,
    },
    directives: {
      expand: {
        inserted(el, binding) {
          if (binding.value !== null) {
            function calculateHeight() {
              const currentState = el.getAttribute('aria-expanded');
              el.classList.add('u-no-transition');
              el.removeAttribute('aria-expanded');
              el.style.height = null;
              el.style.height = `${el.clientHeight}px`;
              el.setAttribute('aria-expanded', currentState);
              setTimeout(() => {
                el.classList.remove('u-no-transition');
              });
            }
            el.classList.add('expand');
            el.setAttribute('aria-expanded', (binding.value) ? 'true' : 'false');
            calculateHeight();
            window.addEventListener('resize', calculateHeight);
          }
        },
        update(el, binding) {
          if (el.style.height && binding.value !== null) {
            el.setAttribute('aria-expanded', (binding.value) ? 'true' : 'false');
          }
        },
      },
    },
    data() {
      return {
        menuItems: [
          {
            name: 'Home',
            url: '/',
          },
          {
            name: 'About us',
            url: '/about',
          },
          {
            name: 'Services',
            url: '/services',
          },
          {
            name: 'Portfolio',
            url: '/portfolio',
          },
          {
            name: 'Blog',
            url: '/blog',
          },
          {
            name: 'Shop',
            url: '/shop',
          },
        ],
        isActive: false,
      };
    },
  };
</script>

<style lang="scss">
  .navbar {
    position: absolute;
    width: 100%;
    background: $color-name--black;

    @include mq($from: 1088px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: calculate-rem(79);
      background: transparent;
    }
  }

  .navbar-brand {
    align-items: center;
    margin-left: calculate-rem(15);
  }

  .navbar-burger {
    margin-right: calculate-rem(15);
    transition: background-color 0.3s;

    &:hover {
      background: $color-name--mine-shaft_base;
    }

    span {
      left: 50%;
      width: calculate-rem(22);
      height: 2px;
      background: $color-name--white;
      transform: translateX(-50%);

      &:nth-child(1) {
        top: calc(50% - 7px);
      }

      &:nth-child(2) {
        top: calc(50% - 1px);
      }

      &:nth-child(3) {
        top: calc(50% + 5px);
      }
    }
  }

  .navbar-menu {
    position: absolute;
    right: 0;
    left: 0;
    display: inline-block;
    padding: 0 0 0 5px;
    overflow: hidden;
    font-family: $font-family--roboto;
    font-size: calculate-rem(13);
    font-weight: 500;
    text-transform: uppercase;
    background: $color-name--black;
    transition: height 0.3s;

    @include mq($from: 1088px) {
      position: static;
      display: flex;
      margin-top: calculate-rem(50);
      font-family: $font-family--scheherazade;
      font-size: calculate-rem(20);
      background: transparent;
    }

    @include mq($from: xl) {
      font-size: calculate-rem(24);
    }

    &[aria-expanded="false"] {
      height: 0 !important;

      @include mq($from: 1088px) {
        height: auto !important;
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      content: "";
      background: $color-name--mine-shaft_dark;
      opacity: 0;
      transition: opacity 0.3s;
    }

    &.is-active {
      &::before {
        opacity: 1;
      }
    }
  }

  .navbar-item {
    color: $color-name--white;
    transition: color 0.3s;

    @include mq($from: 1088px) {
      @include get-rem(padding, 8, 39);
    }

    &:hover:hover {
      color: $color-name--web-orange;
      background: $color-name--black;

      @include mq($from: 1088px) {
        background: transparent;
      }
    }

    &:active {
      outline: $color-name--web-orange;
    }

    &.nuxt-link-exact-active {
      color: $color-name--web-orange;
    }
  }

  .u-no-transition {
    transition-duration: 0s !important;
  }
</style>

<style lang="scss" scoped>
</style>
