<template>
    <div role="main" class="main" :key="page.slug">
        <Slider :data="page"/>
        <BusinessFields :data="teasers"/>
        <OurApproach :data="teasers"/>
        <OurWork :data="works"/>
        <WeHelp :data="teasers"/>
        <Insights :data="teasers"/>
        <GetInTouch :data="teasers"/>
    </div>
</template>

<script>
    import HeroUnit from '../components/hero-unit'
    import Insights from '../components/insights'
    import GetInTouch from '../components/getInTouch'
    import config from '../config'
    import WeHelp from "../components/weHelp";
    import OurWork from "../components/ourWork";
    import OurApproach from "../components/OurApproach";
    import BusinessFields from "../components/businessFields";
    import Slider from "../components/slider";

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

            const teasers = await bucket.getObjects({type: "insights"})

            const works = await bucket.getObjects({type: "works", props: ["slug", "title", "metadata"]})

            return {
                page: data.object,
                teasers: teasers.objects,
                works: works.objects,
                loading: false
            }
        },
        head() {
            return {
                title: this.page.title
            }
        },
        components: {
            Slider,
            BusinessFields,
            OurApproach,
            OurWork,
            WeHelp,
            HeroUnit,
            Insights,
            GetInTouch
        }
    }
</script>
