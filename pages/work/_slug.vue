<template>
    <div role="main" class="main" :key="page.slug">
        <WorkHeader :data="page"/>

        <div class="container py-5 mb-xl-5 p-relative z-index-2">
            <div class="row">
                <div class="col-xl-4">
                    <div class="project-details pb-5">
                        <h4 class="text-color-primary custom-text-8 font-weight-bolder mb-5 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="100" style="animation-delay: 100ms;">Project Details</h4>
                        <ul class="list-unstyled pl-0 pb-0 mb-0">
                            <li class="mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" style="animation-delay: 200ms;">
                                <span class="text-color-quaternary custom-text-4"><strong class="text-color-dark">Client: </strong>{{page.metadata.client}}</span>
                            </li>
                            <li class="mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="300" style="animation-delay: 300ms;">
                                <span class="text-color-quaternary custom-text-4"><strong class="text-color-dark">Year: </strong>{{page.metadata.year}}</span>
                            </li>
                            <li class="mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400" style="animation-delay: 400ms;">
                                <span class="text-color-quaternary custom-text-4"><strong class="text-color-dark">Timeframe: </strong>{{page.metadata.timeframe}}</span>
                            </li>
                            <li class="mb-4 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="500" style="animation-delay: 500ms;">
                                <span class="text-color-quaternary custom-text-4"><strong class="text-color-dark">Main Service: </strong>{{page.metadata.category.join(', ')}}</span>
                            </li>
                        </ul>
                    </div>
                    <div id="sidebar" class="side-menu-our-work sidebar pt-5">
                        <div class="pin-wrapper"><div data-plugin-sticky="" data-plugin-options="{'minWidth': 991, 'containerSelector': '.sticky-container', 'padding': {'top': 100}}">
                            <div class="pb-4 my-2 pl-0 pr-0">
                                <h4 class="text-color-dark custom-text-8 font-weight-bolder">Filter by Category:</h4>
                                <WorkCategories :data="works"/>
                            </div>
                        </div></div>
                    </div>
                </div>
                <div class="col-xl-8" v-html="page.content"></div>
            </div>
        </div>

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
    import WorkHeader from "../../components/workHeader";
    import WorkCategories from "../../components/workCategories";

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

            const works = await bucket.getObjects({type: "works", props: ["slug", "title", "metadata"]})

            return {
                page: page.object,
                works: works.objects,
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
            WorkCategories,
            WorkHeader,
            ServiceNav,
            Clients,
            WeHelp,
            Services,
            ServiceHeader,
            GetInTouch
        }
    }
</script>
