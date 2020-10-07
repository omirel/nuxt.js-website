<template>
    <div role="main" class="main" :key="page.slug">
        <Header :data="page"/>
        <Works :data="works"/>
        <GetInTouch :data="page"/>
    </div>
</template>

<script>
    import GetInTouch from '~/components/getInTouch'
    import config from '~/config'
    import Header from "~/components/header";
    import Works from "../../components/works";

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
            const page = await bucket.getObject({slug: "work"})

            const works = await bucket.getObjects({type: "works", props: ["slug", "title", "metadata", "content"]})

            return {
                page: page.object,
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
            Works,
            Header,
            GetInTouch
        }
    }
</script>
