<template>
	<section class="page-header page-header-modern page-header-background bg-color-dark p-relative z-index-1" data-plugin-lazyload data-original="/img/bg/page-header-bg.jpg">
		<span class="custom-circle custom-circle-1 bg-color-light custom-circle-blur appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400"></span>
		<span class="custom-circle custom-circle-2 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="500"></span>
		<span class="custom-circle custom-circle-3 bg-color-primary appear-animation" data-appear-animation="zoomIn" data-appear-animation-delay="600"></span>
		<div class="container">
			<div class="row mt-5">
				<div class="col">
					<ul class="breadcrumb breadcrumb-light custom-title-with-icon-primary d-block">
						<li><a href="#">Home</a></li>
						<li class="active">{{data.metadata.headline}}</li>
					</ul>
					<h1 class="custom-text-10 font-weight-bolder">{{data.metadata.headline}}</h1>
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
