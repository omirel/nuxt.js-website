<template>
    <div role="main" class="main" :key="page.slug">
        <Header :data="page"/>
        <About :data="page"/>
        <Counter :data="teasers"/>
        <AboutMarketing :data="teasers"/>
        <Insights :data="teasers"/>
        <GetInTouch :data="teasers"/>
    </div>
</template>

<script>
    import GetInTouch from '../components/getInTouch'
    import config from '../config'
    import Header from "../components/header";
    import About from "../components/about";
    import Counter from "../components/counter";
    import AboutMarketing from "../components/aboutMarketing";
    import Insights from "../components/insights";

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
            const page = await bucket.getObject({slug: "about"})
            const teasers = await bucket.getObjects({type: "insights"})
            return {
                page: page.object,
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
            Insights,
            AboutMarketing,
            Counter,
            About,
            Header,
            GetInTouch
        }
    }
</script>
