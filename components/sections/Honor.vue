<template>
  <section class="honor-section">
    <header class="honor-section__header">
      <picture class="honor-seciton__picture">
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
          class="honor-seciton__image"
          src="/home/honor/header/lg.png"
          alt="basket with pencils"
        >
      </picture>
      <h2 class="honor-seciton__heading">
        Honor the details
      </h2>
      <p class="honor-seciton__description">
        For the global service design network
      </p>
      <div class="honor-seciton__number">
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
</style>
