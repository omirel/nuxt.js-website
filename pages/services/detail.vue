<template>
    <div role="main" class="main" :key="page.slug">
        <Header :data="page"/>
        <GetInTouch :data="teasers"/>
    </div>
</template>

<script>
    import GetInTouch from '~/components/getInTouch'
    import config from '~/config'
    import Header from "~/components/header";
    import Services from "~/components/services";
    import WeHelp from "~/components/weHelp";
    import Clients from "~/components/clients";

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
            const page = await bucket.getObject({slug: "services"})

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
            Clients,
            WeHelp,
            Services,
            Header,
            GetInTouch
        }
    }
</script>
