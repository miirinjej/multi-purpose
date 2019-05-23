import pkg from './package';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'normalize.css' },
    { src: '~/assets/scss/main.scss' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-mq.js',
    { src: '~plugins/vue-carousel.js', mode: 'client' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [ 'nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faFacebookF',
            'faInstagram',
            'faLinkedinIn',
            'faGooglePlusG',
            'faTwitter',
            'faDribbble',
          ],
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: [
            'faStar',
            'faTimesCircle',
          ],
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faArrowDown',
            'faCaretRight',
            'faChevronLeft',
            'faChevronRight',
            'faEnvelope',
            'faGraduationCap',
            'faPhone',
            'faShareAlt',
            'faStar',
            'faTools',
          ],
        },
      ],
    }],
    'nuxt-webfontloader',
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: [
      '~/assets/scss/*/*.scss',
    ],
  },

  /*
  ** Web font loader
  */
  webfontloader: {
    google: {
      families: [
        'Scheherazade',
        'Neuton',
        'Lato:300',
        'PT+Sans',
        'Poppins:300,400',
        'Roboto:300,400,500,700',
      ],
    },
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
};
