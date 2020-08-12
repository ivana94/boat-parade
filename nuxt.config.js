export default {
	/*
	 ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
	 */
	components: true,

	/*
	 ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
	 */
	css: ["~/assets/main.css"],

	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		"@nuxtjs/apollo",
	],

	apollo: {
		clientConfigs: {
			default: { httpEndpoint: "https://rickandmortyapi.com/graphql/" },
		},
	},

	/*
	 ** env property
	 */
	env: {
		apiUrl: "https://api.nuxtjs.dev",
	},

	/*
	 ** Modules - https://nuxtjs.org/guides/directory-structure/modules
	 */
	modules: ["@nuxtjs/axios"],
};
