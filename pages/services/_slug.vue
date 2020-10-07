<template>
    <div role="main" class="main" :key="page.slug">
        <ServiceHeader :data="page"/>

        <section class="mt-3 mt-xl-0 py-5 p-relative z-index-2">
            <div class="container">
                <div class="row">
                    <ServiceNav :data="nav" :active="active"/>
                    <div class="col-xl-8 mt-lg-5 mt-xl-0 custom-font-tertiary custom-text-7 mb-4" v-html="page.content"></div>
                </div>
            </div>
        </section>

        <GetInTouch :data="page"/>
    </div>
</template>

<script>
    import GetInTouch from '~/components/getInTouch'
    import config from '~/config'
    import ServiceHeader from "~/components/serviceHeader";
    import Services from "~/components/services";
    import WeHelp from "~/components/weHelp";
    import Clients from "~/components/clients";
    import ServiceNav from "../../components/serviceNav";

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
            const page = await bucket.getObject(params)
            const nav  = await bucket.getObjects({
                type: "services",
                props: ["slug", "title"]
            })

            return {
                page: page.object,
                nav: nav.objects,
                active: params.slug,
                loading: false
            }
        },
        head() {
            return {
                title: this.page.title
            }
        },
        components: {
            ServiceNav,
            Clients,
            WeHelp,
            Services,
            ServiceHeader,
            GetInTouch
        }
    }
</script>
