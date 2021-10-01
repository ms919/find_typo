export default {
	ssr: "true",
	target: "static",
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Find Typo",
		htmlAttrs: {
			lang: "ja",
			prefix: "og: http://ogp.me/ns#",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "ひたすらタイポを探すゲーム",
			},
			{ name: "format-detection", content: "telephone=no,address=no,email=no" },
			{ hid: "og:site_name", property: "og:site_name", content: "Find Typo" },
			{ hid: "og:type", property: "og:type", content: "website" },
			{
				hid: "og:url",
				property: "og:url",
				content: "https://find-typo.web.app",
			},
			{ hid: "og:title", property: "og:title", content: "Find Typo" },
			{
				hid: "og:description",
				property: "og:description",
				content: "ひたすらタイポを探すゲーム",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://find-typo.web.app/ogp.png",
			},
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:creator", content: "@sakkkkup" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/typo.ico" },
			{ rel: "canonical", href: "https://find-typo.web.app" },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/css/main", "~/assets/css/play"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/sanitize", "~/plugins/firebase"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		"bootstrap-vue/nuxt",
		"nuxt-fontawesome",
	],
	fontawesome: {
		component: "fa",
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: { loadingScreen: false },
};
