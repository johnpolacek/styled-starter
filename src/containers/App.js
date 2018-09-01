import React, { Component } from 'react';
import { connect } from 'refunk'
import { ThemeProvider } from 'styled-components';
import Head		from './Head'
import SiteNav from '../components/SiteNav'
import { Div, Text, H3 } from 'styled-system-html';
import theme from '../_Theme'
import ChooseThemeModal from '../components/ChooseThemeModal'
import { setTheme } from '../updaters'
import Page from './Page'

class App extends Component {
	componentDidMount() {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('savedTheme')) {
			// overwrite default theme in state with theme from local storage
			this.props.update(setTheme(JSON.parse(localStorage.getItem('savedTheme'))))
		}
	}

	render() {
		return (
			<Page {...this.props} />
		)
	}
}

App.defaultProps = {theme: theme}

export default connect(App);

