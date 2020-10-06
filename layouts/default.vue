<template>
  <div class="body">
    <nav-bar/>
    <nuxt/>
    <site-footer/>
  </div>
</template>

<script>
import NavBar from '../components/nav'
import SiteFooter from '../components/footer'

export default {
  head: {
    meta: [
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
    ],
    link: [
     { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' }
    ]
  },
  components: {
    NavBar,
    SiteFooter
  }
}
</script>
