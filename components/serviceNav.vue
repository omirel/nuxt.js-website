<template>
	<div class="col-xl-4 our-services">
		<h4 class="text-color- custom-text-8 font-weight-bolder custom-title-with-icon custom-title-with-icon-primary mb-4 pb-3">We Can Help You With:</h4>
		<div class="row flex-column pb-lg-5">
			<div class="col" v-for="(row, index) in data" :key="row.slug">
				<nuxt-link v-if="active === row.slug" :to="'/services/' + row.slug" class="text-decoration-none">
					<div class="text-color-light service-card active pl-5 py-4 mb-4 bg-color-primary text-color-light w-100 font-weight-semibold custom-text-4 line-height-6 p-relative">
						{{row.title}}
					</div>
				</nuxt-link>

				<nuxt-link v-else :to="'/services/' + row.slug" class="text-decoration-none">
					<div v-if="index % 2 === 0" class="service-card pl-5 py-4 mb-4 bg-color-dark bg-color-hover-primary w-100 font-weight-semibold custom-text-4 line-height-6 text-color-light p-relative">
						{{row.title}}
					</div>
					<div v-else class="service-card pl-5 py-4 mb-4 bg-color-tertiary bg-color-hover-primary text-color-hover-light w-100 font-weight-semibold custom-text-4 line-height-6 text-color-dark p-relative">
						{{row.title}}
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data', 'active']
	}
</script>
