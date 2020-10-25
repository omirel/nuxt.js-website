<template>
	<section class="our-services p-relative py-5 my-5">
		<span class="custom-circle custom-circle-2 bg-color-quaternary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="100"></span>
		<div class="container">
			<div class="row justify-content-center">
				<h4 class="text-color-dark custom-text-10 font-weight-bolder text-center custom-title-with-icon-center custom-title-with-icon custom-title-with-icon-primary pb-5 mb-4 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">We Can Help You With:</h4>
			</div>
			<div class="row">
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
					<nuxt-link to="/services/ux-design" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-tertiary bg-color-hover-primary text-color-hover-light w-100 font-weight-semibold custom-text-6 line-height-6 text-color-dark p-relative">
							UX Design
						</div>
					</nuxt-link>
				</div>
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="300">
					<a href="/services/web-development" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-dark bg-color-hover-primary w-100 font-weight-semibold custom-text-6 line-height-6 text-color-light p-relative">
							Web Development
						</div>
					</a>
				</div>
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">
					<nuxt-link to="/services/b2b-software" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-tertiary bg-color-hover-primary text-color-hover-light w-100 font-weight-semibold custom-text-6 line-height-6 text-color-dark p-relative">
							B2B Software
						</div>
					</nuxt-link>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="500">
					<nuxt-link to="/services/content-marketing" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-dark bg-color-hover-primary w-100 font-weight-semibold custom-text-6 line-height-6 text-color-light p-relative">
							Content Marketing
						</div>
					</nuxt-link>
				</div>
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">
					<nuxt-link to="/services/email-marketing" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-tertiary bg-color-hover-primary text-color-hover-light w-100 font-weight-semibold custom-text-6 line-height-6 text-color-dark p-relative">
							Email Marketing
						</div>
					</nuxt-link>
				</div>
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="700">
					<nuxt-link to="/services/search-engine-optimize" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-dark bg-color-hover-primary w-100 font-weight-semibold custom-text-6 line-height-6 text-color-light p-relative">
							Search Engine Optimize
						</div>
					</nuxt-link>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="800">
					<nuxt-link to="/services/social-media-ads" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-tertiary bg-color-hover-primary text-color-hover-light w-100 font-weight-semibold custom-text-6 line-height-6 text-color-dark p-relative">
							Social Media Ads
						</div>
					</nuxt-link>
				</div>
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="900">
					<nuxt-link to="/services/brand-and-identity" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-dark bg-color-hover-primary w-100 font-weight-semibold custom-text-6 line-height-6 text-color-light p-relative">
							Brand and Identity
						</div>
					</nuxt-link>
				</div>
				<div class="col-xl-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1000">
					<nuxt-link to="/services/content-strategy" class="text-decoration-none">
						<div class="service-card mb-4 bg-color-tertiary bg-color-hover-primary text-color-hover-light w-100 font-weight-semibold custom-text-6 line-height-6 text-color-dark p-relative">
							Content Strategy
						</div>
					</nuxt-link>
				</div>
			</div>
<!--			<div class="row justify-content-center">-->
<!--				<div class="col-xl-9">-->
<!--					<p class="custom-text-4 mt-4 mb-0 text-center appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">-->
<!--						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa quam. Maecenas et sem accumsan, dictum arcu eu, consectetur eros. Nulla tortor est, lobortis vestibulum turpis sed, mollis commodo orci.-->
<!--					</p>-->
<!--				</div>-->
<!--			</div>-->
		</div>
	</section>
</template>

<script>
	export default {
		props: ['data']
	}
</script>
