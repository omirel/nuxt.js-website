<template>
    <div role="main" class="main" :key="page.slug">
        <Header :data="page"/>
        <Contact :data="page"/>
        <GetInTouch :data="page"/>
    </div>
</template>

<script>
    import config from '../config'
    import Header from "../components/header";
    import GetInTouch from '../components/getInTouch'
    import Contact from "../components/contact";

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
            const data = await bucket.getObject({slug: "contact"})

            return {
                page: data.object,
                loading: false
            }
        },
        head() {
            return {
                title: this.page.title
            }
        },
        components: {
            Header,
            Contact,
            GetInTouch
        }
    }
</script>
