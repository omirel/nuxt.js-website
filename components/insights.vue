<template>
	<section class="our-insights bg-color-tertiary p-relative py-5">
		<span class="custom-circle custom-circle-2 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="100"></span>
		<span class="custom-circle custom-circle-3 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="100"></span>
		<div class="container py-5">
			<div class="row">
				<div class="col">
					<h4 class="text-color-dark custom-text-10 font-weight-bolder text-center custom-title-with-icon-center custom-title-with-icon custom-title-with-icon-primary pb-5 mb-5 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">Our Insights</h4>
				</div>
			</div>
			<div class="row" v-for="(row, index) in data" v-if="index < limit">
				<div class="col pb-5">
					<article>
						<p class="custom-font-tertiary text-uppercase custom-text-2 mb-1 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">{{ row.created }}</p>
						<h4 class="text-color-dark custom-text-8 font-weight-bolder mb-3 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400"><nuxt-link :to="'/insights/' + row.slug" class="text-color-dark text-color-hover-primary">{{ row.title }}</nuxt-link></h4>
						<p class="custom-text-4 mb-2 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600" v-html="row.content"></p>
						<nuxt-link :to="'/insights/' + row.slug" class="text-color-primary text-color-hover-secondary custom-text-4 font-weight-bolder text-decoration-underline appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="800">Read More...</nuxt-link>
					</article>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<a @click="limit=99" class="btn btn-outline custom-btn-outline btn-primary rounded-0 text-color-dark custom-text-4 bg-color-hover-transparent text-color-hover-light font-weight-semibold custom-btn-with-arrow px-4 py-3 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">View More</a>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
	export default {
		props: ['data'],
		data() {
			return {
				limit: 3
			}
		},
	}
</script>
