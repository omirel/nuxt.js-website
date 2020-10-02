<template>
    <main :key="page.slug">
        <hero-unit :page="page"/>
        <div class="container" v-html="page.content"></div>
        <div class="small">Modified at: {{ modifiedAt }}</div>
    </main>
</template>

<script>
    import HeroUnit from '../components/hero-unit'
    import config from '../config'

    const Cosmic = require('cosmicjs')
    const api = Cosmic()
    const bucket = api.bucket(config.cosmic.bucket)

    export default {
        data() {
            return {
                loading: true
            }
        },
        async asyncData({params}) {
            const data = await bucket.getObject(params.slug ? params : {slug: "home"})
            const res = data.object
            return {
                page: res,
                loading: false
            }
        },
        head() {
            return {
                title: this.page.title
            }
        },
        computed: {
            modifiedAt() {
                const date = new Date(this.page.modified_at)
                return date.toLocaleString()
            }
        },
        components: {
            HeroUnit
        }
    }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        margin-top: 5px;
        max-width: 960px;
        padding: 15px;
        padding-bottom: 40px;
    }
</style>
