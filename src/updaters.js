import themes 	from './_Themes'
import theme 	from './_Theme'
import chroma from 'chroma-js'
import jc from 'json-cycle'

const saveTheme = (theme) => {
	localStorage.setItem('savedTheme',JSON.stringify(jc.decycle(theme)))
}

export const setTheme = newTheme => state => { 
	return {theme: newTheme} 
}

export const enableChooseThemeModal = value => state => ({ enableChooseThemeModal: value })
export const updateTheme = newTheme => state => { 
	saveTheme(themes[newTheme])
	return {theme:themes[newTheme]} 
}
export const setFont = newFont => state => { 
	let newTheme = Object.assign({}, state.theme ? state.theme : theme, {name: 'Custom', font:newFont, fontFamilies:[newFont]})
	saveTheme(newTheme)
	return {theme: newTheme}
}
export const setWebFont = webFont => state => {
	let newTheme = Object.assign({}, state.theme ? state.theme : theme, {name: 'Custom', webfont: [webFont.embed], font:webFont.name, fontFamilies:[webFont.name]})
	saveTheme(newTheme)
	return {theme: newTheme}
}
export const deleteColor = color => state => {
	let newTheme = Object.assign({}, state.theme ? state.theme : theme);
	delete newTheme.colors[color]
	for (let i of Array(10).keys()) {
	    delete newTheme.colors[color + i]
	}
	newTheme.name = 'Custom'
	saveTheme(newTheme)
	return {theme: newTheme}
}
export const updateColorName = colorName => state => {
	if (colorName.old !== colorName.new) {
		const prevTheme = state.theme ? state.theme : theme;
		let newColors = {...prevTheme.colors}
		newColors[colorName.new] = prevTheme.colors[colorName.old]
		delete newColors[colorName.old]
		for (let i of Array(10).keys()) {
			newColors[colorName.new+i] = prevTheme.colors[colorName.old+i]
		    delete newColors[colorName.old + i]
		}
		let orderedColors = {}
		Object.keys(newColors).sort((a,b) => {
			if (a === 'base') {
				return -1
			} else {
				if (a < b) {
					return -1
				}
				if (a > b) {
					return 1
				}
				return 0
			}
		}).forEach((color) => {
			orderedColors[color] = newColors[color]
		})
		let newTheme = Object.assign({}, state.theme ? state.theme : theme)
		newTheme.colors = orderedColors
		newTheme.name = 'Custom'
		saveTheme(newTheme)
		return {theme: newTheme}
	} else {
		return false
	}
}

export const updateColorValue = color => state => {
	let newTheme = Object.assign({}, state.theme ? state.theme : theme);
	newTheme.colors[color.name] = color.value.toLowerCase()
	if (color.name !== 'base') {
		for (let [i, shadeValue] of getShades(color.value).entries()) {
			newTheme.colors[color.name+i] = shadeValue.toLowerCase()
		}
	}
	newTheme.name = 'Custom'
	saveTheme(newTheme)
	return {theme: newTheme}
}

const getShades = (hex) => {
		let spectrum = []
		const lums = [9,8,7,6,5,4,3,2,1,0].map(n => n + .5).map(n => n / 10)
		return lums.map(lum => {
			return chroma(hex).luminance(lum).hex()
		})
	}
