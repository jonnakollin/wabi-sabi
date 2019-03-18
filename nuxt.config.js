const pkg = require('./package')

module.exports = {
  mode: 'universal',
  modules: [
    'nuxtdown',
    '@nuxtjs/style-resources',
  ],
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~assets/less/main.less'],

  styleResources: {
    less: './assets/less/*.less'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
}
