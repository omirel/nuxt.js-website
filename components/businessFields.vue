<template>
	<section class="custom-cards p-relative mb-5 pb-5 z-index-2">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-custom-cards">
					<div class="card border-0 bg-color-dark rounded-0 z-index-1 p-5 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="100">
						<div class="card-body d-flex flex-column justify-content-center align-items-center p-0 my-3">
							<img src="~/assets/img/demos/digital-agency-2/icons/solution.png" alt="Solution" class="mb-5">
							<h4 class="card-title custom-text-8 font-weight-bold text-color-light text-center mb-3">Modified at:</h4>
							<p class="card-text text-center custom-text-4 font-weight-lighter">xxxx</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-custom-cards">
					<div class="card border-0 bg-color-primary rounded-0 z-index-1 p-5 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">
						<div class="card-body d-flex flex-column justify-content-center align-items-center p-0 my-3">
							<img src="~/assets/img/demos/digital-agency-2/icons/advertising.png" alt="Solution" class="mb-5">
							<h4 class="card-title custom-text-8 font-weight-bold text-color-light text-center mb-3">Content Studio</h4>
							<p class="card-text text-center custom-text-4 font-weight-lighter text-color-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-custom-cards">
					<div class="card border-0 bg-color-dark rounded-0 z-index-1 p-5 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">
						<div class="card-body d-flex flex-column justify-content-center align-items-center p-0 my-3">
							<img src="~/assets/img/demos/digital-agency-2/icons/feedback.png" alt="Solution" class="mb-5">
							<h4 class="card-title custom-text-8 font-weight-bold text-color-light text-center mb-3">Digital Marketing</h4>
							<p class="card-text text-center custom-text-4 font-weight-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor</p>
						</div>
					</div>
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
