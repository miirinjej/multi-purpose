<template>
  <nuxt-link
    class="logo"
    to="/"
  >
    <img
      class="logo__image"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAWCAYAAAARprh2AAADxklEQVRoQ+1a7VUUMRS9d7YAtQIFC1BoQMECRCrwowCFAhQsQKEB0QrQAhRoQLAAFRsQLMB9nrsns2d25iWZXXQZ92x+JpnkJfe9+z4yNLMtAC/QbNskNeY2MzsEcMcZXCGpsXG/2yT5eoLvcvvdBXBQX1fyF0WxEtmPZtaPyTJOf2Qfrf8NwA1nLQNwk+R3bx8zWwTwNTJ2oIW7AqhkXCZ5HBF2UgXqIqAwMynTp4hyHJJsKJuZMSinZ0hShMWuAfoLwALJM8+iJmSETgIKQHf/BsDDiJXeIznCLGa2CuCjpwT9fn+71+ttdQ1QyXoEQDQqjRu2C1B8VwGVlV4DIOq96oB0SnKh7A/WKRq+7sxVv9jtvIuASt5dks8uGdDfMf+a8KEjSqh5wYfKsmIxxQaAVxErfUJyL6yTmrdaxi1dBVRnWCe5X9HQafpQASHLrjf5MAVut5yxdwDeOv3nJE8SSiAMPgO47X0rFyR6BiArvOK4ov2iKNbL/i4DKn8q6h0ESVOm3Nj9677k1xpBSenDEsBFh8xsCYBA9dp26PQykXMASyRP/wdAJeOXAOrZLAMaAiTR7oibySmHp0RdttDyPB9Irs04oLkAqYGtmR0XRbHc8Akdy0NjSrkJ4P4U05apUm4lTngEQKlMrin4GgZC1cldslD5Cs9PlPLKpzaCgkDJqcrUJGnLpQAaqFfFBi8gG8rU7/f3er3eY0/IFKCN1KG6wAUoMBqthoOkQPXO8C9Kf5cFqKg3FSBJLhVdFpVzjgvoEcmoppiZFpzEYpLph5kpVVnLcU5lfKYA1bkSblBUq5r3TkrjYrXcHyS94rE2VL9bPG5BgTlAVTVRquLu7RxkFgFVBeln/axmZkVRFCllF+W6PiZ81HgBCSUoJddPXZMnlQRHWxuqNjMl2cr3vJJYfe2ZAzT40sZrT1tAdWmNYnjl1hSs7AIQxcpqBKQLpvJGkl7FY7hcG0AD7ahoPSh7Zdoc0MoFDazJzN6HtCB3ebnxjRS/h71al/DMTEyQS7bngDqApmg3B2I5rvKTylBu9FVOamuhlfnypymrnwNaBzQTWbUBVNGXnm9SRejBOhMAKpegACzmT+eAeoBWQH0eqvttgNQcWeSD1G8n1YXGBTTIJQZRwu0FXHNAY4BWLk9Bj0ptavVLLN/8VLlRsLSTo9kaoO5rRayUVaFe+VLv3dAtgVW+K5VhREFz75QRbVZWIMXyXlte6o+BtlaQmad9Gu+xIcrtpb6NphhmJoqT76oXF+QrT9rQ61863HyZMW7gDy/PlRmXsqUiAAAAAElFTkSuQmCC"
      alt="logo"
    >
  </nuxt-link>
</template>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calculate-rem(120);
    height: calculate-rem(40);
    background: $color-name--black;
    border: 2px solid $color-name--white;

    @include mq($from: 1088px) {
      width: calculate-rem(150);
      height: calculate-rem(50);
      background: $color-name--cod-gray;
    }

    img {
      width: 80%;
    }
  }
</style>
