export default {
	head: {
		htmlAttrs: {
			lang: 'en'
		},
		title: process.env.NUXT_ENV_TITLE || 'Top Gear Brains EOOD',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Top Gear Brains EOOD is your digital agency in Varna, Bulgaria'
			}
		],
		script: [
			{ src: '/js/vendor/modernizr.min.js', body: false, defer: true },

			// <!-- Vendor -->
			{ src: '/js/vendor/jquery.min.js', body: true, defer: true },
			{ src: '/js/vendor/jquery.appear.min.js', body: true, defer: true },
			{ src: '/js/vendor/jquery.easing.min.js', body: true, defer: true },
			{ src: '/js/vendor/bootstrap.min.js', body: true, defer: true },
			{ src: '/js/vendor/common.min.js', body: true, defer: true },
			{ src: '/js/vendor/jquery.easypiechart.min.js', body: true, defer: true },
			{ src: '/js/vendor/jquery.lazyload.min.js', body: true, defer: true },


			// <!-- Theme Base, Components and Settings -->
			{ src: '/js/theme.js', body: true, defer: true },

			// <!-- Current Page Vendor and Views -->
			{ src: '/js/vendor/jquery.themepunch.tools.min.js', body: true, defer: true },
			{ src: '/js/vendor/jquery.themepunch.revolution.min.js', body: true, defer: true },

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
		// <!-- Vendor CSS -->
		'~/assets/vendor/bootstrap/css/bootstrap.min.css',

		'~/assets/vendor/animate/animate.compat.css',
		'~/assets/vendor/magnific-popup/magnific-popup.min.css',

		// !-- Theme CSS -->
		'~/assets/css/theme.css',
		'~/assets/css/theme-elements.css',

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
		extend (config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		}
	},
	buildModules: [
		'nuxt-purgecss',
	],
	plugins: [
		'~/plugins/vue-lazysizes.client.js'
	],
	modules: [
		'@bazzite/nuxt-optimized-images',
		'nuxt-webfontloader',
		[
			'nuxt-compress',
			{
				gzip: {
					cache: true
				},
				brotli: {
					threshold: 10240
				}
			}
		]
	],
	
	webfontloader: {
		google: {
			families: ['Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap']
		}
	},
	
	optimizedImages: {
		inlineImageLimit: -1,
		handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
		optimizeImages: true,
		optimizeImagesInDev: false,
		defaultImageLoader: 'img-loader',
		mozjpeg: {
			quality: 40
		},
		optipng: false,
		pngquant: {
			speed: 7,
			quality: [0.40, 0.4]
		},
		webp: {
			quality: 40
		}
	}
};
