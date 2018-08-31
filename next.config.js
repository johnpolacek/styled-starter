const assetPrefix = process.env.ENV_GH_PAGES ? '/styled-starter' : '';

module.exports = {
  	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/design': { page: '/design' },
			'/components': { page: '/components' }
		}
  	},
  	assetPrefix: assetPrefix
}
