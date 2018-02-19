const assetPrefix = process.env.ENV_GH_PAGES ? '/styled-starter/' : '';

console.log('process.env.ENV_GH_PAGES',process.env.ENV_GH_PAGES);
console.log('assetPrefix: '+assetPrefix);

module.exports = {
  	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/design': { page: '/design' }
		}
  	},
  	assetPrefix: assetPrefix
}
