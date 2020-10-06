<template>
  <div class="body">
    <nav-bar :services="services"/>
    <nuxt/>
    <site-footer :offices="offices"/>
  </div>
</template>

<script>
import NavBar from '../components/nav'
import SiteFooter from '../components/footer'
import config from '~/config'

const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket(config.cosmic.bucket)

export default {
  data() {
    return {
      services: [],
      offices: []
    }
  },
  async fetch() {
    const services = await bucket.getObjects({
      type: "services",
      props: ["slug", "title"]
    })
    this.services = services.objects

    const offices = await bucket.getObjects({
      type: "offices",
      props: ["slug", "title", "metadata"]
    })
    this.offices = offices.objects
  },
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
