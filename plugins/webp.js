import Vue from 'vue';

Vue.mixin({
  mounted() {
    const webpElements = document.querySelectorAll('.js-webp');

    async function supportsWebp() {
      if (!self.createImageBitmap) return false;

      const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      const blob = await fetch(webpData).then(r => r.blob());
      return createImageBitmap(blob).then(() => true, () => false);
    }

    (async () => {
      if (await supportsWebp()) {
        webpElements.forEach(e => e.classList.add('webp'));
      } else {
        webpElements.forEach(e => e.classList.add('no-webp'));
      }
    })();
  },
});
