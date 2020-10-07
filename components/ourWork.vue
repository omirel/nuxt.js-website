<template>
	<section class="our-work overflow-hidden" id="ourWork">
		<div class="container-fluid">
			<div class="row bg-color-dark">
				<div class="col-xl-9 px-0">
					<div class="sort-destination w-100" data-sort-id="portfolio">

						<div v-for="(row, index) in data" v-if="index < limit" class="row w-100 m-0 isotope-item content-marketing email-marketing search-engine-optimize">
							<div class="col-sm-12 custom-our-work overlay overlay-op-9 overlay-show p-0">
								<nuxt-link :to="'/work/' + row.slug" class="d-block">
									<figure class="picture">
										<picture>
											<source :data-srcset="'/img/bg/' + row.metadata.bgimage + '?webp'" type="image/webp">
											<source :data-srcset="'/img/bg/' + row.metadata.bgimage" type="image/jpg">
											<img alt="Top Gear Brains EOOD" :data-src="'/img/bg/' + row.metadata.bgimage" class="lazyload w-100">
										</picture>
									</figure>
									<div class="w-100 custom-our-work-text p-5 d-flex align-items-end p-absolute bottom-0">
										<div class="text-left p-relative z-index-2 mb-3">
											<h4 class="text-color-light custom-text-9 font-weight-bolder text-decoration-none mb-2">{{row.title}}</h4>
											<p class="text-uppercase custom-text-4 text-color-quaternary text-decoration-none mb-3">{{row.metadata.category.join(', ')}}</p>
											<span class="custom-text-4 font-weight-semibold m-0 p-0 text-color-light custom-btn-with-arrow custom-btn-with-arrow-primary text-decoration-none">
												View Work
											</span>
										</div>
									</div>
								</nuxt-link>
							</div>
						</div>

					</div>
				</div>
				<div class="col-xl-3 bg-color-dark px-xl-0 sticky-container">
					<div id="sidebar" class="side-menu-our-work sidebar">
						<div data-plugin-sticky data-plugin-options="{'minWidth': 991, 'containerSelector': '.sticky-container', 'padding': {'top': 100}}">
							<div class="py-5 my-2 pl-5 pr-0">
								<h4 class="text-color-light custom-text-10 font-weight-bolder custom-title-with-icon custom-title-with-icon-primary">Our Work</h4>
								<ul class="list-unstyled sort-source" data-sort-id="portfolio" data-option-key="filter">
									<li class="nav-item active" data-option-value="*">
										<a href="/work" data-hash data-hash-offset="100" class="text-color-quaternary text-color-hover-light text-decoration-none mb-2 py-0 d-block">View All</a>
									</li>
									<li v-for="category in categories" class="nav-item" data-option-value=".ui-design">
										<a href="#ourWork" data-hash data-hash-offset="100" class="text-color-quaternary text-color-hover-light text-decoration-none mb-2 py-0 d-block">{{category}}</a>
									</li>

								</ul>
							</div>
						</div>
					</div>
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
				limit: 4
			}
		},
		computed: {
			categories() {
				let catList = [];

				for(let i=0;i<this.data.length;i++){
					for(let ii=0;ii<this.data[i].metadata.category.length;ii++) {
						if (catList.indexOf(this.data[i].metadata.category[ii]) == -1)
							catList.push(this.data[i].metadata.category[ii])
					}
				}

				return catList
			}
		}
	}
</script>
