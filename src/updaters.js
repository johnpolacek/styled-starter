import themes 	from './_Themes';

export const setEditTheme = value => state => ({ editTheme: value })
export const updateTheme = newTheme => state => ({ currentTheme:newTheme, theme:themes[newTheme] })
