<template>
	<section class="our-approach py-5 mb-4 mb-xl-5 mt-4 mt-xl-0 p-relative z-index-1" id="intro">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-xl-4 d-flex flex-column justify-content-center align-items-start">
					<h4 class="custom-text-10 mb-4 pb-2 font-weight-bolder custom-title-with-icon custom-title-with-icon-primary appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="100">Our Principles</h4>
					<p class="custom-font-tertiary custom-text-6 line-height-6 font-weight-medium appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">{{data.metadata.content_principles}}</p>
					<a href="/about" class="btn btn-outline custom-btn-outline btn-light border-0 rounded-0 text-color-primary custom-text-5 font-weight-bolder custom-btn-with-arrow bg-transparent p-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">Find Out More</a>
				</div>
				<div class="col-lg-4 py-4 py-lg-0">
					<div class="approach-img bg-color-dark">
						<div class="custom-circle custom-circle-1"></div>
						<div class="custom-circle custom-circle-2 bg-color-dark"></div>
						<span class="custom-circle custom-circle-our-approach-deco-1 bg-color-tertiary p-absolute d-block appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="100"></span>
						<span class="custom-circle custom-circle-our-approach-deco-2 bg-color-tertiary p-absolute d-block appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="100"></span>
						<span class="custom-circle custom-circle-our-approach-deco-3 bg-color-tertiary p-absolute d-block appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="100"></span>
					</div>
				</div>
				<div class="col-lg-6 col-xl-4 d-flex align-items-center mt-4 mt-lg-0">
					<ul class="custom-list list-unstyled ml-xl-2 pl-xl-1">
						<li class="font-weight-medium custom-text-4 mb-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">{{data.metadata.principle_1}}</li>
						<li class="font-weight-medium custom-text-4 mb-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400">{{data.metadata.principle_2}}</li>
						<li class="font-weight-medium custom-text-4 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600">{{data.metadata.principle_3}}</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['data']
	}
</script>
