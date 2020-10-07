<template>
	<ul class="list-unstyled sort-source sort-source-light">
		<li class="nav-item active" data-option-value="*">
			<a href="/work" data-hash="" data-hash-offset="100"
			   class="text-color-quaternary text-color-hover-dark text-decoration-none mb-2 p-0 d-block font-weight-medium">View
				All</a>
		</li>
		<li v-for="category in categories" class="nav-item" data-option-value=".ui-design">
			<a href="#ourWork" data-hash="" data-hash-offset="100"
			   class="text-color-quaternary text-color-hover-dark text-decoration-none mb-2 p-0 d-block font-weight-medium">{{category}}</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['data'],
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
