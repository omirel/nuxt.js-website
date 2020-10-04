<template>
	<div class="container mt-3 mt-xl-0 py-5 p-relative z-index-2">
		<div class="row justify-content-center">
			<div class="col-md-10">
				<h4 class="d-block w-100 text-color-dark custom-text-10 font-weight-bolder text-center mb-4 pb-3 appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200" style="animation-delay: 200ms;">{{data.metadata.subheader}}<span class="text-color-primary">.</span></h4>
				<div class="custom-font-tertiary custom-text-7 line-height-6 mb-4 text-center appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="400" style="animation-delay: 400ms;" v-html="data.metadata.content1">

				</div>
				<div class="custom-text-4 mb-4 text-center appear-animation animated fadeInRightShorter appear-animation-visible" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="600" style="animation-delay: 600ms;" v-html="data.metadata.content2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa quam. Maecenas et sem accumsan, dictum arcu eu, consectetur eros. Nulla tortor est, lobortis vestibulum turpis sed, mollis commodo orci.
				</div>
			</div>
		</div>
		<div class="row justify-content-center py-5">
			<div class="col-md-7 appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="400" style="animation-delay: 400ms;">
				<div class="approach-img bg-color-dark">
					<div class="custom-circle custom-circle-1"></div>
					<div class="custom-circle custom-circle-2 bg-color-dark"></div>
					<span class="custom-circle custom-circle-our-approach-deco-1 bg-color-tertiary p-absolute d-block appear-animation animated zoomIn appear-animation-visible" data-appear-animation="zoomIn" data-appear-animation-delay="100" style="animation-delay: 100ms;"></span>
					<span class="custom-circle custom-circle-our-approach-deco-2 bg-color-tertiary p-absolute d-block appear-animation animated zoomIn appear-animation-visible" data-appear-animation="zoomIn" data-appear-animation-delay="100" style="animation-delay: 100ms;"></span>
					<span class="custom-circle custom-circle-our-approach-deco-3 bg-color-tertiary p-absolute d-block appear-animation animated zoomIn appear-animation-visible" data-appear-animation="zoomIn" data-appear-animation-delay="100" style="animation-delay: 100ms;"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>
