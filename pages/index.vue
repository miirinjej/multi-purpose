<template>
  <div>
    <top />
    <invites />
    <we-love />
    <honor />
    <what-we-do />
    <testimonials />
  </div>
</template>

<script>
  import Top from '~/components/sections/Top';
  import Invites from '~/components/sections/Invites';
  import WeLove from '~/components/sections/WeLove';
  import Honor from '~/components/sections/Honor';
  import WhatWeDo from '~/components/sections/WhatWeDo';
  import Testimonials from '~/components/sections/Testimonials';

  export default {
    components: {
      Top,
      Invites,
      WeLove,
      Honor,
      WhatWeDo,
      Testimonials,
    },
  };
</script>

<style>
</style>
