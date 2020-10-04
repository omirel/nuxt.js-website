<template>
	<div class="container p-relative z-index-2 mt-0 mt-lg-3 mt-xl-0 pt-0 pt-md-4 pt-lg-5 pb-xl-5 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
		<div class="row">
			<div class="col-xl-7 py-4 py-xl-0">
				<img class="img-fluid" src="/img/demos/digital-agency-2/about-us/about-us-1.jpg" alt="About Us 1">
			</div>
		</div>
		<div class="row justify-content-end p-relative">
			<div class="col-xl-7">
				<div class="about-us-featured-block w-100 bg-color-primary p-5 text-right custom-title-with-icon custom-title-with-icon-right custom-title-with-icon-light">
					<p class="custom-text-7 text-color-light opacity-7">{{data.metadata.subheader}}</p>
					<h4 class="custom-text-11 text-color-light">{{data.metadata.headline}}</h4>
				</div>
			</div>
		</div>
		<div class="row justify-content-between mt-5 mt-xl-0 mb-lg-4">
			<div class="col-xl-4 d-flex flex-column justify-content-end">
				<div class="custom-font-tertiary custom-text-7 mb-4" v-html="data.metadata.content1"></div>
				<div class="custom-text-4 mb-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400" v-html="data.metadata.content2"></div>
			</div>
			<div class="col-xl-7 py-4 py-xl-0">
				<img class="img-fluid" src="/img/demos/digital-agency-2/about-us/about-us-2.jpg" alt="About Us 2">
				<ul class="custom-list list-unstyled my-3">
					<li class="font-weight-medium custom-text-4 mb-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">{{data.metadata.imagetext}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>
