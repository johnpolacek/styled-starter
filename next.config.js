// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/getting-started': { page: '/getting-started' },
			'/pages': { page: '/pages' }
		}
  	},
  	assetPrefix: !debug ? '/styled-starter/' : ''
}
