import themes 	from './_Themes';
import chroma from 'chroma-js';

export const enableChooseThemeModal = value => state => ({ enableChooseThemeModal: value })
export const updateTheme = newTheme => state => ({ currentTheme:newTheme, theme:themes[newTheme] })
export const setFont = newFont => state => ({ currentTheme:'Custom', theme:Object.assign({}, state.theme,{font:newFont, fontFamilies:{sans:newFont}}) })
export const deleteColor = color => state => {
	let newTheme = {...state.theme}
	delete newTheme.colors[color]
	for (let i of Array(10).keys()) {
	    delete newTheme.colors[color + i]
	}
	return {currentTheme:'Custom', theme: newTheme}
}
export const updateColorName = colorName => state => {
	if (colorName.old !== colorName.new) {
		let newColors = {...state.theme.colors}
		newColors[colorName.new] = state.theme.colors[colorName.old]
		delete newColors[colorName.old]
		for (let i of Array(10).keys()) {
			newColors[colorName.new+i] = state.theme.colors[colorName.old+i]
		    delete newColors[colorName.old + i]
		}
		let orderedColors = {};
		Object.keys(newColors).sort((a,b) => {
			if (a === 'base') {
				return -1
			} else {
				if (a < b) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
				return 0;
			}
		}).forEach((color) => {
			orderedColors[color] = newColors[color];
		})
		let newTheme = {...state.theme};
		newTheme.colors = orderedColors;
		return {currentTheme:'Custom', theme: newTheme}
	} else {
		return false;
	}
}

export const updateColorValue = color => state => {
	let newTheme = {...state.theme}
	newTheme.colors[color.name] = color.value.toLowerCase();
	if (color.name !== 'base') {
		for (let [i, shadeValue] of getShades(color.value).entries()) {
			newTheme.colors[color.name+i] = shadeValue.toLowerCase();
		}
	}
	return {currentTheme:'Custom', theme: newTheme}
}

const getShades = (hex) => {
		let spectrum = [];
		const lums = [9,8,7,6,5,4,3,2,1,0].map(n => n + .5).map(n => n / 10);
		return lums.map(lum => {
			return chroma(hex).luminance(lum).hex()
		});
	}
