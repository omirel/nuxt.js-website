export default {
	head: {
		title: "My Nuxt.js Application!",
		script: [
			{ src: '/vendor/modernizr/modernizr.min.js', body: false, defer: true },
			
			// <!-- Vendor -->
			{ src: '/vendor/jquery/jquery.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.appear/jquery.appear.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.easing/jquery.easing.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.cookie/jquery.cookie.min.js', body: true, defer: true },
			{ src: '/vendor/popper/umd/popper.min.js', body: true, defer: true },
			{ src: '/vendor/bootstrap/js/bootstrap.min.js', body: true, defer: true },
			{ src: '/vendor/common/common.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.validation/jquery.validate.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.gmap/jquery.gmap.min.js', body: true, defer: true },
			{ src: '/vendor/jquery.lazyload/jquery.lazyload.min.js', body: true, defer: true },
			{ src: '/vendor/isotope/jquery.isotope.min.js', body: true, defer: true },
			{ src: '/vendor/owl.carousel/owl.carousel.min.js', body: true, defer: true },
			{ src: '/vendor/magnific-popup/jquery.magnific-popup.min.js', body: true, defer: true },
			{ src: '/vendor/vide/jquery.vide.min.js', body: true, defer: true },
			{ src: '/vendor/vivus/vivus.min.js', body: true, defer: true },
		
		// <!--(remove-empty-lines-end)-->
		
		// <!-- Theme Base, Components and Settings -->
		{ src: '/js/theme.js', body: true, defer: true },
		
		// <!-- Current Page Vendor and Views -->
		{ src: '/vendor/rs-plugin/js/jquery.themepunch.tools.min.js', body: true, defer: true },
		{ src: '/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js', body: true, defer: true },
		
		// <!-- Current Page Vendor and Views -->
		{	src: '/js/views/view.contact.js', body: true, defer: true },
		
		// <!-- Demo -->
		{ src: '/js/demos/demo-digital-agency-2.js', body: true, defer: true },
		
		// <!-- Theme Custom -->
		{ src: '/js/custom.js', body: true, defer: true },


		// <!-- Theme Initialization Files -->
		{ src: '/js/theme.init.js', body: true, defer: true  }
		
		]
	},
	publicRuntimeConfig: {
		copyright: process.env.NUXT_ENV_COPYRIGHT || 'Mirel Rock Solid'
	},
	privateRuntimeConfig: {
		apiSecret: process.env.API_SECRET
	},
	css: [
		// CSS file in the project
		// '@/assets/main.css',
		
		// <!-- Vendor CSS -->
		'~/assets/vendor/bootstrap/css/bootstrap.min.css',
		'~/assets/vendor/fontawesome-free/css/all.min.css',
		'~/assets/vendor/animate/animate.compat.css',
		'~/assets/vendor/simple-line-icons/css/simple-line-icons.min.css',
		'~/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
		'~/assets/vendor/owl.carousel/assets/owl.theme.default.min.css',
		'~/assets/vendor/magnific-popup/magnific-popup.min.css',
		
		// !-- Theme CSS -->
		'~/assets/css/theme.css',
		'~/assets/css/theme-elements.css',
		'~/assets/css/theme-blog.css',
		'~/assets/css/theme-shop.css',
		
		// <!-- Current Page CSS -->
		'~/assets/vendor/rs-plugin/css/settings.css',
		'~/assets/vendor/rs-plugin/css/layers.css',
		'~/assets/vendor/rs-plugin/css/navigation.css',
		
		// <!-- Demo CSS -->
		'~/assets/css/demos/demo-digital-agency-2.css',
		
		// <!-- Skin CSS -->
		'~/assets/css/skins/skin-digital-agency-2.css',
		
		//  <!-- Theme Custom CSS -->
		'~/assets/css/custom.css',
	],
	build: {
		extractCSS: false
	}
};
