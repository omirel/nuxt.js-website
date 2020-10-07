<template>
	<section class="py-5">
		<div class="container sticky-container">
			<div class="row justify-content-between">
				<div class="col-xl-3">
					<div id="sidebar" class="side-menu-our-work sidebar mb-5">
						<div class="pin-wrapper" style="height: 375.926px;">
							<div data-plugin-sticky=""
								 data-plugin-options="{'minWidth': 991, 'containerSelector': '.sticky-container', 'padding': {'top': 140}}"
								 class="" style="width: 280px;">
								<h4 class="text-color-dark custom-text-8 font-weight-bolder custom-title-with-icon custom-title-with-icon-primary">
									Filter by Category:</h4>
								<WorkCategories :data="data"/>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-8 our-work" id="ourWork">
					<div class="sort-destination w-100" data-sort-id="portfolio">
						<div v-for="(row, index) in data"
							 class="row w-100 mb-4 isotope-item brand-and-identity content-strategy">
							<div class="col-sm-12 custom-our-work overlay overlay-op-9 overlay-show p-0">
								<nuxt-link :to="'/work/' + row.slug" class="d-block h-100">
									<figure class="picture">
										<picture>
											<source :data-srcset="'/img/bg/' + row.metadata.bgimage + '?webp'"
													type="image/webp">
											<source :data-srcset="'/img/bg/' + row.metadata.bgimage" type="image/jpg">
											<img alt="Top Gear Brains EOOD"
												 :data-src="'/img/bg/' + row.metadata.bgimage"
												 class="lazyload h-100 w-100">
										</picture>
									</figure>
									<div class="w-100 custom-our-work-text px-5 py-3 d-flex align-items-end p-absolute bottom-0">
										<div class="text-left p-relative z-index-2 mb-3">
											<h4 class="text-color-light custom-text-8 font-weight-bolder text-decoration-none mb-2">
												{{row.title}}</h4>
											<p class="text-uppercase custom-text-3 text-color-quaternary text-decoration-none mb-3">
												{{row.metadata.category.join(', ')}}</p>
											<span class="custom-text-4 font-weight-semibold m-0 p-0 text-color-light custom-btn-with-arrow custom-btn-with-arrow-primary text-decoration-none">View Work</span>
										</div>
									</div>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import WorkCategories from "./workCategories";
	export default {
				components: {WorkCategories},
		props: ['data']
	}
</script>
