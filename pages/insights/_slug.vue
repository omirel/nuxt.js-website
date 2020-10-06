<template>
    <div role="main" class="main" :key="page.slug">
        <InsightsHeader :data="page"/>

        <section class="mt-3 mt-xl-0 py-5 p-relative z-index-2">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 mt-lg-5 mt-xl-0" v-html="page.content"></div>
                </div>
            </div>
        </section>

        <GetInTouch :data="page"/>
    </div>
</template>

<script>
    import GetInTouch from '~/components/getInTouch'
    import config from '~/config'
    import InsightsHeader from "../../components/insightsHeader";

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

            return {
                page: page.object,
                loading: false
            }
        },
        head() {
            return {
                title: this.page.title
            }
        },
        components: {
            InsightsHeader,
            GetInTouch
        }
    }
</script>
