import themes 	from './_Themes';

export const enableChooseThemeModal = value => state => ({ enableChooseThemeModal: value })
export const updateTheme = newTheme => state => ({ currentTheme:newTheme, theme:themes[newTheme] })
export const setFont = newFont => state => ({ currentTheme:'Custom', theme:Object.assign({}, state.theme,{font:newFont, fontFamilies:{sans:newFont}}) })
