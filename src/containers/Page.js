import { injectGlobal } from 'styled-components'
import App from './App'
import theme 	from '../_Theme'

const initial = {
	theme:theme, 
	currentTheme: 'Default Theme'
}

export default (props) => (
	<App {...Object.assign({}, initial, props)} />
)