<template>
    <div role="main" class="main" :key="page.slug">
        <Header :data="page"/>
        <Insights :data="teasers"/>
        <GetInTouch :data="teasers"/>
    </div>
</template>

<script>
    import GetInTouch from '~/components/getInTouch'
    import config from '~/config'
    import Header from "~/components/header";
    import About from "~/components/about";
    import Counter from "~/components/counter";
    import AboutMarketing from "~/components/aboutMarketing";
    import Insights from "~/components/insights";
    import Contact from "~/components/contact";

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
            const data = await bucket.getObject({slug: "insights"})

            const teasers = await bucket.getObjects({type: "insights"})

            return {
                page: data.object,
                teasers: teasers.objects,
                loading: false
            }
        },
        head() {
            return {
                title: this.page.title
            }
        },
        components: {
            Contact,
            Insights,
            AboutMarketing,
            Counter,
            About,
            Header,
            GetInTouch
        }
    }
</script>
