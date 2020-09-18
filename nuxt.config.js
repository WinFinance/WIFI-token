export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'winfinance',
    bodyAttrs: {
      class: 'page-user'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image', href: '/favicon.png' },
      { rel: 'stylesheet', href: '/assets/css/vendor.bundle49f7.css'},
      { rel: 'stylesheet', href:'/assets/css/style49f7.css',  id:'layoutstyle'}
    ],
    script: [
      { src: '/assets/js/jquery.bundle49f7.js', body: true},
      { src: 'assets/js/script49f7.js', body: true}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
