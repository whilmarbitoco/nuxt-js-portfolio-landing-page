export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'coding.png' },
		{rel: "stylesheet", type: "text/css", href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules:[],
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-fonts',
      '@nuxt/image'
  ],

  googleFonts: {
    families: {
      Poppins: {
        wght: [600]
      }
    }
        },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}