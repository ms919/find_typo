export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "find_typo",
		htmlAttrs: {
			lang: "ja",
			prefix: "og: http://ogp.me/ns#",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "タイポを探すゲーム" },
			{ name: "format-detection", content: "telephone=no" },
			{ hid: "og:site_name", property: "og:site_name", content: "Find Typo" },
			{ hid: "og:type", property: "og:type", content: "website" },
			{ hid: "og:url", property: "og:url", content: "サイトのURL" },
			{ hid: "og:title", property: "og:title", content: "Find Typo" },
			{
				hid: "og:description",
				property: "og:description",
				content: "タイポを探すゲーム",
			},
			{ hid: "og:image", property: "og:image", content: "" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/css/main"],

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
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: { loadingScreen: false },
};
