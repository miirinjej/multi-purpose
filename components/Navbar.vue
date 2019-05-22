<template>
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
</template>

<script>
  import Logo from '~/components/Logo';

  export default {
    name: 'Navbar',
    components: {
      Logo,
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
            url: '',
          },
          {
            name: 'Services',
            url: '',
          },
          {
            name: 'Portfolio',
            url: '',
          },
          {
            name: 'Blog',
            url: '',
          },
          {
            name: 'Shop',
            url: '',
          },
        ],
        isActive: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>
